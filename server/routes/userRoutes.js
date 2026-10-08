import express from 'express';
import { getUsers, getProfile, updateProfile } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getUsers);
router.get('/:id', authMiddleware, getProfile);
router.put('/:id', authMiddleware, updateProfile);

export default router;
