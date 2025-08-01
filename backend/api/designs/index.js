import connectDB from "../utils/db.js";
import Design from "../../models/Design.js";
import User from "../../models/User.js";
import Notification from "../../models/Notification.js";
import { authenticateToken, optionalAuth } from "../utils/auth.js";
//import { sendDesignLikedSMS } from "../utils/sms.js";
import Joi from "joi";

// Validation schemas
const createDesignSchema = Joi.object({
  title: Joi.string().max(200).required(),
  description: Joi.string().max(1000).optional(),
  category: Joi.string().valid('dress', 'jewellery', 'shoes').required(),
  tags: Joi.array().items(Joi.string().max(50)).max(10).optional(),
  isPublic: Joi.boolean().default(true),
  isAvailableForCollab: Joi.boolean().default(false),
  images: Joi.array().items(Joi.object({
    url: Joi.string().uri().required(),
    publicId: Joi.string().required(),
    isPrimary: Joi.boolean().default(false)
  })).min(1).required()
});

const querySchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(50).default(20),
  category: Joi.string().valid('dress', 'jewellery', 'shoes').optional(),
  search: Joi.string().max(100).optional(),
  userId: Joi.string().optional(),
  sortBy: Joi.string().valid('createdAt', 'likes', 'views', 'saves').default('createdAt'),
  sortOrder: Joi.string().valid('asc', 'desc').default('desc'),
  tags: Joi.string().optional()
});

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method === 'GET') {
      return await getDesigns(req, res);
    } else if (req.method === 'POST') {
      return await createDesign(req, res);
    } else {
      return res.status(405).json({
        success: false,
        error: {
          code: 'METHOD_NOT_ALLOWED',
          message: 'Only GET and POST methods allowed'
        }
      });
    }
  } catch (error) {
    console.error('Designs API error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Server error'
      }
    });
  }
}

async function getDesigns(req, res) {
  return new Promise((resolve) => {
    optionalAuth(req, res, async () => {
      try {
        // Validate query parameters
        const { error, value } = querySchema.validate(req.query);
        if (error) {
          return res.status(400).json({
            success: false,
            error: {
              code: 'VALIDATION_ERROR',
              message: 'Invalid query parameters',
              details: error.details.map(detail => ({
                field: detail.path.join('.'),
                message: detail.message
              }))
            }
          });
        }

        const { page, limit, category, search, userId, sortBy, sortOrder, tags } = value;
        const skip = (page - 1) * limit;

        // Build query
        let query = { isPublic: true };

        if (category) {
          query.category = category;
        }

        if (userId) {
          query.userId = userId;
          // If requesting specific user's designs, show all their designs if they're the owner
          if (req.userId && req.userId.toString() === userId) {
            delete query.isPublic;
          }
        }

        if (search) {
          query.$or = [
            { title: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
            { tags: { $in: [new RegExp(search, 'i')] } }
          ];
        }

        if (tags) {
          const tagArray = tags.split(',').map(tag => tag.trim());
          query.tags = { $in: tagArray };
        }

        // Build sort object
        let sort = {};
        if (sortBy === 'likes') {
          sort = { 'likesCount': sortOrder === 'asc' ? 1 : -1 };
        } else if (sortBy === 'saves') {
          sort = { 'savesCount': sortOrder === 'asc' ? 1 : -1 };
        } else {
          sort[sortBy] = sortOrder === 'asc' ? 1 : -1;
        }

        // Execute query with aggregation for virtual fields
        const designs = await Design.aggregate([
          { $match: query },
          {
            $addFields: {
              likesCount: { $size: { $ifNull: ['$likes', []] } },
              savesCount: { $size: { $ifNull: ['$saves', []] } }
            }
          },
          { $sort: sort },
          { $skip: skip },
          { $limit: limit },
          {
            $lookup: {
              from: 'users',
              localField: 'userId',
              foreignField: '_id',
              as: 'user',
              pipeline: [
                {
                  $project: {
                    firstName: 1,
                    lastName: 1,
                    username: 1,
                    companyName: 1,
                    userType: 1,
                    profilePicture: 1,
                    companyLogo: 1
                  }
                }
              ]
            }
          },
          {
            $addFields: {
              user: { $arrayElemAt: ['$user', 0] },
              isLiked: req.userId ? { $in: [req.userId, '$likes'] } : false,
              isSaved: req.userId ? { $in: [req.userId, '$saves'] } : false
            }
          }
        ]);

        // Get total count for pagination
        const totalItems = await Design.countDocuments(query);
        const totalPages = Math.ceil(totalItems / limit);

        res.status(200).json({
          success: true,
          data: {
            designs,
            pagination: {
              currentPage: page,
              totalPages,
              totalItems,
              itemsPerPage: limit,
              hasNext: page < totalPages,
              hasPrev: page > 1
            }
          }
        });
        resolve();
      } catch (error) {
        console.error('Get designs error:', error);
        res.status(500).json({
          success: false,
          error: {
            code: 'INTERNAL_ERROR',
            message: 'Failed to get designs'
          }
        });
        resolve();
      }
    });
  });
}

async function createDesign(req, res) {
  return new Promise((resolve) => {
    authenticateToken(req, res, async () => {
      try {
        // Validate request body
        const { error, value } = createDesignSchema.validate(req.body);
        if (error) {
          return res.status(400).json({
            success: false,
            error: {
              code: 'VALIDATION_ERROR',
              message: 'Validation failed',
              details: error.details.map(detail => ({
                field: detail.path.join('.'),
                message: detail.message
              }))
            }
          });
        }

        const designData = {
          ...value,
          userId: req.userId
        };

        // Ensure at least one image is marked as primary
        if (designData.images && designData.images.length > 0) {
          const hasPrimary = designData.images.some(img => img.isPrimary);
          if (!hasPrimary) {
            designData.images[0].isPrimary = true;
          }
        }

        // Create design
        const design = new Design(designData);
        await design.save();

        // Populate user data
        await design.populate('userId', 'firstName lastName username companyName userType profilePicture companyLogo');

        res.status(201).json({
          success: true,
          message: 'Design created successfully',
          data: design
        });
        resolve();
      } catch (error) {
        console.error('Create design error:', error);
        res.status(500).json({
          success: false,
          error: {
            code: 'INTERNAL_ERROR',
            message: 'Failed to create design'
          }
        });
        resolve();
      }
    });
  });
}