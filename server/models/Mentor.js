import mongoose from 'mongoose';

/**
 * Mentor Schema & Model
 * Defines documents stored in the 'mentors' collection in MongoDB Compass.
 */
const mentorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    expertise: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill',
      },
    ],
    hourlyRateCredits: {
      type: Number,
      required: true,
      default: 50,
    },
    rating: {
      type: Number,
      default: 5.0,
      min: 0,
      max: 5,
    },
    totalSessionsCompleted: {
      type: Number,
      default: 0,
    },
    availabilityStatus: {
      type: String,
      enum: ['Available', 'Busy', 'Offline'],
      default: 'Available',
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Mentor = mongoose.model('Mentor', mentorSchema);
