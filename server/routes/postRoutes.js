import express from 'express';
import { getPosts, createPost, likePost, replyToPost } from '../controllers/postController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getPosts);
router.post('/', authMiddleware, createPost);
router.put('/:id/like', authMiddleware, likePost);
router.post('/:id/reply', authMiddleware, replyToPost);

export default router;
