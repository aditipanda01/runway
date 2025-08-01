const connectDB = require('../utils/db');
const Notification = require('../../models/Notification');
const { authenticateToken } = require('../utils/auth');
const Joi = require('joi');

// Validation schema
const querySchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(50).default(20),
  unread: Joi.boolean().optional(),
  type: Joi.string().valid(
    'collaboration_request',
    'collaboration_accepted',
    'collaboration_declined',
    'collaboration_completed',
    'new_follower',
    'design_liked',
    'design_saved',
    'design_shared',
    'new_message'
  ).optional()
});

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method === 'GET') {
      return await getNotifications(req, res);
    } else if (req.method === 'PUT') {
      return await markAllAsRead(req, res);
    } else {
      return res.status(405).json({
        success: false,
        error: {
          code: 'METHOD_NOT_ALLOWED',
          message: 'Only GET and PUT methods allowed'
        }
      });
    }
  } catch (error) {
    console.error('Notifications API error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Server error'
      }
    });
  }
}

async function getNotifications(req, res) {
  return new Promise((resolve) => {
    authenticateToken(req, res, async () => {
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

        const { page, limit, unread, type } = value;
        const userId = req.userId;
        const skip = (page - 1) * limit;

        // Build query
        let query = { userId };

        if (unread !== undefined) {
          query.isRead = !unread;
        }

        if (type) {
          query.type = type;
        }

        // Get notifications
        const notifications = await Notification.find(query)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .populate('relatedId', 'title companyName firstName lastName username')
          .lean();

        // Get total count for pagination
        const totalItems = await Notification.countDocuments(query);
        const totalPages = Math.ceil(totalItems / limit);

        // Get unread count
        const unreadCount = await Notification.getUnreadCount(userId);

        res.status(200).json({
          success: true,
          data: {
            notifications,
            unreadCount,
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
        console.error('Get notifications error:', error);
        res.status(500).json({
          success: false,
          error: {
            code: 'INTERNAL_ERROR',
            message: 'Failed to get notifications'
          }
        });
        resolve();
      }
    });
  });
}

async function markAllAsRead(req, res) {
  return new Promise((resolve) => {
    authenticateToken(req, res, async () => {
      try {
        const userId = req.userId;

        // Mark all notifications as read
        await Notification.markAllAsRead(userId);

        res.status(200).json({
          success: true,
          message: 'All notifications marked as read'
        });
        resolve();
      } catch (error) {
        console.error('Mark all as read error:', error);
        res.status(500).json({
          success: false,
          error: {
            code: 'INTERNAL_ERROR',
            message: 'Failed to mark notifications as read'
          }
        });
        resolve();
      }
    });
  });
}