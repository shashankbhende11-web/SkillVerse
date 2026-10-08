import { mockDb } from './mockDb';

const API_URL = 'http://localhost:5000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('skillverse_jwt_token');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
};

class DbService {
  // Users
  async getUsers() {
    try {
      const res = await fetch(`${API_URL}/users`, {
        headers: getAuthHeaders()
      });
      if (res.ok) return await res.json();
    } catch (error) {
      console.error('Fetch users error:', error.message);
    }
    return mockDb.getUsers();
  }

  async getUser(id) {
    try {
      const res = await fetch(`${API_URL}/users/${id}`, {
        headers: getAuthHeaders()
      });
      if (res.ok) return await res.json();
    } catch (error) {
      console.error('Fetch user profile error:', error.message);
    }
    return mockDb.getUser(id);
  }

  async setUser(id, data) {
    try {
      const res = await fetch(`${API_URL}/users/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(data)
      });
      if (res.ok) {
        const updatedUser = await res.json();
        localStorage.setItem('skillverse_current_user', JSON.stringify(updatedUser));
        return updatedUser;
      }
    } catch (error) {
      console.error('Set user profile error:', error.message);
    }
    return mockDb.updateUser(id, data);
  }

  async updateUser(id, updates) {
    try {
      const res = await fetch(`${API_URL}/users/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(updates)
      });
      if (res.ok) {
        const updatedUser = await res.json();
        localStorage.setItem('skillverse_current_user', JSON.stringify(updatedUser));
        return updatedUser;
      }
    } catch (error) {
      console.error('Update user profile error:', error.message);
    }
    return mockDb.updateUser(id, updates);
  }

  // Sessions
  async getSessions(userId) {
    try {
      const res = await fetch(`${API_URL}/sessions?userId=${userId}`, {
        headers: getAuthHeaders()
      });
      if (res.ok) return await res.json();
    } catch (error) {
      console.error('Get sessions error:', error.message);
    }
    return mockDb.getSessions().filter(s => s.learnerId === userId || s.mentorId === userId);
  }

  async createSession(session) {
    try {
      const res = await fetch(`${API_URL}/sessions`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(session)
      });
      if (res.ok) return await res.json();
    } catch (error) {
      console.error('Create session error:', error.message);
    }
    return mockDb.createSession(session);
  }

  async updateSession(id, updates) {
    try {
      const res = await fetch(`${API_URL}/sessions/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(updates)
      });
      if (res.ok) return await res.json();
    } catch (error) {
      console.error('Update session error:', error.message);
    }
    return mockDb.updateSession(id, updates);
  }

  // Notifications
  async getNotifications(userId) {
    return mockDb.getNotifications(userId);
  }

  async markNotificationsRead(userId) {
    mockDb.markNotificationsRead(userId);
  }

  // Community Posts
  async getPosts() {
    try {
      const res = await fetch(`${API_URL}/posts`, {
        headers: getAuthHeaders()
      });
      if (res.ok) return await res.json();
    } catch (error) {
      console.error('Get community posts error:', error.message);
    }
    return mockDb.getPosts();
  }

  async createPost(post) {
    try {
      const res = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(post)
      });
      if (res.ok) return await res.json();
    } catch (error) {
      console.error('Create community post error:', error.message);
    }
    return mockDb.createPost(post);
  }

  async likePost(id) {
    try {
      await fetch(`${API_URL}/posts/${id}/like`, {
        method: 'PUT',
        headers: getAuthHeaders()
      });
    } catch (error) {
      console.error('Like community post error:', error.message);
    }
    mockDb.likePost(id);
  }

  async replyToPost(id, reply) {
    try {
      await fetch(`${API_URL}/posts/${id}/reply`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(reply)
      });
    } catch (error) {
      console.error('Reply community post error:', error.message);
    }
    mockDb.replyToPost(id, reply);
  }

  // Assessments
  async getAssessments() {
    return mockDb.getAssessments();
  }

  // Certificates
  async getCertificates(userId) {
    return mockDb.getCertificates(userId);
  }

  async createCertificate(cert) {
    return mockDb.createCertificate(cert);
  }

  // Achievements
  async getAchievements() {
    return mockDb.getAchievements();
  }

  // ── Private DM Messaging ────────────────────────────────────────────────────
  async getConversations() {
    try {
      const res = await fetch(`${API_URL}/messages/conversations`, { headers: getAuthHeaders() });
      if (res.ok) return await res.json();
    } catch (e) { /* fall through to mockDb */ }
    const user = JSON.parse(localStorage.getItem('skillverse_current_user') || '{}');
    const id = user.id || user._id;
    return id ? mockDb.getConversations(id) : [];
  }

  async getMessages(conversationId) {
    try {
      const res = await fetch(`${API_URL}/messages/${conversationId}`, { headers: getAuthHeaders() });
      if (res.ok) return await res.json();
    } catch (e) { /* fall through */ }
    return mockDb.getMessages(conversationId);
  }

  async sendMessage(recipientId, text) {
    try {
      const res = await fetch(`${API_URL}/messages/send`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ recipientId, text })
      });
      if (res.ok) return await res.json();
    } catch (e) { /* fall through */ }
    const user = JSON.parse(localStorage.getItem('skillverse_current_user') || '{}');
    const id = user.id || user._id;
    return mockDb.createMessage(id, recipientId, text);
  }

  async readMessages(conversationId) {
    try {
      const res = await fetch(`${API_URL}/messages/read`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ conversationId })
      });
      if (res.ok) return;
    } catch (e) { /* fall through */ }
    const user = JSON.parse(localStorage.getItem('skillverse_current_user') || '{}');
    const id = user.id || user._id;
    mockDb.readMessages(conversationId, id);
  }

  // ── Learning Room management ────────────────────────────────────────────────
  async createLearningRoom(data) {
    try {
      const res = await fetch(`${API_URL}/learning-rooms/create`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data)
      });
      if (res.ok) return await res.json();
    } catch (e) { /* fall through */ }
    const user = JSON.parse(localStorage.getItem('skillverse_current_user') || '{}');
    return mockDb.createLearningRoom({ ...data, mentorId: user.id || user._id });
  }
}

export const dbService = new DbService();
