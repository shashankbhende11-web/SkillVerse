import mongoose from 'mongoose';

/**
 * Certificate Schema & Model
 * Defines documents stored in the 'certificates' collection in MongoDB Compass.
 */
const certificateSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    skill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Skill',
      required: true,
    },
    certificateCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
    },
    issuer: {
      type: String,
      default: 'SkillVerse Learning Academy',
    },
    score: {
      type: Number,
      default: 95,
    },
    issueDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const Certificate = mongoose.model('Certificate', certificateSchema);
