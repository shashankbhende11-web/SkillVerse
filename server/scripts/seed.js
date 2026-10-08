import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB, disconnectDB } from '../config/db.js';
import { User, Skill, Mentor, Session, SkillCredit, Certificate } from '../models/index.js';

dotenv.config();

async function seedDatabase() {
  console.log('🌱 Starting MongoDB database seeding for SkillVerse...');

  await connectDB();

  try {
    // Clear existing collection data to ensure clean initialization
    await User.deleteMany({});
    await Skill.deleteMany({});
    await Mentor.deleteMany({});
    await Session.deleteMany({});
    await SkillCredit.deleteMany({});
    await Certificate.deleteMany({});

    console.log('🧹 Existing collections cleared successfully.');

    // Generate real bcrypt password hashes
    const salt = await bcrypt.genSalt(10);
    const adminPasswordHash = await bcrypt.hash('admin123', salt);
    const userPasswordHash = await bcrypt.hash('password123', salt);

    // 1. Seed Users (Collection: users)
    const createdUsers = await User.insertMany([
      {
        name: 'SkillVerse Administrator',
        username: 'admin',
        email: 'admin@skillverse.com',
        passwordHash: adminPasswordHash,
        role: 'admin',
        bio: 'Chief System Administrator for SkillVerse Global Network.',
        creditsBalance: 1000,
        country: 'Global',
        languages: ['English'],
        isVerified: true
      },
      {
        name: 'Harshita Rahangdale',
        username: 'harshita',
        email: 'harshita@skillverse.dev',
        passwordHash: adminPasswordHash,
        role: 'admin',
        bio: 'Full Stack & AI Engineer | SkillVerse Creator',
        creditsBalance: 500,
        country: 'India',
        languages: ['English', 'Hindi'],
        isVerified: true
      },
      {
        name: 'Alex Johnson',
        username: 'alex',
        email: 'alex@skillverse.dev',
        passwordHash: userPasswordHash,
        role: 'mentor',
        bio: 'Senior React & Node.js Architect with 8+ years experience',
        creditsBalance: 250,
        country: 'USA',
        languages: ['English'],
        isVerified: true
      },
      {
        name: 'Sophia Patel',
        username: 'sophia',
        email: 'sophia@skillverse.dev',
        passwordHash: userPasswordHash,
        role: 'learner',
        bio: 'UX Designer expanding knowledge into Frontend Development',
        creditsBalance: 120,
        country: 'Canada',
        languages: ['English', 'French'],
        isVerified: true
      },
    ]);
    console.log(`✅ Seeded ${createdUsers.length} Users into 'users' collection`);

    // 2. Seed Skills (Collection: skills)
    const createdSkills = await Skill.insertMany([
      {
        title: 'Full Stack Web Development (MERN)',
        category: 'Software Development',
        description: 'Master MongoDB, Express, React, and Node.js for production SaaS.',
        level: 'Intermediate',
        tags: ['MongoDB', 'Express', 'React', 'Node.js'],
        icon: 'code',
      },
      {
        title: 'UI/UX Design & Figma Systems',
        category: 'Design & Creative',
        description: 'Design beautiful, accessible web interfaces and design tokens.',
        level: 'All Levels',
        tags: ['Figma', 'UI Design', 'Design Tokens'],
        icon: 'layout',
      },
      {
        title: 'Generative AI & LLM Integration',
        category: 'Data & AI',
        description: 'Build intelligent AI subagents and prompt engineering workflows.',
        level: 'Advanced',
        tags: ['AI', 'Gemini', 'LLM', 'Python'],
        icon: 'cpu',
      },
    ]);
    console.log(`✅ Seeded ${createdSkills.length} Skills into 'skills' collection`);

    // 3. Seed Mentors (Collection: mentors)
    const mentorUser = createdUsers[1]; // Alex Johnson
    const createdMentors = await Mentor.insertMany([
      {
        user: mentorUser._id,
        expertise: [createdSkills[0]._id, createdSkills[2]._id],
        hourlyRateCredits: 60,
        rating: 4.9,
        totalSessionsCompleted: 18,
        availabilityStatus: 'Available',
        isVerified: true,
      },
    ]);
    console.log(`✅ Seeded ${createdMentors.length} Mentors into 'mentors' collection`);

    // 4. Seed Sessions (Collection: sessions)
    const learnerUser = createdUsers[2]; // Sophia Patel
    const createdSessions = await Session.insertMany([
      {
        learner: learnerUser._id,
        mentor: createdMentors[0]._id,
        skill: createdSkills[0]._id,
        scheduledAt: new Date(Date.now() + 86400000), // Tomorrow
        durationMinutes: 60,
        creditsSpent: 60,
        status: 'scheduled',
        meetingUrl: 'https://meet.jit.si/SkillVerse-MERN-Session',
        notes: 'Review MongoDB Mongoose schema design and Express REST API connection.',
      },
    ]);
    console.log(`✅ Seeded ${createdSessions.length} Sessions into 'sessions' collection`);

    // 5. Seed SkillCredits (Collection: skillCredits)
    const createdCredits = await SkillCredit.insertMany([
      {
        user: learnerUser._id,
        transactionType: 'WELCOME_SIGNUP',
        amount: 100,
        description: 'Bonus credits awarded upon joining SkillVerse platform',
      },
      {
        user: learnerUser._id,
        transactionType: 'SPENT',
        amount: 60,
        description: 'Booked 1-on-1 mentorship session for MERN stack',
        referenceSession: createdSessions[0]._id,
      },
    ]);
    console.log(`✅ Seeded ${createdCredits.length} Transactions into 'skillCredits' collection`);

    // 6. Seed Certificates (Collection: certificates)
    const createdCertificates = await Certificate.insertMany([
      {
        user: learnerUser._id,
        skill: createdSkills[1]._id,
        certificateCode: 'CERT-SKILLVERSE-2026-9901',
        title: 'Certified Figma UI/UX Designer',
        issuer: 'SkillVerse Learning Academy',
        score: 98,
        issueDate: new Date(),
      },
    ]);
    console.log(`✅ Seeded ${createdCertificates.length} Certificates into 'certificates' collection`);

    console.log('\n🎉 ALL COLLECTIONS PROCESSED SUCCESSFULLY IN MONGO DB COMPASS!');
  } catch (error) {
    console.error('❌ Error during seeding database:', error);
  } finally {
    await disconnectDB();
  }
}

seedDatabase();
