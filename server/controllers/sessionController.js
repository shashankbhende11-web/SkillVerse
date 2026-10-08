import { Session } from '../models/index.js';

export const getSessions = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
    }

    const sessions = await Session.find({
      $or: [
        { learner: userId },
        { mentor: userId }
      ]
    }).populate('learner mentor skill');

    // Format for client compatibility
    const response = sessions.map(s => ({
      id: s._id,
      learnerId: s.learner ? s.learner._id : '',
      learnerName: s.learner ? s.learner.name : 'Learner',
      mentorId: s.mentor ? s.mentor._id : '',
      mentorName: s.mentor ? s.mentor.name : 'Mentor',
      skillName: s.skill ? s.skill.title : (s.skillName || 'Skill Swap'),
      date: s.scheduledAt ? new Date(s.scheduledAt).toISOString().split('T')[0] : '',
      time: s.time || (s.durationMinutes ? `${s.durationMinutes} mins` : '10:00 - 11:00'),
      status: s.status,
      type: s.meetingUrl ? 'Online Link' : 'One-to-One Exchange',
      roomUrl: s.meetingUrl || `learning-room?sessionId=${s._id}`,
      aiNotes: s.notes || '',
      creditCost: s.creditsSpent || 0
    }));

    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createSession = async (req, res) => {
  try {
    const { learnerId, mentorId, skillName, date, time, type } = req.body;

    const newSession = new Session({
      learner: learnerId,
      mentor: mentorId,
      status: 'Pending',
      scheduledAt: new Date(date),
      time: time || '10:00 - 11:00',
      skillName: skillName || 'General Swapping',
      notes: `One-to-one collaborative learning room for ${skillName || 'skills'}.`
    });

    await newSession.save();

    const response = {
      id: newSession._id,
      learnerId,
      mentorId,
      skillName,
      date,
      time,
      status: 'Pending',
      type: type || 'One-to-One Exchange',
      roomUrl: `learning-room?sessionId=${newSession._id}`,
      creditCost: 0
    };

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateSession = async (req, res) => {
  try {
    const { status } = req.body;
    const session = await Session.findById(req.params.id);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    if (status) session.status = status;
    await session.save();

    return res.json({ success: true, session });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
