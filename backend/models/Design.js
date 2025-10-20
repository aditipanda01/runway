import mongoose from "mongoose";

const designSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String,
    required: [true, "Design title is required"],
    maxlength: 200
  },
  description: {
    type: String,
    maxlength: 1000,
    default: ""
  },
  category: {
    type: String,
    enum: ["dress", "jewellery", "shoes"],
    required: [true, "Category is required"]
  },
  images: [
    {
      url: {
        type: String,
        required: [true, "Image URL is required"]
      },
      publicId: {
        type: String,
        // Made optional because sometimes only URL is stored
        default: null
      },
      isPrimary: {
        type: Boolean,
        default: false
      },
      resourceType: {
        type: String,
        enum: ["image", "raw"],
        default: "image"
      }
    }
  ],
  tags: [
    {
      type: String,
      lowercase: true,
      trim: true
    }
  ],
  inspiration: {
    type: String,
    maxlength: 500,
    default: ""
  },
  isPublic: {
    type: Boolean,
    default: true
  },

  // Engagement Stats
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  saves: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  shares: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },

  // Collaboration Section
  isAvailableForCollab: {
    type: Boolean,
    default: false
  },
  collaborationRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collaboration"
    }
  ]
}, {
  timestamps: true
});

// Indexes for faster queries
designSchema.index({ userId: 1, createdAt: -1 });
designSchema.index({ category: 1, createdAt: -1 });
designSchema.index({ tags: 1 });
designSchema.index({ isPublic: 1, createdAt: -1 });
designSchema.index({ likes: 1 });

// Virtuals for computed fields
designSchema.virtual("likesCount").get(function () {
  return this.likes ? this.likes.length : 0;
});

designSchema.virtual("savesCount").get(function () {
  return this.saves ? this.saves.length : 0;
});

designSchema.virtual("primaryImage").get(function () {
  if (this.images && this.images.length > 0) {
    const primary = this.images.find(img => img.isPrimary);
    return primary || this.images[0];
  }
  return null;
});

// Ensure virtual fields appear in JSON
designSchema.set("toJSON", { virtuals: true });

// Middleware to ensure one primary image
designSchema.pre("save", function (next) {
  if (this.images && this.images.length > 0) {
    const hasPrimary = this.images.some(img => img.isPrimary);
    if (!hasPrimary) {
      this.images[0].isPrimary = true;
    }
  }
  next();
});

const Design = mongoose.model("Design", designSchema);
export default Design;
