import mongoose from "mongoose";

const designSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    maxlength: 200
  },
  description: {
    type: String,
    maxlength: 1000
  },
  category: {
    type: String,
    enum: ['dress', 'jewellery', 'shoes'],
    required: true
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    publicId: {
      type: String,
      required: true
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  tags: [{
    type: String,
    lowercase: true,
    trim: true
  }],
  isPublic: {
    type: Boolean,
    default: true
  },
  
  // Engagement
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  saves: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  shares: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  
  // Collaboration
  isAvailableForCollab: {
    type: Boolean,
    default: false
  },
  collaborationRequests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collaboration'
  }]
}, {
  timestamps: true
});

// Indexes for better performance
designSchema.index({ userId: 1, createdAt: -1 });
designSchema.index({ category: 1, createdAt: -1 });
designSchema.index({ tags: 1 });
designSchema.index({ isPublic: 1, createdAt: -1 });
designSchema.index({ 'likes': 1 });

// Virtual for likes count
designSchema.virtual('likesCount').get(function() {
  return this.likes ? this.likes.length : 0;
});

// Virtual for saves count
designSchema.virtual('savesCount').get(function() {
  return this.saves ? this.saves.length : 0;
});

// Virtual for primary image
designSchema.virtual('primaryImage').get(function() {
  if (this.images && this.images.length > 0) {
    const primary = this.images.find(img => img.isPrimary);
    return primary || this.images[0];
  }
  return null;
});

// Ensure virtual fields are serialized
designSchema.set('toJSON', { virtuals: true });

// Pre-save middleware to ensure at least one primary image
designSchema.pre('save', function(next) {
  if (this.images && this.images.length > 0) {
    const hasPrimary = this.images.some(img => img.isPrimary);
    if (!hasPrimary) {
      this.images[0].isPrimary = true;
    }
  }
  next();
});

const Design = mongoose.model('Design', designSchema);
export default Design;