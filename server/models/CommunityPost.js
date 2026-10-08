import mongoose from 'mongoose';

const replySchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const communityPostSchema = new mongoose.Schema(
  {
    authorId: { type: String, required: true },
    authorName: { type: String, required: true },
    authorAvatar: { type: String, default: '' },
    category: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
    replies: [replySchema],
    date: { type: Date, default: Date.now }
  },
  {
    timestamps: true
  }
);

export const CommunityPost = mongoose.model('CommunityPost', communityPostSchema);
