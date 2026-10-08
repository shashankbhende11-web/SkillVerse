import mongoose from 'mongoose';

/**
 * Skill Schema & Model
 * Defines documents stored in the 'skills' collection in MongoDB Compass.
 */
const skillSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Skill title is required'],
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Skill category is required'],
      enum: ['Software Development', 'Data & AI', 'Design & Creative', 'Business & Marketing', 'Personal Growth'],
    },
    description: {
      type: String,
      required: [true, 'Skill description is required'],
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced', 'All Levels'],
      default: 'All Levels',
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    icon: {
      type: String,
      default: 'code',
    },
  },
  {
    timestamps: true,
  }
);

export const Skill = mongoose.model('Skill', skillSchema);
