import mongoose from 'mongoose';

/**
 * User Schema & Model
 * Defines documents stored in the 'users' collection in MongoDB Compass.
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: [true, 'Password hash is required'],
    },
    role: {
      type: String,
      enum: ['learner', 'mentor', 'admin', 'Both', 'Learner', 'Mentor'],
      default: 'Both',
    },
    avatar: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: 'SkillVerse passionate member',
    },
    country: {
      type: String,
      default: '',
    },
    languages: {
      type: [String],
      default: ['English'],
    },
    skillsTeach: {
      type: [String],
      default: [],
    },
    skillsLearn: {
      type: [String],
      default: [],
    },
    availability: {
      days: { type: [String], default: [] },
      hours: { type: [String], default: [] },
    },
    socialLinks: {
      github: { type: String, default: '' },
      linkedin: { type: String, default: '' },
      twitter: { type: String, default: '' },
    },
    creditsBalance: {
      type: Number,
      default: 50,
      min: [0, 'Credits balance cannot be negative'],
    },
    xp: {
      type: Number,
      default: 0,
    },
    streak: {
      type: Number,
      default: 1,
    },
    level: {
      type: Number,
      default: 1,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Mongoose automatically links model 'User' to collection 'users'
export const User = mongoose.model('User', userSchema);
