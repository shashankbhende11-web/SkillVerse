import { mockDb } from './mockDb';

class AuthService {
  constructor() {
    this.authListeners = new Set();
    this.currentUser = null;

    // Load initial user session from localStorage
    const userStr = localStorage.getItem("skillverse_current_user");
    if (userStr) {
      try {
        this.currentUser = JSON.parse(userStr);
      } catch (e) {
        this.currentUser = null;
      }
    }

    // Verify token on startup
    this.checkSession();
  }

  async checkSession() {
    const token = localStorage.getItem('skillverse_jwt_token');
    if (!token) {
      this.notifyListeners(null);
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.user) {
          this.setCurrentUser(data.user);
          return;
        }
      }
    } catch (error) {
      console.warn("Failed to verify backend session, relying on local storage", error);
    }
    this.notifyListeners(this.currentUser);
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("skillverse_current_user");
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  setCurrentUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem("skillverse_current_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("skillverse_current_user");
    }
    this.notifyListeners(user);
  }

  onAuthChanged(callback) {
    this.authListeners.add(callback);
    callback(this.currentUser);
    return () => this.authListeners.delete(callback);
  }

  notifyListeners(user) {
    this.currentUser = user;
    for (const listener of this.authListeners) {
      listener(user);
    }
  }

  async login(email, password) {
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Login failed.');
      }
      localStorage.setItem('skillverse_jwt_token', data.token);
      localStorage.setItem('skillverse_current_user', JSON.stringify(data.user));
      this.notifyListeners(data.user);
      return data.user;
    } catch (error) {
      // If network failure / connection refused, attempt fallback with mockDb
      const isNetworkError = error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError') || error.message?.includes('Load failed');
      if (isNetworkError) {
        console.warn("Backend unreachable on port 5000. Checking local mock database fallback...");
        const users = mockDb.getUsers();
        const matched = users.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (matched) {
          const mockToken = "mock_jwt_token_" + Date.now();
          localStorage.setItem('skillverse_jwt_token', mockToken);
          mockDb.setCurrentUser(matched);
          this.notifyListeners(matched);
          return matched;
        }
        throw new Error("Cannot connect to backend on port 5000 and user not found locally. Please ensure the backend server is running.");
      }
      throw error;
    }
  }

  async loginWithGoogle() {
    // Mock Google Login - prompt for simulated account
    const email = prompt("Enter your Google Account email to simulate sign in:", "sanskrutii@skillverse.io");
    if (!email) throw new Error("Google login cancelled");

    // Simulate finding or creating a Google user via mockDb/local storage
    const users = mockDb.getUsers();
    const matched = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (matched) {
      mockDb.setCurrentUser(matched);
      this.notifyListeners(matched);
      return matched;
    }

    const name = email.split("@")[0];
    const googleUser = {
      id: "google_" + Date.now(),
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email: email,
      role: "Both",
      avatar: "",
      coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
      bio: "Logged in via Google Identity Connect.",
      education: [],
      experience: [],
      languages: ["English"],
      skillsTeach: [],
      skillsLearn: [],
      projects: [],
      certificates: [],
      scores: {},
      ratings: 5.0,
      reviews: [],
      badges: ["Google User"],
      credits: 50,
      xp: 100,
      streak: 1,
      level: 1,
      isVerified: true,
      aiScore: 75,
      socials: {},
      portfolioStrength: 30
    };
    mockDb.setCurrentUser(googleUser);
    this.notifyListeners(googleUser);
    return googleUser;
  }

  async signup(email, password, name, role, bio, skillsTeach = [], skillsLearn = [], languages = ["English"], country = "", availability = { days: [], hours: [] }, username = "") {
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, role, bio, skillsTeach, skillsLearn, languages, country, availability, username })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Signup failed.');
      }
      localStorage.setItem('skillverse_jwt_token', data.token);
      localStorage.setItem('skillverse_current_user', JSON.stringify(data.user));
      this.notifyListeners(data.user);
      return data.user;
    } catch (error) {
      const isNetworkError = error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError');
      if (isNetworkError) {
        console.warn("Backend unreachable on port 5000 during signup. Creating local profile in mockDb...");
        const newProfile = {
          id: "user_" + Date.now(),
          name,
          username: username || email.split('@')[0],
          email,
          role,
          bio: bio || "SkillVerse member",
          country,
          languages,
          skillsTeach,
          skillsLearn,
          availability,
          avatar: "",
          coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
          education: [],
          experience: [],
          projects: [],
          certificates: [],
          scores: {},
          ratings: 5.0,
          reviews: [],
          badges: ["Early Adopter"],
          credits: 50,
          xp: 100,
          streak: 1,
          level: 1,
          isVerified: role === 'admin',
          aiScore: 75,
          socials: {},
          portfolioStrength: 25
        };
        const users = mockDb.getUsers();
        users.push(newProfile);
        const dbData = mockDb.getData();
        dbData.users = users;
        mockDb.saveData(dbData);
        mockDb.setCurrentUser(newProfile);
        localStorage.setItem('skillverse_jwt_token', 'mock_jwt_token_' + Date.now());
        this.notifyListeners(newProfile);
        return newProfile;
      }
      throw error;
    }
  }

  async sendSMSCode(phoneNumber, recaptchaContainer) {
    console.log("Mock SMS OTP sent to: " + phoneNumber);
    return {
      confirm: async (code) => {
        if (code === "123456") {
          const mockUid = "phone_" + Date.now();
          const matched = mockDb.getUsers().find(u => u.phone === phoneNumber);
          if (matched) {
            mockDb.setCurrentUser(matched);
            this.notifyListeners(matched);
            return { user: matched };
          }

          const newProfile = {
            id: mockUid,
            name: "Phone User " + phoneNumber.slice(-4),
            email: `phone_${Date.now()}@skillverse.io`,
            phone: phoneNumber,
            role: "Both",
            avatar: "",
            coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
            bio: "I joined SkillVerse to share my knowledge.",
            education: [],
            experience: [],
            languages: ["English"],
            skillsTeach: [],
            skillsLearn: [],
            projects: [],
            certificates: [],
            scores: {},
            ratings: 5.0,
            reviews: [],
            badges: ["Phone Verified"],
            credits: 50,
            xp: 100,
            streak: 1,
            level: 1,
            isVerified: true,
            aiScore: 70,
            socials: {},
            portfolioStrength: 20
          };
          mockDb.setCurrentUser(newProfile);
          this.notifyListeners(newProfile);
          return { user: newProfile };
        } else {
          throw new Error("Invalid verification code");
        }
      }
    };
  }

  async logout() {
    const token = localStorage.getItem('skillverse_jwt_token');
    if (token) {
      try {
        await fetch('http://localhost:5000/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      } catch (error) {
        console.warn("Backend logout request failed", error);
      }
    }
    localStorage.removeItem("skillverse_jwt_token");
    localStorage.removeItem("skillverse_current_user");
    this.notifyListeners(null);
  }
}

export const authService = new AuthService();
