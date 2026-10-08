import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { User, Skill, Mentor, Session, SkillCredit, Certificate } from './models/index.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import sessionRoutes from './routes/sessionRoutes.js';
import postRoutes from './routes/postRoutes.js';

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
// Set payload limits high enough to handle Base64 image uploads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Server health check & MongoDB connection status endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    message: 'SkillVerse Server & MongoDB connection active',
    database: 'SkillVerse (localhost:27017)',
    timestamp: new Date().toISOString(),
  });
});

// Endpoint to view database collection statistics & documents count
app.get('/api/stats', async (req, res) => {
  try {
    const stats = {
      usersCount: await User.countDocuments(),
      skillsCount: await Skill.countDocuments(),
      mentorsCount: await Mentor.countDocuments(),
      sessionsCount: await Session.countDocuments(),
      skillCreditsCount: await SkillCredit.countDocuments(),
      certificatesCount: await Certificate.countDocuments(),
    };
    res.json({ success: true, collections: stats });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/posts', postRoutes);

// Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Exception occurred:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

/**
 * Start Express Server
 * Automatically connects to MongoDB Compass (`mongodb://127.0.0.1:27017/SkillVerse`) before accepting requests.
 */
async function startServer() {
  // Connect to MongoDB
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🌐 [SkillVerse Server]: Running on http://localhost:${PORT}`);
    console.log(`📊 [API Endpoint]: http://localhost:${PORT}/api/stats`);
  });
}

startServer();
