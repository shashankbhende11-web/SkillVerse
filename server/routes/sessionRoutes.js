import express from 'express';
import { getSessions, createSession, updateSession } from '../controllers/sessionController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getSessions);
router.post('/', authMiddleware, createSession);
router.put('/:id', authMiddleware, updateSession);

export default router;
