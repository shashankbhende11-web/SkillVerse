import { User } from '../models/index.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-passwordHash');
    const responseUsers = users.map(u => ({
      id: u._id,
      name: u.name,
      username: u.username,
      email: u.email,
      role: u.role,
      avatar: u.avatar,
      bio: u.bio,
      country: u.country,
      languages: u.languages,
      skillsTeach: u.skillsTeach,
      skillsLearn: u.skillsLearn,
      availability: u.availability,
      credits: u.creditsBalance,
      xp: u.xp,
      streak: u.streak,
      level: u.level,
      isVerified: u.isVerified,
      socials: u.socialLinks || {}
    }));
    return res.json(responseUsers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const response = {
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      bio: user.bio,
      country: user.country,
      languages: user.languages,
      skillsTeach: user.skillsTeach,
      skillsLearn: user.skillsLearn,
      availability: user.availability,
      credits: user.creditsBalance,
      xp: user.xp,
      streak: user.streak,
      level: user.level,
      isVerified: user.isVerified,
      socials: user.socialLinks || {}
    };
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { name, bio, skillsTeach, skillsLearn, languages, availability, country, avatar, socials } = req.body;

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    if (name) user.name = name;
    if (bio !== undefined) user.bio = bio;
    if (skillsTeach) user.skillsTeach = skillsTeach;
    if (skillsLearn) user.skillsLearn = skillsLearn;
    if (languages) user.languages = languages;
    if (availability) user.availability = availability;
    if (country) user.country = country;
    if (avatar !== undefined) user.avatar = avatar; // Supports base64 uploading / clearing
    if (socials) {
      user.socialLinks = {
        github: socials.github !== undefined ? socials.github : user.socialLinks.github,
        linkedin: socials.linkedin !== undefined ? socials.linkedin : user.socialLinks.linkedin,
        twitter: socials.twitter !== undefined ? socials.twitter : user.socialLinks.twitter,
      };
    }

    await user.save();

    const response = {
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      bio: user.bio,
      country: user.country,
      languages: user.languages,
      skillsTeach: user.skillsTeach,
      skillsLearn: user.skillsLearn,
      availability: user.availability,
      credits: user.creditsBalance,
      xp: user.xp,
      streak: user.streak,
      level: user.level,
      isVerified: user.isVerified,
      socials: user.socialLinks || {}
    };

    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
