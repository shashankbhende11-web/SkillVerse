// SkillVerse Client-Side Mock Database Engine using localStorage
// Pre-populated with rich data for instant functionality

const MOCK_DB_KEY = "skillverse_db";

const DEFAULT_SEED_DATA = {
  users: [
    {
      id: "admin_user",
      name: "SkillVerse Administrator",
      username: "admin",
      email: "admin@skillverse.com",
      role: "admin",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
      bio: "Chief System Administrator for SkillVerse Global Network.",
      education: [
        { degree: "M.S. in Computer Science", school: "Stanford University", year: "2018" }
      ],
      experience: [
        { role: "System Administrator", company: "SkillVerse Core", years: "2024 - Present" }
      ],
      languages: ["English"],
      skillsTeach: ["Full Stack", "System Architecture", "Security"],
      skillsLearn: ["AI"],
      projects: [
        { title: "SkillVerse Platform", description: "Global skill exchange ecosystem.", link: "#" }
      ],
      certificates: [
        { title: "Certified Kubernetes Administrator", issuer: "CNCF", date: "2023" }
      ],
      scores: { security: 99, architecture: 98 },
      ratings: 5.0,
      reviews: [],
      badges: ["Platform Admin", "Verified Staff"],
      credits: 1000,
      xp: 5000,
      streak: 30,
      level: 25,
      isVerified: true,
      aiScore: 99,
      availability: {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        hours: ["09:00 - 18:00"]
      },
      socials: { github: "https://github.com", linkedin: "https://linkedin.com" },
      portfolioStrength: 100
    },
    {
      id: "mentor_alex",
      name: "Sanskrutii Tidke",
      email: "sanskrutii@skillverse.io",
      role: "Both",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
      bio: "Senior Full Stack Architect & Tech Speaker. Former Tech Lead at Stripe. I love breaking down complex programming concepts and building high-performance web systems.",
      education: [
        { degree: "B.S. in Computer Science", school: "Stanford University", year: "2016" }
      ],
      experience: [
        { role: "Senior Software Engineer", company: "Stripe", years: "2020 - 2024" },
        { role: "Software Engineer", company: "GitHub", years: "2016 - 2020" }
      ],
      languages: ["English", "Spanish"],
      skillsTeach: ["Web Development", "Frontend", "Backend", "Full Stack", "DevOps", "Programming"],
      skillsLearn: ["Spanish", "Music", "Photography"],
      projects: [
        { title: "SaaS Starter Kit", description: "Open source boilerplate built with vanilla JS and CSS.", link: "#" }
      ],
      certificates: [
        { title: "AWS Solutions Architect", issuer: "Amazon Web Services", date: "2023" }
      ],
      scores: { coding: 95, webdev: 98, devops: 88 },
      ratings: 4.9,
      reviews: [
        { reviewerName: "Harshita Rahangdale", rating: 5, comment: "Sanskrutii is an incredible teacher! She helped me build my first portfolio site from scratch.", date: "2026-07-10" }
      ],
      badges: ["Top Mentor", "Code Warrior", "Community Ambassador"],
      credits: 120,
      xp: 2450,
      streak: 5,
      level: 12,
      isVerified: true,
      aiScore: 94,
      availability: {
        days: ["Monday", "Wednesday", "Friday"],
        hours: ["09:00 - 12:00", "14:00 - 17:00"]
      },
      socials: { github: "https://github.com", linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
      portfolioStrength: 88
    },
    {
      id: "mentor_elena",
      name: "Harshita Rahangdale",
      email: "harshita@skillverse.io",
      role: "Both",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      coverImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600",
      bio: "Professional Concert Pianist & Traditional Fine Artist. I specialize in impressionistic painting, sketch mastery, and classical music theory.",
      education: [
        { degree: "Master of Fine Arts", school: "Royal Academy of Arts", year: "2018" }
      ],
      experience: [
        { role: "Lead Illustrator", company: "Freelance Creative", years: "2019 - Present" },
        { role: "Piano Instructor", company: "National Conservatory", years: "2018 - 2021" }
      ],
      languages: ["English", "Russian", "German"],
      skillsTeach: ["Drawing", "Painting", "Sketching", "Music"],
      skillsLearn: ["Web Development", "AI", "Graphic Design"],
      projects: [
        { title: "Symphony of Colors", description: "Art collection combining classical music themes with oil canvas.", link: "#" }
      ],
      certificates: [
        { title: "Royal Conservatory Certification", issuer: "ABRSM", date: "2017" }
      ],
      scores: { art: 98, music: 96 },
      ratings: 4.8,
      reviews: [
        { reviewerName: "Sanskrutii Tidke", rating: 5, comment: "Harshita is patient and her drawing techniques are magical. Highly recommend!", date: "2026-07-08" }
      ],
      badges: ["Creative Genius", "Top Learner"],
      credits: 75,
      xp: 1820,
      streak: 12,
      level: 8,
      isVerified: true,
      aiScore: 92,
      availability: {
        days: ["Tuesday", "Thursday"],
        hours: ["10:00 - 13:00", "15:00 - 18:00"]
      },
      socials: { behance: "https://behance.net", instagram: "https://instagram.com" },
      portfolioStrength: 90
    },
    {
      id: "mentor_marcus",
      name: "Ashita Wairagade",
      email: "ashita@skillverse.io",
      role: "Mentor",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600",
      bio: "AI Research Scientist working on Deep Learning architectures. I teach Machine Learning, Python, Neural Networks, and Data Science workflows.",
      education: [
        { degree: "Ph.D. in Computer Science (AI)", school: "MIT", year: "2021" }
      ],
      experience: [
        { role: "Senior Research Scientist", company: "OpenAI", years: "2022 - Present" },
        { role: "ML Researcher", company: "Google DeepMind", years: "2021 - 2022" }
      ],
      languages: ["English", "Mandarin"],
      skillsTeach: ["Programming", "AI", "ML", "Data Science", "Python"],
      skillsLearn: ["French", "Meditation"],
      projects: [
        { title: "NeuroTranslate", description: "Low-latency translation model powered by neural networks.", link: "#" }
      ],
      certificates: [
        { title: "Google Professional ML Engineer", issuer: "Google Cloud", date: "2022" }
      ],
      scores: { ai: 99, ml: 98, data_science: 95 },
      ratings: 5.0,
      reviews: [],
      badges: ["AI Architect", "Verification Badge"],
      credits: 250,
      xp: 3200,
      streak: 3,
      level: 15,
      isVerified: true,
      aiScore: 98,
      availability: {
        days: ["Saturday", "Sunday"],
        hours: ["10:00 - 14:00"]
      },
      socials: { github: "https://github.com", linkedin: "https://linkedin.com" },
      portfolioStrength: 95
    },
    {
      id: "mentor_sarah",
      name: "Sarah Jenkins",
      email: "sarah@skillverse.io",
      role: "Both",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      coverImage: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=600",
      bio: "Startup Advisor & Venture Creator. Formerly Y-Combinator alumni. Helping builders learn Entrepreneurship, Finance, Pitching, and Scaling.",
      education: [
        { degree: "MBA", school: "Harvard Business School", year: "2015" }
      ],
      experience: [
        { role: "Managing Director", company: "Apex Ventures", years: "2019 - Present" },
        { role: "Co-Founder", company: "GrowthScale (YC W16)", years: "2016 - 2019" }
      ],
      languages: ["English", "French"],
      skillsTeach: ["Business", "Finance", "Entrepreneurship", "Marketing", "Sales"],
      skillsLearn: ["Web Development", "Python", "UI UX"],
      projects: [
        { title: "PitchDeck Builder", description: "Interactive templates for creating winning investor decks.", link: "#" }
      ],
      certificates: [
        { title: "Certified Financial Analyst (CFA)", issuer: "CFA Institute", date: "2017" }
      ],
      scores: { business: 94, marketing: 90 },
      ratings: 4.7,
      reviews: [],
      badges: ["Startup Guru", "Knowledge Ambassador"],
      credits: 90,
      xp: 1400,
      streak: 8,
      level: 7,
      isVerified: true,
      aiScore: 89,
      availability: {
        days: ["Monday", "Tuesday"],
        hours: ["16:00 - 19:00"]
      },
      socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
      portfolioStrength: 82
    }
  ],
  sessions: [
    {
      id: "session_1",
      learnerId: "mentor_elena",
      learnerName: "Harshita Rahangdale",
      mentorId: "mentor_alex",
      mentorName: "Sanskrutii Tidke",
      skillName: "Web Development",
      date: "2026-07-18",
      time: "10:00 - 11:00",
      status: "Accepted",
      type: "One-to-One",
      roomUrl: "learning-room?sessionId=session_1",
      aiNotes: "Focus on flexbox and CSS custom properties.",
      creditCost: 0
    },
    {
      id: "session_2",
      learnerId: "mentor_alex",
      learnerName: "Sanskrutii Tidke",
      mentorId: "mentor_elena",
      mentorName: "Harshita Rahangdale",
      skillName: "Painting",
      date: "2026-07-20",
      time: "15:00 - 16:00",
      status: "Pending",
      type: "One-to-One",
      roomUrl: "learning-room?sessionId=session_2",
      aiNotes: "",
      creditCost: 0
    }
  ],
  messages: [
    { id: "msg_1", sessionId: "session_1", senderId: "mentor_elena", senderName: "Harshita Rahangdale", text: "Hi Sanskrutii! Looking forward to learning CSS tomorrow.", timestamp: "2026-07-15T14:30:00Z" },
    { id: "msg_2", sessionId: "session_1", senderId: "mentor_alex", senderName: "Sanskrutii Tidke", text: "Excited! Have your code editor ready, we will build a glassmorphism card.", timestamp: "2026-07-15T14:32:00Z" }
  ],
  notifications: [
    { id: "notif_1", userId: "mentor_alex", text: "Harshita Rahangdale requested a painting session with you.", type: "request", date: "2026-07-16T08:00:00Z", read: false },
    { id: "notif_2", userId: "mentor_elena", text: "Sanskrutii Tidke accepted your Web Development session request.", type: "alert", date: "2026-07-15T15:00:00Z", read: true }
  ],
  communityPosts: [
    {
      id: "post_1",
      authorId: "mentor_alex",
      authorName: "Sanskrutii Tidke",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      category: "Coding Rooms",
      title: "Building modern SPAs with pure CSS variables and ES6 imports",
      content: "Web frameworks like React are great, but have you tried creating a complete app with pure CSS custom properties and ES6 modules? The speed is outstanding, and it loads in milliseconds. Let me know your thoughts!",
      likes: 45,
      replies: [
        { authorName: "Harshita Rahangdale", text: "Agree! The transitions are so much smoother without the virtual DOM overhead.", date: "2026-07-15" }
      ],
      date: "2026-07-14T10:00:00Z"
    },
    {
      id: "post_2",
      authorId: "mentor_marcus",
      authorName: "Ashita Wairagade",
      authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      category: "Study Groups",
      title: "ML Study Session - Sunday Morning",
      content: "Gathering a group this Sunday to go through neural network backpropagation equations on the collaborative whiteboard. Everyone is welcome to join!",
      likes: 22,
      replies: [],
      date: "2026-07-15T16:00:00Z"
    }
  ],
  assessments: [
    {
      id: "assess_webdev",
      title: "Frontend CSS Master Assessment",
      category: "Technology",
      skill: "Web Development",
      difficulty: "Medium",
      xpReward: 300,
      questions: [
        {
          id: "q1",
          question: "Which CSS property is required to enable glassmorphic blur effect?",
          options: ["filter: blur()", "backdrop-filter: blur()", "opacity", "background-blur"],
          correct: 1
        },
        {
          id: "q2",
          question: "What is the primary difference between CSS Grid and Flexbox?",
          options: [
            "Flexbox is two-dimensional while Grid is one-dimensional",
            "Grid is two-dimensional while Flexbox is one-dimensional",
            "There is no functional difference",
            "Grid only works in dark mode"
          ],
          correct: 1
        }
      ]
    },
    {
      id: "assess_python",
      title: "Python Basic Algorithms",
      category: "Programming",
      skill: "Programming",
      difficulty: "Easy",
      xpReward: 200,
      questions: [
        {
          id: "q1",
          question: "Which of the following creates a list in Python?",
          options: ["my_list = {}", "my_list = []", "my_list = ()", "my_list = list<>"],
          correct: 1
        }
      ]
    }
  ],
  certificates: [
    { id: "cert_1", userId: "mentor_elena", userName: "Harshita Rahangdale", skill: "Web Development", issuer: "SkillVerse AI", date: "2026-07-01", score: 98, credentialId: "SV-WD-8392" }
  ],
  achievements: [
    { id: "ach_1", title: "First Exchange", desc: "Completed your first skill swap session", icon: "🤝", unlocked: true },
    { id: "ach_2", title: "Stellar Mentor", desc: "Maintained a 4.9+ rating over 10 hours", icon: "⭐", unlocked: false },
    { id: "ach_3", title: "Brainiac", desc: "Scored 95%+ on any assessment", icon: "🧠", unlocked: true },
    { id: "ach_4", title: "Streak Master", desc: "Achieved a 10-day active learning streak", icon: "🔥", unlocked: true }
  ]
};

// Database class
class MockDatabase {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem(MOCK_DB_KEY)) {
      localStorage.setItem(MOCK_DB_KEY, JSON.stringify(DEFAULT_SEED_DATA));
    } else {
      // Force migrate current structures to apply renamed profiles
      try {
        const data = JSON.parse(localStorage.getItem(MOCK_DB_KEY));
        let updated = false;
        
        // Find and update Elena Rostova to Harshita Rahangdale
        const elena = data.users.find(u => u.id === "mentor_elena");
        if (elena && elena.name !== "Harshita Rahangdale") {
          elena.name = "Harshita Rahangdale";
          elena.email = "harshita@skillverse.io";
          updated = true;
        }

        // Find and update Alex Rivera to Sanskrutii Tidke
        const alex = data.users.find(u => u.id === "mentor_alex");
        if (alex && alex.name !== "Sanskrutii Tidke") {
          alex.name = "Sanskrutii Tidke";
          alex.email = "sanskrutii@skillverse.io";
          updated = true;
        }

        // Ensure admin user exists in localStorage
        const adminFound = data.users.find(u => u.email && u.email.toLowerCase() === "admin@skillverse.com");
        if (!adminFound) {
          data.users.unshift({
            id: "admin_user",
            name: "SkillVerse Administrator",
            username: "admin",
            email: "admin@skillverse.com",
            role: "admin",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
            coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
            bio: "Chief System Administrator for SkillVerse Global Network.",
            education: [{ degree: "M.S. in Computer Science", school: "Stanford University", year: "2018" }],
            experience: [{ role: "System Administrator", company: "SkillVerse Core", years: "2024 - Present" }],
            languages: ["English"],
            skillsTeach: ["Full Stack", "System Architecture", "Security"],
            skillsLearn: ["AI"],
            projects: [{ title: "SkillVerse Platform", description: "Global skill exchange ecosystem.", link: "#" }],
            certificates: [{ title: "Certified Kubernetes Administrator", issuer: "CNCF", date: "2023" }],
            scores: { security: 99, architecture: 98 },
            ratings: 5.0,
            reviews: [],
            badges: ["Platform Admin", "Verified Staff"],
            credits: 1000,
            xp: 5000,
            streak: 30,
            level: 25,
            isVerified: true,
            aiScore: 99,
            availability: {
              days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              hours: ["09:00 - 18:00"]
            },
            socials: { github: "https://github.com", linkedin: "https://linkedin.com" },
            portfolioStrength: 100
          });
          updated = true;
        }

        // Find and update Marcus Chen to Ashita Wairagade with female avatar
        const femaleAshitaAvatar = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200";
        const marcus = data.users.find(u => u.id === "mentor_marcus");
        if (marcus) {
          if (marcus.name !== "Ashita Wairagade" || marcus.avatar !== femaleAshitaAvatar) {
            marcus.name = "Ashita Wairagade";
            marcus.email = "ashita@skillverse.io";
            marcus.avatar = femaleAshitaAvatar;
            updated = true;
          }
        }
        if (data.communityPosts) {
          data.communityPosts.forEach(p => {
            if (p.authorId === "mentor_marcus" && p.authorAvatar !== femaleAshitaAvatar) {
              p.authorAvatar = femaleAshitaAvatar;
              updated = true;
            }
          });
        }

        // Force zero cost on sessions
        if (data.sessions) {
          data.sessions.forEach(s => {
            if (s.creditCost !== 0) {
              s.creditCost = 0;
              updated = true;
            }
            if (s.learnerId === "mentor_elena" && s.learnerName !== "Harshita Rahangdale") {
              s.learnerName = "Harshita Rahangdale";
              updated = true;
            }
            if (s.mentorId === "mentor_elena" && s.mentorName !== "Harshita Rahangdale") {
              s.mentorName = "Harshita Rahangdale";
              updated = true;
            }
            if (s.learnerId === "mentor_alex" && s.learnerName !== "Sanskrutii Tidke") {
              s.learnerName = "Sanskrutii Tidke";
              updated = true;
            }
            if (s.mentorId === "mentor_alex" && s.mentorName !== "Sanskrutii Tidke") {
              s.mentorName = "Sanskrutii Tidke";
              updated = true;
            }
          });
        }

        if (updated) {
          this.saveData(data);
          // Force reset current session user cache to sync the updated names
          localStorage.removeItem("skillverse_current_user");
        }
      } catch (err) {
        console.error("Migration failed, resetting db", err);
        localStorage.setItem(MOCK_DB_KEY, JSON.stringify(DEFAULT_SEED_DATA));
        localStorage.removeItem("skillverse_current_user");
      }
    }
  }

  getData() {
    this.init();
    return JSON.parse(localStorage.getItem(MOCK_DB_KEY));
  }

  saveData(data) {
    localStorage.setItem(MOCK_DB_KEY, JSON.stringify(data));
  }

  // Get current logged in user from localStorage
  getCurrentUser() {
    const cur = localStorage.getItem("skillverse_current_user");
    if (!cur) {
      return null;
    }
    return JSON.parse(cur);
  }

  setCurrentUser(user) {
    localStorage.setItem("skillverse_current_user", JSON.stringify(user));
    // Also update in users list
    const data = this.getData();
    const targetId = user.id || user._id;
    const idx = data.users.findIndex(u => (u.id && u.id === targetId) || (u._id && u._id === targetId));
    if (idx !== -1) {
      data.users[idx] = { ...data.users[idx], ...user };
    } else {
      data.users.push(user);
    }
    this.saveData(data);
  }

  // CRUD for Users
  getUsers() {
    return this.getData().users;
  }

  getUser(id) {
    return this.getUsers().find(u => (u.id && u.id === id) || (u._id && u._id === id));
  }

  updateUser(id, updates) {
    const data = this.getData();
    const idx = data.users.findIndex(u => (u.id && u.id === id) || (u._id && u._id === id));
    if (idx !== -1) {
      data.users[idx] = { ...data.users[idx], ...updates };
      this.saveData(data);
      // Update current user if matching
      const current = this.getCurrentUser();
      const currentId = current ? (current.id || current._id) : null;
      if (currentId && currentId === id) {
        this.setCurrentUser(data.users[idx]);
      }
      return data.users[idx];
    }
    return null;
  }

  // Sessions CRUD
  getSessions() {
    return this.getData().sessions;
  }

  createSession(session) {
    const data = this.getData();
    const newSession = {
      id: "session_" + Date.now(),
      status: "Pending",
      roomUrl: `learning-room?sessionId=session_${Date.now()}`,
      aiNotes: "",
      ...session
    };
    data.sessions.push(newSession);
    
    // Add notification to mentor
    const notif = {
      id: "notif_" + Date.now(),
      userId: session.mentorId,
      text: `${session.learnerName} requested a ${session.skillName} session with you.`,
      type: "request",
      date: new Date().toISOString(),
      read: false
    };
    data.notifications.push(notif);

    this.saveData(data);
    return newSession;
  }

  updateSession(id, updates) {
    const data = this.getData();
    const idx = data.sessions.findIndex(s => s.id === id);
    if (idx !== -1) {
      data.sessions[idx] = { ...data.sessions[idx], ...updates };
      
      // If accepted/completed, trigger notifications
      if (updates.status === "Accepted") {
        const notif = {
          id: "notif_" + Date.now(),
          userId: data.sessions[idx].learnerId,
          text: `${data.sessions[idx].mentorName} accepted your session for ${data.sessions[idx].skillName}.`,
          type: "alert",
          date: new Date().toISOString(),
          read: false
        };
        data.notifications.push(notif);
      }
      
      this.saveData(data);
      return data.sessions[idx];
    }
    return null;
  }

  // Notifications
  getNotifications(userId) {
    return this.getData().notifications.filter(n => n.userId === userId);
  }

  markNotificationsRead(userId) {
    const data = this.getData();
    data.notifications.forEach(n => {
      if (n.userId === userId) n.read = true;
    });
    this.saveData(data);
  }

  // Community Posts
  getPosts() {
    return this.getData().communityPosts;
  }

  createPost(post) {
    const data = this.getData();
    const newPost = {
      id: "post_" + Date.now(),
      likes: 0,
      replies: [],
      date: new Date().toISOString(),
      ...post
    };
    data.communityPosts.unshift(newPost);
    this.saveData(data);
    return newPost;
  }

  likePost(id) {
    const data = this.getData();
    const post = data.communityPosts.find(p => p.id === id);
    if (post) {
      post.likes += 1;
      this.saveData(data);
    }
  }

  replyToPost(id, reply) {
    const data = this.getData();
    const post = data.communityPosts.find(p => p.id === id);
    if (post) {
      post.replies.push({
        authorName: reply.authorName,
        text: reply.text,
        date: new Date().toISOString().split("T")[0]
      });
      this.saveData(data);
    }
  }

  // Assessments
  getAssessments() {
    return this.getData().assessments;
  }

  // Certificates
  getCertificates(userId) {
    return this.getData().certificates.filter(c => c.userId === userId);
  }

  createCertificate(cert) {
    const data = this.getData();
    const newCert = {
      id: "cert_" + Date.now(),
      credentialId: "SV-" + Math.floor(1000 + Math.random() * 9000),
      date: new Date().toISOString().split("T")[0],
      ...cert
    };
    data.certificates.push(newCert);
    this.saveData(data);
    return newCert;
  }

  // Achievements
  getAchievements() {
    return this.getData().achievements;
  }

  // Private DM Messaging
  getConversations(userId) {
    const data = this.getData();
    const messages = data.messages || [];
    const users = data.users || [];

    const counterpartMap = new Map();
    messages.forEach(m => {
      if (m.senderId === userId || m.recipientId === userId) {
        const otherId = m.senderId === userId ? m.recipientId : m.senderId;
        const currentLast = counterpartMap.get(otherId);
        if (!currentLast || new Date(m.timestamp) > new Date(currentLast.timestamp)) {
          counterpartMap.set(otherId, m);
        }
      }
    });

    const conversations = [];
    for (const [otherId, lastMsg] of counterpartMap.entries()) {
      const otherUser = users.find(u => (u.id || u._id) === otherId);
      if (otherUser) {
        const conversationId = [userId, otherId].sort().join('_');
        const unreadCount = messages.filter(m => m.conversationId === conversationId && m.recipientId === userId && !m.read).length;
        conversations.push({
          conversationId,
          user: otherUser,
          lastMessage: lastMsg,
          unreadCount
        });
      }
    }
    return conversations;
  }

  getMessages(conversationId) {
    const data = this.getData();
    return (data.messages || []).filter(m => m.conversationId === conversationId);
  }

  createMessage(senderId, recipientId, text, roomLink = null) {
    const data = this.getData();
    if (!data.messages) data.messages = [];

    const conversationId = [senderId, recipientId].sort().join('_');
    const extractLink = roomLink || (text && text.includes('#learning-room') ? text.match(/#learning-room[^\s]*/)?.[0] : null);
    
    const newMsg = {
      id: "msg_" + Date.now() + "_" + Math.random().toString(36).substring(2, 5),
      conversationId,
      senderId,
      recipientId,
      text,
      roomLink: extractLink || null,
      timestamp: new Date().toISOString(),
      read: false
    };

    data.messages.push(newMsg);
    this.saveData(data);
    return newMsg;
  }

  readMessages(conversationId, userId) {
    const data = this.getData();
    if (!data.messages) return;
    data.messages.forEach(m => {
      if (m.conversationId === conversationId && m.recipientId === userId) {
        m.read = true;
      }
    });
    this.saveData(data);
  }

  createLearningRoom(roomData) {
    const data = this.getData();
    if (!data.learningRooms) data.learningRooms = [];
    const newRoom = {
      id: "room_" + Date.now(),
      createdAt: new Date().toISOString(),
      ...roomData
    };
    data.learningRooms.push(newRoom);
    this.saveData(data);
    return newRoom;
  }
}

export const mockDb = new MockDatabase();

