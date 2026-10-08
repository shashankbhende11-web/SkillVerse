// Admin Portal Dashboard Page for SkillVerse
import { authService } from '../services/authService';
import { dbService } from '../services/dbService';

export class AdminPage {
  async render() {
    const user = authService.getCurrentUser();
    if (!user) return '';

    const allUsers = await dbService.getUsers();
    const sessions = await dbService.getSessions(user.id);
    const unverifiedUsers = allUsers.filter(u => !u.isVerified);

    // Calculate platform totals
    const totalCredits = allUsers.reduce((sum, u) => sum + (u.credits || u.creditsBalance || 0), 0);
    const avgXp = allUsers.length ? Math.round(allUsers.reduce((sum, u) => sum + (u.xp || 0), 0) / allUsers.length) : 0;

    return `
      <div style="width: 100%;">
        <!-- Header -->
        <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem; background: linear-gradient(135deg, rgba(121, 163, 195, 0.12) 0%, rgba(235, 205, 183, 0.1) 100%);">
          <h1 style="font-family: 'Outfit', sans-serif; font-size: 2.25rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">
            🔑 SkillVerse Admin Portal
          </h1>
          <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 700px; line-height: 1.5;">
            Manage mentor certifications, verify credentials, track overall platform metrics, and oversee community moderation logs.
          </p>
        </div>

        <!-- Metrics widgets -->
        <div class="metrics-row" style="margin-bottom:2rem;">
          <div class="glass-card metric-card">
            <div class="metric-icon">👥</div>
            <div class="metric-details">
              <h3>Registered Users</h3>
              <div class="metric-value">${allUsers.length} Users</div>
            </div>
          </div>
          <div class="glass-card metric-card">
            <div class="metric-icon">🪙</div>
            <div class="metric-details">
              <h3>Circulating Credits</h3>
              <div class="metric-value">🪙 ${totalCredits}</div>
            </div>
          </div>
          <div class="glass-card metric-card">
            <div class="metric-icon">⚡</div>
            <div class="metric-details">
              <h3>Average User XP</h3>
              <div class="metric-value">${avgXp} XP</div>
            </div>
          </div>
        </div>

        <div class="dashboard-grid">
          
          <!-- LEFT PANEL: VERIFICATION QUEUE -->
          <div class="dashboard-widget-lg">
            <div class="glass-card" style="background:#fff;">
              <h3 style="color:var(--secondary); font-family:'Outfit'; margin-bottom:1.25rem; display:flex; justify-content:space-between; align-items:center;">
                <span>🛡️ Profile Verification Queue</span>
                <span class="badge" style="font-size:0.7rem;">${unverifiedUsers.length} Pending</span>
              </h3>

              <div style="display:flex; flex-direction:column; gap:1rem;">
                ${unverifiedUsers.length === 0 ? `
                  <p style="color:var(--text-muted); text-align:center; padding:3rem 0;">All mentors verified. Queue is empty!</p>
                ` : unverifiedUsers.map(u => `
                  <div class="glass-card" style="padding:1rem; display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.02); border-color:rgba(0,0,0,0.04);">
                    <div style="display:flex; gap:1rem; align-items:center;">
                      <img src="${u.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'}" style="width:48px; height:48px; border-radius:50%; object-fit:cover;" />
                      <div>
                        <strong style="color:var(--secondary);">${u.name}</strong>
                        <div style="font-size:0.75rem; color:var(--text-muted);">${u.email} | Target: ${Array.isArray(u.skillsTeach) ? u.skillsTeach.join(', ') : (u.skillsTeach || 'General')}</div>
                      </div>
                    </div>
                    <button class="btn btn-primary verify-user-btn" data-id="${u.id}" style="padding:0.4rem 1rem; font-size:0.8rem;">
                      Grant Verified Badge
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- RIGHT PANEL: PLATFORM CATEGORIES -->
          <div class="dashboard-widget-sm">
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; margin-bottom:1.25rem;">🔧 Platform Configuration</h3>
              <div style="display:flex; flex-direction:column; gap:1rem; font-size:0.85rem;">
                <div class="glass-card" style="padding:1rem; background:rgba(0,0,0,0.02); border:none;">
                  <span style="font-weight:600; display:block; margin-bottom:0.25rem;">Active DB Mode</span>
                  <span class="badge badge-verified">Local Fallback Activated</span>
                </div>
                
                <div class="glass-card" style="padding:1rem; background:rgba(0,0,0,0.02); border:none;">
                  <span style="font-weight:600; display:block; margin-bottom:0.25rem;">AI Evaluations Core</span>
                  <span class="badge badge-credits">Gemini Core 1.5 Flash</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  async afterRender() {
    // Approve user verification
    document.querySelectorAll('.verify-user-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.getAttribute('data-id');
        await dbService.updateUser(id, { isVerified: true });
        window.showToast("User verified and badge granted!", "success");
        // Reload layout
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = await this.render();
        await this.afterRender();
      });
    });
  }
}
