import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

/**
 * Reusable database connection module using Mongoose.
 * Connects automatically to local MongoDB Compass instance (`mongodb://127.0.0.1:27017/SkillVerse`).
 * Includes lifecycle hooks for graceful error handling & reconnection monitoring.
 */
export const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/SkillVerse';

  // Event Listeners for connection lifecycle
  mongoose.connection.on('connected', () => {
    console.log('✅ [MongoDB Mongoose]: Successfully connected to database -> SkillVerse');
  });

  mongoose.connection.on('error', (err) => {
    console.error('❌ [MongoDB Mongoose]: Connection error encountered:', err.message);
  });

  mongoose.connection.on('disconnected', () => {
    console.warn('⚠️ [MongoDB Mongoose]: Database connection lost / disconnected.');
  });

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s if MongoDB instance is unreachable
    });

    console.log(`🚀 [MongoDB Host]: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`💥 [MongoDB Fatal Error]: Failed to establish connection. Reason: ${error.message}`);
    // Exit process with failure code if connection fails during initial boot
    process.exit(1);
  }
};

/**
 * Gracefully closes the database connection when process receives SIGINT / termination signals.
 */
export const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    console.log('🔒 [MongoDB Mongoose]: Connection closed gracefully.');
  } catch (error) {
    console.error('❌ [MongoDB Mongoose]: Error closing connection:', error.message);
  }
};
