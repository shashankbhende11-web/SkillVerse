import mongoose from 'mongoose';

/**
 * SkillCredit Schema & Model
 * Defines documents stored in the 'skillcredits' collection in MongoDB Compass.
 */
const skillCreditSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    transactionType: {
      type: String,
      enum: ['EARNED', 'SPENT', 'REFUNDED', 'BONUS', 'WELCOME_SIGNUP'],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    referenceSession: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Session',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Explicitly register model name and collection name 'skillCredits'
export const SkillCredit = mongoose.model('SkillCredit', skillCreditSchema, 'skillCredits');
