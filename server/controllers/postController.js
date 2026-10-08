import { CommunityPost } from '../models/index.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await CommunityPost.find().sort({ createdAt: -1 });
    const response = posts.map(p => ({
      id: p._id,
      authorId: p.authorId,
      authorName: p.authorName,
      authorAvatar: p.authorAvatar,
      category: p.category,
      title: p.title,
      content: p.content,
      likes: p.likes,
      replies: p.replies.map(rep => ({
        authorName: rep.authorName,
        text: rep.text,
        date: rep.date ? new Date(rep.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
      })),
      date: p.date || p.createdAt
    }));
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { authorId, authorName, authorAvatar, category, title, content } = req.body;

    const newPost = new CommunityPost({
      authorId,
      authorName,
      authorAvatar: authorAvatar || '',
      category,
      title,
      content,
      likes: 0,
      replies: []
    });

    await newPost.save();

    const response = {
      id: newPost._id,
      authorId,
      authorName,
      authorAvatar: newPost.authorAvatar,
      category,
      title,
      content,
      likes: 0,
      replies: [],
      date: newPost.createdAt
    };

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const post = await CommunityPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    post.likes += 1;
    await post.save();

    return res.json({ success: true, likes: post.likes });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const replyToPost = async (req, res) => {
  try {
    const { authorName, text } = req.body;
    const post = await CommunityPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    post.replies.push({
      authorName,
      text,
      date: new Date()
    });

    await post.save();

    return res.json({ success: true, replies: post.replies });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
