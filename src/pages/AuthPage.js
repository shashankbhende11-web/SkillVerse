// Auth Page for Sign In / Sign Up
import { authService } from '../services/authService';

export class AuthPage {
  constructor() {
    this.isSignUpMode = false;
  }

  async render() {
    return `
      <div style="min-height:100vh; display:flex; align-items:center; justify-content:center; padding:4rem 2rem; width:100%; box-sizing:border-box;">
        <!-- Back to Home -->
        <a href="#landing" style="position:fixed; top:2rem; left:2rem; text-decoration:none; color:var(--text-muted); font-weight:600; display:flex; align-items:center; gap:0.5rem; font-size:0.9rem; z-index:10;" class="no-print">
          ← Back to Home
        </a>

        <!-- Auth Card Container -->
        <div class="glass-card" style="width:100%; max-width:460px; padding:2.5rem; box-shadow: 0 30px 70px rgba(0,0,0,0.08); background:rgba(255,255,255,0.7);">
          
          <div style="text-align:center; margin-bottom:1.5rem;">
            <div style="width:48px; height:48px; border-radius:var(--radius-sm); background:linear-gradient(135deg, var(--primary), var(--secondary)); display:inline-flex; align-items:center; justify-content:center; color:#fff; font-size:1.5rem; font-weight:800; margin-bottom:1rem;">S</div>
            <h2 id="auth-title" style="font-family:'Outfit',sans-serif; color:var(--secondary); font-size:1.75rem; font-weight:700; margin-bottom:0.25rem;">Welcome back</h2>
            <p id="auth-subtitle" style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.5rem;">Enter your email to sign in to your skill universe.</p>
          </div>

          <form id="auth-form" style="display:flex; flex-direction:column; gap:1.25rem;">
            
            <!-- Signup Fields Container -->
            <div id="signup-fields" style="display:none; flex-direction:column; gap:1.25rem;">
              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Full Name *</label>
                <input type="text" id="auth-name" class="glass-input" placeholder="e.g. Harshita Rahangdale" />
              </div>
              
              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Username *</label>
                <input type="text" id="auth-username" class="glass-input" placeholder="e.g. harshita123" />
              </div>

              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">I want to join as a *</label>
                <select id="auth-role" class="glass-select">
                  <option value="Learner">Learner (Looking for mentors)</option>
                  <option value="Mentor">Mentor (Offering expertise)</option>
                  <option value="Both" selected>Both (Want to exchange skills)</option>
                </select>
              </div>

              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Biography *</label>
                <textarea id="auth-bio" class="glass-textarea" placeholder="Describe your expertise and what you want to learn..." rows="2"></textarea>
              </div>

              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Country *</label>
                <input type="text" id="auth-country" class="glass-input" placeholder="e.g. India" />
              </div>

              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Skills You Can Teach * (comma-separated)</label>
                <input type="text" id="auth-skills-teach" class="glass-input" placeholder="e.g. Python, UI UX, Speaking" />
              </div>

              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Skills You Want to Learn * (comma-separated)</label>
                <input type="text" id="auth-skills-learn" class="glass-input" placeholder="e.g. Spanish, React, Dancing" />
              </div>

              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Languages Known * (comma-separated)</label>
                <input type="text" id="auth-languages" class="glass-input" value="English" placeholder="e.g. English, Spanish" />
              </div>
            </div>

            <!-- Email (Common) -->
            <div>
              <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Email Address</label>
              <input type="email" id="auth-email" class="glass-input" required placeholder="name@email.com" />
            </div>

            <!-- Password (Common) -->
            <div>
              <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Password</label>
              <input type="password" id="auth-password" class="glass-input" required placeholder="••••••••" />
            </div>

            <!-- Confirm Password (Signup only) -->
            <div id="confirm-password-field" style="display:none;">
              <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Confirm Password *</label>
              <input type="password" id="auth-confirm-password" class="glass-input" placeholder="••••••••" />
            </div>

            <button type="submit" id="auth-submit-btn" class="btn btn-primary" style="width:100%; padding:0.85rem; margin-top:0.5rem;">
              Sign In with Email
            </button>
          </form>

          <!-- Quick Fill Demo Admin -->
          <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(121, 163, 195, 0.1); border-radius: var(--radius-sm); border: 1px dashed rgba(121, 163, 195, 0.35); text-align: center;">
            <p style="margin: 0 0 0.4rem 0; font-size: 0.75rem; color: var(--text-dark); font-weight: 600;">
              🔑 Admin Demo: <code>admin@skillverse.com</code> / <code>admin123</code>
            </p>
            <button type="button" id="fill-admin-btn" style="background: var(--secondary); color: #fff; border: none; border-radius: 4px; padding: 4px 10px; font-size: 0.75rem; cursor: pointer; font-weight: 600;">
              Auto-fill Admin Credentials
            </button>
          </div>

          <!-- Mode Toggle Footer -->
          <div style="margin-top:1.25rem; text-align:center; font-size:0.85rem; color:var(--text-muted);">
            <span id="toggle-prompt">Don't have an account?</span>
            <button id="toggle-mode-btn" style="background:none; border:none; color:var(--primary); font-weight:700; cursor:pointer; padding-left:0.25rem;">
              Create one for free
            </button>
          </div>

        </div>
      </div>
    `;
  }

  async afterRender() {
    const authForm = document.getElementById('auth-form');
    const toggleModeBtn = document.getElementById('toggle-mode-btn');
    const signupFields = document.getElementById('signup-fields');
    const confirmPasswordField = document.getElementById('confirm-password-field');
    const authTitle = document.getElementById('auth-title');
    const authSubtitle = document.getElementById('auth-subtitle');
    const submitBtn = document.getElementById('auth-submit-btn');
    const togglePrompt = document.getElementById('toggle-prompt');

    // Email Mode Toggle (Sign In vs Sign Up)
    toggleModeBtn.addEventListener('click', () => {
      this.isSignUpMode = !this.isSignUpMode;
      
      if (this.isSignUpMode) {
        signupFields.style.display = 'flex';
        confirmPasswordField.style.display = 'block';
        authTitle.innerText = 'Create your account';
        authSubtitle.innerText = 'Join a global ecosystem of learners and mentors.';
        submitBtn.innerText = 'Create Account & Begin';
        togglePrompt.innerText = 'Already have an account?';
        toggleModeBtn.innerText = 'Sign in instead';
      } else {
        signupFields.style.display = 'none';
        confirmPasswordField.style.display = 'none';
        authTitle.innerText = 'Welcome back';
        authSubtitle.innerText = 'Enter your email to sign in to your skill universe.';
        submitBtn.innerText = 'Sign In with Email';
        togglePrompt.innerText = "Don't have an account?";
        toggleModeBtn.innerText = 'Create one for free';
      }
    });

    // Auto-fill admin credentials button
    const fillAdminBtn = document.getElementById('fill-admin-btn');
    if (fillAdminBtn) {
      fillAdminBtn.addEventListener('click', () => {
        if (this.isSignUpMode) {
          toggleModeBtn.click();
        }
        document.getElementById('auth-email').value = 'admin@skillverse.com';
        document.getElementById('auth-password').value = 'admin123';
        window.showToast("Admin credentials loaded! Click Sign In with Email.", "info");
      });
    }

    // Form Submission Action
    authForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = document.getElementById('auth-email').value.trim();
      const password = document.getElementById('auth-password').value.trim();
      
      try {
        let user;
        if (this.isSignUpMode) {
          const name = document.getElementById('auth-name').value.trim();
          const username = document.getElementById('auth-username').value.trim();
          const confirmPassword = document.getElementById('auth-confirm-password').value.trim();
          const role = document.getElementById('auth-role').value;
          const country = document.getElementById('auth-country').value.trim();
          const bio = document.getElementById('auth-bio').value.trim();
          const skillsTeachRaw = document.getElementById('auth-skills-teach').value.trim();
          const skillsLearnRaw = document.getElementById('auth-skills-learn').value.trim();
          const languagesRaw = document.getElementById('auth-languages').value.trim();

          if (!name || !username || !email || !password || !confirmPassword || !country || !bio || !skillsTeachRaw || !skillsLearnRaw || !languagesRaw) {
            window.showToast("All fields are mandatory. Please fill in all registration details.", "error");
            return;
          }

          if (password !== confirmPassword) {
            window.showToast("Passwords do not match. Please verify your password confirmation.", "error");
            return;
          }

          const skillsTeach = skillsTeachRaw.split(',').map(s => s.trim()).filter(s => s.length > 0);
          const skillsLearn = skillsLearnRaw.split(',').map(s => s.trim()).filter(s => s.length > 0);
          const languages = languagesRaw.split(',').map(s => s.trim()).filter(s => s.length > 0);
          const availability = { days: [], hours: [] }; // Set default empty availability object

          user = await authService.signup(email, password, name, role, bio, skillsTeach, skillsLearn, languages, country, availability, username);
          window.showToast(`Welcome to SkillVerse, ${user.name}!`, "success");
        } else {
          user = await authService.login(email, password);
          if (user) {
            authService.setCurrentUser(user);
            window.showToast(`Welcome back, ${user.name}!`, "success");
          } else {
            window.showToast("Account details not found. Please sign up to create a profile.", "error");
            return;
          }
        }
        
        window.location.hash = (user && user.role === 'admin') ? '#admin' : '#dashboard';
      } catch (error) {
        window.showToast(error.message || "Authentication failed", "error");
      }
    });
  }
}
