// Top Header Component for internal dashboard pages
import { authService } from '../services/authService';
import { dbService } from '../services/dbService';

export class Header {
  async render() {
    const user = authService.getCurrentUser();
    if (!user) return '';

    // Fetch user notifications
    const notifications = await dbService.getNotifications(user.id);
    const unreadCount = notifications.filter(n => !n.read).length;

    const defaultAvatar = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2379a3c3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='background:%23f5ebe7;padding:4px;border-radius:50%;'><path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/></svg>`;

    return `
      <header id="app-header" class="glass-card" style="position: fixed; top: 0; left: 0; right: 0; height: 70px; border-radius: 0; border-bottom: 1px solid var(--glass-border); padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; z-index: 100; box-shadow: 0 4px 20px rgba(0,0,0,0.02); background: rgba(255, 255, 255, 0.7); backdrop-filter: var(--glass-blur);">
        <div style="display: flex; align-items: center; gap: 2rem;">
          <a href="#dashboard" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none; font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--secondary);">
            <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: linear-gradient(135deg, var(--primary), var(--secondary)); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1.1rem;">S</div>
            <span>SkillVerse</span>
          </a>
        </div>

        <div style="display: flex; align-items: center; gap: 1.5rem;">
          <!-- Credits Balance Indicator -->
          <div class="badge badge-credits" style="padding: 0.5rem 1rem; font-size: 0.85rem; display: flex; align-items: center; gap: 0.5rem; cursor: pointer; border-radius: var(--radius-md);" id="header-credits-display">
            <span>🪙</span>
            <span style="font-weight: 700;">${user.credits ?? user.creditsBalance ?? 0} Credits</span>
          </div>

          <!-- Notification Icon & Bell -->
          <div style="position: relative;">
            <button id="notif-toggle-btn" style="background: none; border: none; font-size: 1.35rem; cursor: pointer; color: var(--text-dark); position: relative; padding: 4px;">
              🔔
              ${unreadCount > 0 ? `<span style="position: absolute; top: 0; right: 0; width: 8px; height: 8px; border-radius: 50%; background: #e06c75;"></span>` : ''}
            </button>
            
            <!-- Notifications Overlay Dropdown -->
            <div id="notif-dropdown" class="glass-card" style="display: none; position: absolute; top: 45px; right: 0; width: 320px; max-height: 400px; overflow-y: auto; z-index: 1000; padding: 1rem; border-radius: var(--radius-md); box-shadow: 0 10px 40px rgba(0,0,0,0.12); background: rgba(255,255,255,0.92);">
              <h4 style="margin-bottom: 0.75rem; display:flex; justify-content:space-between; align-items:center; color: var(--secondary);">
                <span>Notifications</span>
                ${unreadCount > 0 ? `<span style="font-size:0.75rem; background:var(--primary); color:#fff; padding:2px 6px; border-radius:4px;">${unreadCount} New</span>` : ''}
              </h4>
              <div id="notif-list" style="display:flex; flex-direction:column; gap:0.5rem;">
                ${notifications.length === 0 ? `
                  <p style="font-size:0.85rem; color:var(--text-muted); text-align:center; padding:1.5rem 0;">No notifications yet.</p>
                ` : notifications.map(n => `
                  <div style="padding:0.75rem; border-radius:var(--radius-sm); border-bottom:1px solid rgba(0,0,0,0.03); background:${n.read ? 'transparent' : 'rgba(121,163,195,0.08)'}; font-size:0.8rem;">
                    <p style="margin-bottom:2px; color:var(--text-dark);">${n.text}</p>
                    <small style="color:var(--text-muted);">${new Date(n.date).toLocaleDateString()}</small>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- User Dropdown Menu -->
          <div style="position: relative;">
            <div id="user-profile-menu" style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer; padding: 4px; border-radius: var(--radius-md);">
              <img src="${user.avatar || defaultAvatar}" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary);" />
              <div style="display: flex; flex-direction: column;" class="no-print">
                <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-dark);">${user.name}</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${user.role}</span>
              </div>
            </div>
            
            <div id="profile-dropdown" class="glass-card" style="display: none; position: absolute; top: 48px; right: 0; width: 180px; z-index: 1000; padding: 0.5rem; border-radius: var(--radius-md); box-shadow: 0 10px 40px rgba(0,0,0,0.12); background: rgba(255,255,255,0.95);">
              <a href="#profile" class="dropdown-item" style="display: block; padding: 0.5rem 1rem; color: var(--text-dark); text-decoration: none; font-size: 0.85rem; font-weight: 500; border-radius: var(--radius-sm); transition: background var(--transition-fast);">👤 My Profile</a>
              <a href="#dashboard" class="dropdown-item" style="display: block; padding: 0.5rem 1rem; color: var(--text-dark); text-decoration: none; font-size: 0.85rem; font-weight: 500; border-radius: var(--radius-sm); transition: background var(--transition-fast);">📊 Dashboard</a>
              ${user.role === 'admin' ? `<a href="#admin" class="dropdown-item" style="display: block; padding: 0.5rem 1rem; color: var(--primary); text-decoration: none; font-size: 0.85rem; font-weight: 600; border-radius: var(--radius-sm); transition: background var(--transition-fast);">🔑 Admin Portal</a>` : ''}
              <button id="dropdown-settings-btn" class="dropdown-item" style="display: block; width: 100%; text-align: left; background: none; border: none; padding: 0.5rem 1rem; color: var(--text-dark); font-size: 0.85rem; font-weight: 500; cursor: pointer; border-radius: var(--radius-sm); transition: background var(--transition-fast);">⚙️ Settings</button>
              <hr style="margin: 0.25rem 0; border: none; border-top: 1px solid rgba(0,0,0,0.06);" />
              <button id="logout-btn" class="dropdown-item" style="display: flex; width: 100%; text-align: left; background: none; border: none; padding: 0.5rem 1rem; color: #e06c75; font-size: 0.85rem; font-weight: 600; cursor: pointer; border-radius: var(--radius-sm);">🚪 Logout</button>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  async afterRender() {
    const user = authService.getCurrentUser();
    if (!user) return;

    // Toggle Notifications dropdown
    const notifBtn = document.getElementById('notif-toggle-btn');
    const notifDropdown = document.getElementById('notif-dropdown');
    if (notifBtn && notifDropdown) {
      notifBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const isVisible = notifDropdown.style.display === 'block';
        notifDropdown.style.display = isVisible ? 'none' : 'block';
        
        // Mark notifications as read when opening dropdown
        if (!isVisible) {
          await dbService.markNotificationsRead(user.id);
          // Hide unread dot
          const dot = notifBtn.querySelector('span');
          if (dot) dot.remove();
        }
      });
    }

    // Toggle User Profile menu dropdown
    const userMenu = document.getElementById('user-profile-menu');
    const profileDropdown = document.getElementById('profile-dropdown');
    if (userMenu && profileDropdown) {
      userMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
      });
    }

    // Close dropdowns on outside clicks
    document.addEventListener('click', () => {
      if (notifDropdown) notifDropdown.style.display = 'none';
      if (profileDropdown) profileDropdown.style.display = 'none';
    });

    // Logout Action
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', async () => {
        await authService.logout();
        window.showToast("Logged out successfully", "info");
        window.location.hash = '#landing';
      });
    }

    // Dropdown Settings Action
    const dropdownSettingsBtn = document.getElementById('dropdown-settings-btn');
    if (dropdownSettingsBtn) {
      dropdownSettingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openAIApiKeyModal();
        if (profileDropdown) profileDropdown.style.display = 'none';
      });
    }

    // Support visual styling for hover on dropdown items
    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.background = 'rgba(121, 163, 195, 0.15)';
      });
      item.addEventListener('mouseleave', () => {
        item.style.background = 'transparent';
      });
    });

    // Click credits to open Settings Modal (to add Gemini key)
    const creditsDisplay = document.getElementById('header-credits-display');
    if (creditsDisplay) {
      creditsDisplay.addEventListener('click', () => {
        this.openAIApiKeyModal();
      });
    }
  }

  openAIApiKeyModal() {
    let backdrop = document.getElementById('settings-modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'settings-modal-backdrop';
      backdrop.className = 'modal-backdrop';
      document.body.appendChild(backdrop);
    }

    const currentKey = localStorage.getItem("skillverse_gemini_api_key") || "";

    backdrop.innerHTML = `
      <div class="modal-container glass-card" style="max-width:480px;">
        <h3 style="color:var(--secondary); margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
          ⚙️ SkillVerse AI Settings
        </h3>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1.5rem; line-height:1.5;">
          Enter your <strong>Google Gemini API Key</strong> to activate live AI evaluations, personalized roadmap generation, and mock interview coaching. If left blank, SkillVerse will operate in smart simulator mode.
        </p>
        <div style="margin-bottom:1.5rem;">
          <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.5rem;">Gemini API Key</label>
          <input type="password" id="gemini-key-input" class="glass-input" value="${currentKey}" placeholder="AIzaSy..." />
        </div>
        <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
          <button id="close-settings-modal" class="btn btn-glass">Cancel</button>
          <button id="save-settings-modal" class="btn btn-primary">Save Key</button>
        </div>
      </div>
    `;

    backdrop.classList.add('active');

    const closeBtn = document.getElementById('close-settings-modal');
    const saveBtn = document.getElementById('save-settings-modal');
    const keyInput = document.getElementById('gemini-key-input');

    const closeModal = () => {
      backdrop.classList.remove('active');
    };

    closeBtn.addEventListener('click', closeModal);
    saveBtn.addEventListener('click', () => {
      const key = keyInput.value.trim();
      if (key) {
        localStorage.setItem("skillverse_gemini_api_key", key);
        window.showToast("Gemini API key saved! Live AI activated.", "success");
      } else {
        localStorage.removeItem("skillverse_gemini_api_key");
        window.showToast("Gemini Key removed. Running in simulator mode.", "info");
      }
      closeModal();
    });
  }
}
