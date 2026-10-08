// Profile and Digital Resume Page for SkillVerse
import { authService } from '../services/authService';
import { dbService } from '../services/dbService';

export class ProfilePage {
  constructor(params) {
    this.params = params;
    this.isEditing = false;
    this.defaultAvatar = null; // set during render, reused in modal
  }

  async render() {
    const currentUser = authService.getCurrentUser();
    let user = currentUser;

    // If query contains a specific userId, show that user's profile instead
    if (this.params && this.params.userId) {
      const fetched = await dbService.getUser(this.params.userId);
      if (fetched) user = fetched;
    }

    // Normalize id: MongoDB returns _id, mockDb returns id
    if (user && !user.id && user._id) user = { ...user, id: String(user._id) };
    if (currentUser && !currentUser.id && currentUser._id) {
      currentUser.id = String(currentUser._id);
    }

    const isOwnProfile = currentUser && user.id && currentUser.id && user.id === currentUser.id;
    const certificates = await dbService.getCertificates(user.id || user._id);

    const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || 'User')}&background=6c63ff&color=fff&size=200&bold=true&rounded=true`;
    this.defaultAvatar = defaultAvatar; // store for use in modal

    return `
      <div style="width: 100%;">
        <!-- Print Button & Share Info -->
        <div style="display:flex; justify-content:space-between; margin-bottom:1.5rem;" class="no-print">
          <a href="#dashboard" style="text-decoration:none; color:var(--text-muted); font-weight:600; display:flex; align-items:center; gap:0.5rem; font-size:0.9rem;">
            ← Back to Dashboard
          </a>
          <div style="display:flex; gap:0.75rem;">
            <button id="share-portfolio-btn" class="btn btn-glass" style="padding:0.5rem 1rem; font-size:0.85rem;">
              🔗 Share Link
            </button>
            <button id="download-resume-btn" class="btn btn-primary" style="padding:0.5rem 1rem; font-size:0.85rem;">
              📄 Download Resume
            </button>
            ${isOwnProfile ? `<button id="edit-profile-btn" class="btn btn-accent" style="padding:0.5rem 1rem; font-size:0.85rem;">✏️ Edit Profile</button>` : ''}
          </div>
        </div>

        <!-- Universal Profile Header Card -->
        <div class="glass-card profile-header-card">
          <div class="profile-cover" style="background-image: url('${user.coverImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200'}');"></div>
          <div class="profile-meta">
            <div class="profile-avatar-wrapper">
              <img src="${user.avatar || defaultAvatar}" class="profile-avatar" />
            </div>
            <div class="profile-info">
              <div class="profile-name">
                <span>${user.name}</span>
                ${user.isVerified ? '<span class="badge badge-verified" style="font-size:0.6rem; padding:2px 6px;">Verified AI</span>' : ''}
              </div>
              <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 0.25rem;">
                ${(user.bio || 'New member sharing skills on SkillVerse.').substring(0, 100)}
              </p>
              <div style="display:flex; gap:1rem; align-items:center; margin-top:0.75rem; flex-wrap:wrap;">
                <span style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">⭐ ${user.ratings || '5.0'} Rating</span>
                <span class="badge badge-credits">🪙 ${user.credits ?? 50} Credits</span>
                <span class="badge" style="background:rgba(121,163,195,0.15); color:var(--primary);">AI Score: ${user.aiScore || 60}%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Detail Columns -->
        <div class="profile-body-grid">
          
          <!-- LEFT SIDEBAR -->
          <div class="profile-sidebar">
            
            <!-- Quick About Details -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.15rem; margin-bottom:1rem; border-bottom:1px solid rgba(0,0,0,0.05); padding-bottom:0.5rem;">Credentials</h3>
              <div style="display:flex; flex-direction:column; gap:0.75rem; font-size:0.85rem; color:var(--text-dark);">
                <div><strong>Languages:</strong> ${(Array.isArray(user.languages) ? user.languages : ['English']).join(', ') || 'English'}</div>
                <div><strong>Role:</strong> ${user.role || 'Both'}</div>
                <div><strong>Portfolio Strength:</strong> ${user.portfolioStrength || '15'}%</div>
                
                <!-- Social Connections -->
                <div style="margin-top:0.5rem; display:flex; gap:0.75rem;" class="no-print">
                  ${user.socials?.github ? `<a href="${user.socials.github}" target="_blank" style="text-decoration:none; font-size:1.25rem;">🐙</a>` : ''}
                  ${user.socials?.linkedin ? `<a href="${user.socials.linkedin}" target="_blank" style="text-decoration:none; font-size:1.25rem;">💼</a>` : ''}
                  ${user.socials?.twitter ? `<a href="${user.socials.twitter}" target="_blank" style="text-decoration:none; font-size:1.25rem;">🐦</a>` : ''}
                </div>
              </div>
            </div>

            <!-- Skills Swapping Profile -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.15rem; margin-bottom:1rem; border-bottom:1px solid rgba(0,0,0,0.05); padding-bottom:0.5rem;">Skills I Can Teach</h3>
              <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.5rem;">
                ${!Array.isArray(user.skillsTeach) || user.skillsTeach.length === 0 ? '<span style="font-size:0.8rem; color:var(--text-muted);">None listed yet.</span>' : user.skillsTeach.map(s => `<span class="badge badge-verified" style="font-size:0.75rem;">${s}</span>`).join('')}
              </div>

              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.15rem; margin-bottom:1rem; border-bottom:1px solid rgba(0,0,0,0.05); padding-bottom:0.5rem;">Skills I Want to Learn</h3>
              <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
                ${!Array.isArray(user.skillsLearn) || user.skillsLearn.length === 0 ? '<span style="font-size:0.8rem; color:var(--text-muted);">None listed yet.</span>' : user.skillsLearn.map(s => `<span class="badge badge-credits" style="font-size:0.75rem;">${s}</span>`).join('')}
              </div>
            </div>

            <!-- Availability Schedule -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.15rem; margin-bottom:1rem; border-bottom:1px solid rgba(0,0,0,0.05); padding-bottom:0.5rem;">Weekly Availability</h3>
              <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:0.5rem; color:var(--text-muted);">
                ${user.availability && Array.isArray(user.availability.days) && Array.isArray(user.availability.hours) ? `
                  <div><strong>Days:</strong> ${user.availability.days.join(', ')}</div>
                  <div><strong>Hours:</strong> ${user.availability.hours.join(', ')}</div>
                ` : '<div>Not set yet.</div>'}
              </div>
            </div>

          </div>

          <!-- RIGHT MAIN PANELS -->
          <div class="profile-content">
            
            <!-- Professional Biography -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.25rem; margin-bottom:1rem;">Bio / About Me</h3>
              <p style="font-size:0.95rem; color:var(--text-dark); line-height:1.6;">
                ${user.bio || 'Write a brief description about your expertise and swap preferences.'}
                          <!-- Professional Experience Timeline -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.25rem; margin-bottom:1.5rem;">Professional Experience</h3>
              <div>
                ${!Array.isArray(user.experience) || user.experience.length === 0 ? '<p style="font-size:0.9rem; color:var(--text-muted);">No experiences listed.</p>' : user.experience.map(exp => `
                  <div class="timeline-item">
                    <h4 style="font-weight:700; color:var(--text-dark); font-size:1rem;">${exp.role}</h4>
                    <span style="font-size:0.8rem; color:var(--primary); font-weight:600;">${exp.company}</span>
                    <span style="font-size:0.75rem; color:var(--text-muted); padding-left:0.75rem;">| ${exp.years}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Education Timeline -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.25rem; margin-bottom:1.5rem;">Education & Credentials</h3>
              <div>
                ${!Array.isArray(user.education) || user.education.length === 0 ? '<p style="font-size:0.9rem; color:var(--text-muted);">No qualifications listed.</p>' : user.education.map(edu => `
                  <div class="timeline-item">
                    <h4 style="font-weight:700; color:var(--text-dark); font-size:1rem;">${edu.degree}</h4>
                    <span style="font-size:0.8rem; color:var(--primary); font-weight:600;">${edu.school}</span>
                    <span style="font-size:0.75rem; color:var(--text-muted); padding-left:0.75rem;">| Graduated ${edu.year}</span>
                  </div>
                `).join('')}
              </div>
            </div> </div>
            </div>

            <!-- Verification & Certificates -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.25rem; margin-bottom:1.25rem;">SkillVerse Certificates</h3>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem;">
                ${certificates.length === 0 ? '<p style="font-size:0.9rem; color:var(--text-muted); grid-column:span 2;">No assessment certificates earned yet.</p>' : certificates.map(cert => `
                  <div class="glass-card" style="padding:1rem; border-color:rgba(121,163,195,0.2); background:linear-gradient(135deg, rgba(121, 163, 195, 0.05) 0%, rgba(235, 205, 183, 0.05) 100%);">
                    <h4 style="font-weight:700; color:var(--secondary); font-size:0.95rem;">${cert.skill} Expert</h4>
                    <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.25rem;">
                      Score: <strong style="color:var(--primary);">${cert.score}%</strong> | Credential ID: ${cert.credentialId}
                    </div>
                    <div style="font-size:0.7rem; color:var(--neutral); margin-top:0.25rem;">Issued by SkillVerse AI</div>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>

        </div>
      </div>
    `;
  }

  async afterRender() {
    const currentUser = authService.getCurrentUser();
    let user = currentUser;

    if (this.params && this.params.userId) {
      const fetched = await dbService.getUser(this.params.userId);
      if (fetched) user = fetched;
    }

    const isOwnProfile = currentUser && user.id === currentUser.id;

    // Share Button Event
    const shareBtn = document.getElementById('share-portfolio-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        const shareUrl = `${window.location.origin}${window.location.pathname}#profile?userId=${user.id}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
          window.showToast("Portfolio Link copied to clipboard!", "success");
        }).catch(err => {
          window.showToast("Failed to copy link.", "error");
        });
      });
    }

    // Download / Print Resume Button Event
    const printBtn = document.getElementById('download-resume-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Edit Profile Modal Event
    if (isOwnProfile) {
      const editBtn = document.getElementById('edit-profile-btn');
      if (editBtn) {
        editBtn.addEventListener('click', () => {
          // Normalize id before passing to modal
          const modalUser = (user.id || user._id) ? { ...user, id: user.id || String(user._id) } : user;
          this.openEditProfileModal(modalUser);
        });
      }
    }
  }

  openEditProfileModal(user) {
    let backdrop = document.getElementById('edit-profile-modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'edit-profile-modal-backdrop';
      backdrop.className = 'modal-backdrop';
      document.body.appendChild(backdrop);
    }

    backdrop.innerHTML = `
      <div class="modal-container glass-card" style="max-width:540px; max-height:80vh; overflow-y:auto;">
        <h3 style="color:var(--secondary); margin-bottom:1.25rem;">✏️ Edit Skill Resume</h3>
        
        <div style="display:flex; flex-direction:column; gap:1.25rem; margin-bottom:1.5rem;">
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Full Name</label>
            <input type="text" id="edit-profile-name" class="glass-input" value="${user.name}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Profile Picture</label>
            <div style="display:flex; gap:1rem; align-items:center; margin-bottom:0.5rem;">
              <img id="edit-profile-avatar-preview" src="${user.avatar || this.defaultAvatar}" style="width:50px; height:50px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
              <button id="remove-profile-pic-btn" class="btn btn-glass" style="padding:0.4rem 0.8rem; font-size:0.8rem; color:#e06c75;">Remove Photo</button>
            </div>
            <input type="file" id="edit-profile-avatar-file" class="glass-input" accept="image/*" style="font-size:0.8rem;" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Country</label>
            <input type="text" id="edit-profile-country" class="glass-input" value="${user.country || ''}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Biography</label>
            <textarea id="edit-profile-bio" class="glass-textarea" rows="3">${user.bio || ''}</textarea>
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Skills You Can Teach (comma-separated)</label>
            <input type="text" id="edit-profile-skills-teach" class="glass-input" value="${(user.skillsTeach || []).join(', ')}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Skills You Want to Learn (comma-separated)</label>
            <input type="text" id="edit-profile-skills-learn" class="glass-input" value="${(user.skillsLearn || []).join(', ')}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Languages Known (comma-separated)</label>
            <input type="text" id="edit-profile-languages" class="glass-input" value="${(user.languages || []).join(', ')}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Availability Days (comma-separated)</label>
            <input type="text" id="edit-profile-availability-days" class="glass-input" value="${(user.availability?.days || []).join(', ')}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Availability Hours (comma-separated)</label>
            <input type="text" id="edit-profile-availability-hours" class="glass-input" value="${(user.availability?.hours || []).join(', ')}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">GitHub Link</label>
            <input type="text" id="edit-profile-github" class="glass-input" value="${user.socials?.github || ''}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">LinkedIn Link</label>
            <input type="text" id="edit-profile-linkedin" class="glass-input" value="${user.socials?.linkedin || ''}" />
          </div>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
          <button id="close-edit-modal" class="btn btn-glass">Cancel</button>
          <button id="save-edit-modal" class="btn btn-primary">Save Profile</button>
        </div>
      </div>
    `;

    backdrop.classList.add('active');

    const closeBtn = document.getElementById('close-edit-modal');
    const saveBtn = document.getElementById('save-edit-modal');
    const fileInput = document.getElementById('edit-profile-avatar-file');
    const removePicBtn = document.getElementById('remove-profile-pic-btn');
    const previewImg = document.getElementById('edit-profile-avatar-preview');

    let selectedAvatarBase64 = user.avatar || "";

    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            selectedAvatarBase64 = event.target.result;
            if (previewImg) {
              previewImg.src = selectedAvatarBase64;
            }
            window.showToast("Local photo loaded. Click Save Profile to apply.", "success");
          };
          reader.readAsDataURL(file);
        }
      });
    }

    if (removePicBtn) {
      removePicBtn.addEventListener('click', () => {
        selectedAvatarBase64 = "";
        if (previewImg) {
          previewImg.src = this.defaultAvatar;
        }
        window.showToast("Photo cleared. Click Save Profile to apply.", "info");
      });
    }

    const closeModal = () => {
      backdrop.classList.remove('active');
    };

    closeBtn.addEventListener('click', closeModal);
    saveBtn.addEventListener('click', async () => {
      const name = document.getElementById('edit-profile-name').value.trim();
      const bio = document.getElementById('edit-profile-bio').value.trim();
      const country = document.getElementById('edit-profile-country').value.trim();
      const github = document.getElementById('edit-profile-github').value.trim();
      const linkedin = document.getElementById('edit-profile-linkedin').value.trim();
      
      const skillsTeach = document.getElementById('edit-profile-skills-teach').value
        .split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0);
        
      const skillsLearn = document.getElementById('edit-profile-skills-learn').value
        .split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0);

      const languages = document.getElementById('edit-profile-languages').value
        .split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0);

      const availabilityDays = document.getElementById('edit-profile-availability-days').value
        .split(',')
        .map(d => d.trim())
        .filter(d => d.length > 0);

      const availabilityHours = document.getElementById('edit-profile-availability-hours').value
        .split(',')
        .map(h => h.trim())
        .filter(h => h.length > 0);

      if (!name) {
        window.showToast("Name is required.", "error");
        return;
      }

      const userId = user.id || (user._id ? String(user._id) : null);
      if (!userId) {
        window.showToast("Cannot update profile: user ID missing.", "error");
        return;
      }
      const updated = await dbService.updateUser(userId, {
        name,
        avatar: selectedAvatarBase64,
        bio,
        skillsTeach,
        skillsLearn,
        languages,
        country,
        availability: {
          days: availabilityDays,
          hours: availabilityHours
        },
        socials: {
          github,
          linkedin
        }
      });

      window.showToast("Skill Resume updated! AI Score re-evaluating...", "success");
      
      closeModal();
      window.location.reload();
    });
  }
}
