// Sidebar Component for internal dashboard views
import { authService } from '../services/authService';

export class Sidebar {
  async render() {
    const user = authService.getCurrentUser();
    if (!user) return '';

    return `
      <aside id="app-sidebar" class="glass-card no-print" style="position: fixed; top: 70px; left: 0; bottom: 0; width: 260px; border-radius: 0; border-right: 1px solid var(--glass-border); padding: 2rem 1.5rem; display: flex; flex-direction: column; justify-content: space-between; z-index: 90; background: rgba(255, 255, 255, 0.45); backdrop-filter: var(--glass-blur); transition: transform var(--transition-smooth);">
        
        <!-- Navigation Links -->
        <nav style="display: flex; flex-direction: column; gap: 0.5rem; width: 100%;">
          
          <a href="#dashboard" class="sidebar-link active">
            <span class="sidebar-icon">📊</span>
            <span>Dashboard</span>
          </a>

          <a href="#profile" class="sidebar-link">
            <span class="sidebar-icon">👤</span>
            <span>Digital Resume</span>
          </a>

          <a href="#matching" class="sidebar-link">
            <span class="sidebar-icon">🤝</span>
            <span>AI Match & Swap</span>
          </a>

          <a href="#discovery" class="sidebar-link">
            <span class="sidebar-icon">🔍</span>
            <span>Find Mentors</span>
          </a>

          <a href="#learning-room" class="sidebar-link">
            <span class="sidebar-icon">💻</span>
            <span>Learning Room</span>
          </a>

          <a href="#ai-assistant" class="sidebar-link">
            <span class="sidebar-icon">🤖</span>
            <span>AI Career Coach</span>
          </a>

          <a href="#assessments" class="sidebar-link">
            <span class="sidebar-icon">📝</span>
            <span>AI Assessments</span>
          </a>

          <a href="#community" class="sidebar-link">
            <span class="sidebar-icon">💬</span>
            <span>Community Space</span>
          </a>

          <a href="#admin" class="sidebar-link">
            <span class="sidebar-icon">🔑</span>
            <span>Admin Portal</span>
          </a>

        </nav>

        <!-- User Streak Widget -->
        <div class="glass-card" style="padding: 1rem; border-radius: var(--radius-md); display: flex; align-items: center; gap: 0.75rem; background: rgba(235, 205, 183, 0.25); border-color: rgba(235, 205, 183, 0.4);">
          <span style="font-size: 1.75rem;">🔥</span>
          <div>
            <h5 style="margin: 0; color: var(--secondary); font-size: 0.85rem; font-weight: 700;">Daily Streak</h5>
            <p style="margin: 0; color: var(--text-dark); font-size: 0.75rem; font-weight: 600;">${user.streak || 1} Days Active</p>
          </div>
        </div>

      </aside>

      <style>
        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .sidebar-link:hover {
          background: rgba(121, 163, 195, 0.1);
          color: var(--secondary);
          transform: translateX(4px);
        }

        .sidebar-link.active {
          background: var(--primary);
          color: #fff;
          box-shadow: 0 4px 12px rgba(121, 163, 195, 0.3);
        }

        .sidebar-link.active .sidebar-icon {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
        }

        .sidebar-icon {
          font-size: 1.15rem;
        }

        @media (max-width: 1024px) {
          #app-sidebar {
            width: 80px;
            padding: 2rem 0.5rem;
            align-items: center;
          }
          #app-sidebar span:not(.sidebar-icon) {
            display: none;
          }
          #app-sidebar .glass-card {
            display: none !important;
          }
          .sidebar-link {
            justify-content: center;
            padding: 0.75rem;
          }
          .sidebar-link:hover {
            transform: none;
          }
        }

        @media (max-width: 768px) {
          #app-sidebar {
            transform: translateX(-100%);
            display: none !important;
          }
        }
      </style>
    `;
  }

  async afterRender() {
    // Dynamic event handling for responsive layouts if needed
  }
}
