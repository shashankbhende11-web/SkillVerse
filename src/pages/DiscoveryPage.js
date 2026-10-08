// Discovery and Mentor Search Page for SkillVerse
import { authService } from '../services/authService';
import { dbService } from '../services/dbService';

export class DiscoveryPage {
  constructor(params) {
    this.params = params;
    this.searchQuery = "";
    this.selectedCategory = params?.category || "All";
    this.minRating = 0;
  }

  async render() {
    const mentors = await dbService.getUsers();
    const currentUser = authService.getCurrentUser();

    const defaultAvatar = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2379a3c3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style='background:%23f5ebe7;padding:4px;border-radius:50%;'><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

    // Filter mentors (exclude logged in user from list)
    const filteredMentors = mentors.filter(m => {
      if (currentUser && m.id === currentUser.id) return false;

      // Text Match (Name, bio, teach skills)
      const query = this.searchQuery.toLowerCase();
      const nameMatch = m.name.toLowerCase().includes(query);
      const bioMatch = m.bio.toLowerCase().includes(query);
      const teachMatch = m.skillsTeach.some(s => s.toLowerCase().includes(query));
      
      const matchesText = nameMatch || bioMatch || teachMatch;
      
      // Category Match
      let matchesCategory = true;
      if (this.selectedCategory !== "All") {
        // Map skills to categories for demo simplifications
        matchesCategory = m.skillsTeach.some(s => this.isSkillInCategory(s, this.selectedCategory));
      }

      return matchesText && matchesCategory && (m.ratings >= this.minRating);
    });

    return `
      <div style="width: 100%;">
        <!-- Search Header Filter Panel -->
        <div class="glass-card" style="padding:1.5rem; margin-bottom:2rem; display:flex; flex-direction:column; gap:1.25rem; background:rgba(255,255,255,0.5);">
          <h2 style="font-family:'Outfit',sans-serif; color:var(--secondary); font-size:1.5rem; font-weight:700;">🔍 Discover Mentors & Exchange Partners</h2>
          
          <div style="display:flex; gap:1rem; flex-wrap:wrap;">
            <!-- Text Search input -->
            <div style="flex:2; min-width:250px;">
              <input type="text" id="mentor-search-input" class="glass-input" placeholder="Search by name, bio, or skills (e.g. Python, Painting)..." value="${this.searchQuery}" />
            </div>

            <!-- Category Filter dropdown -->
            <div style="flex:1; min-width:150px;">
              <select id="mentor-category-select" class="glass-select">
                <option value="All" ${this.selectedCategory === 'All' ? 'selected' : ''}>All Categories</option>
                <option value="Technology" ${this.selectedCategory === 'Technology' ? 'selected' : ''}>💻 Technology</option>
                <option value="Languages" ${this.selectedCategory === 'Languages' ? 'selected' : ''}>🗣️ Languages</option>
                <option value="Creative Arts" ${this.selectedCategory === 'Creative Arts' ? 'selected' : ''}>🎨 Creative Arts</option>
                <option value="Business" ${this.selectedCategory === 'Business' ? 'selected' : ''}>📈 Business</option>
                <option value="Academics" ${this.selectedCategory === 'Academics' ? 'selected' : ''}>🎓 Academics</option>
              </select>
            </div>

            <!-- Rating select -->
            <div style="flex:1; min-width:120px;">
              <select id="mentor-rating-select" class="glass-select">
                <option value="0">All Ratings</option>
                <option value="4.8">⭐ 4.8+ Stars</option>
                <option value="4.9">⭐ 4.9+ Stars</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Mentors Grid Results -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:2rem;">
          ${filteredMentors.length === 0 ? `
            <div class="glass-card text-center" style="grid-column:span 3; padding:4rem 0;">
              <p style="color:var(--text-muted); font-size:1.1rem; margin-bottom:1rem;">No mentors found matching your filters.</p>
              <button id="clear-search-btn" class="btn btn-primary">Clear Search Filters</button>
            </div>
          ` : filteredMentors.map(m => `
            <div class="glass-card glass-card-hover" style="display:flex; flex-direction:column; justify-content:space-between; padding:1.75rem; background:rgba(255,255,255,0.5);">
              <div>
                <!-- Card Header -->
                <div style="display:flex; gap:1rem; align-items:center; margin-bottom:1rem;">
                  <img src="${m.avatar || defaultAvatar}" style="width:60px; height:60px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                  <div>
                    <h3 style="font-family:'Outfit'; font-size:1.15rem; font-weight:700; color:var(--secondary); display:flex; align-items:center; gap:0.4rem;">
                      <a href="#profile?userId=${m.id}" style="text-decoration:none; color:inherit;">${m.name}</a>
                      ${m.isVerified ? '🛡️' : ''}
                    </h3>
                    <div style="display:flex; align-items:center; gap:0.5rem; color:#d4af37; font-size:0.8rem;">
                      <span>⭐ ${m.ratings}</span>
                      <span style="color:var(--text-muted);">| Strength ${m.portfolioStrength}%</span>
                    </div>
                  </div>
                </div>

                <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5; margin-bottom:1.25rem; min-height:55px;">${m.bio}</p>

                <!-- Skill Tags -->
                <div style="margin-bottom:1rem;">
                  <span style="font-size:0.7rem; font-weight:700; text-transform:uppercase; color:var(--neutral); display:block; margin-bottom:0.4rem;">Can Teach:</span>
                  <div style="display:flex; flex-wrap:wrap; gap:0.25rem;">
                    ${m.skillsTeach.map(s => `<span class="badge badge-verified" style="font-size:0.65rem; text-transform:none;">${s}</span>`).join('')}
                  </div>
                </div>

                <div style="margin-bottom:1.5rem;">
                  <span style="font-size:0.7rem; font-weight:700; text-transform:uppercase; color:var(--neutral); display:block; margin-bottom:0.4rem;">Wants to Learn:</span>
                  <div style="display:flex; flex-wrap:wrap; gap:0.25rem;">
                    ${m.skillsLearn.map(s => `<span class="badge badge-credits" style="font-size:0.65rem; text-transform:none;">${s}</span>`).join('')}
                  </div>
                </div>
              </div>

              <!-- Action buttons -->
              <div style="display:flex; gap:0.4rem; margin-top:0.5rem; flex-wrap:wrap;">
                <a href="#profile?userId=${m.id}" class="btn btn-glass" style="flex:1; padding:0.45rem; font-size:0.8rem;">Profile</a>
                <button class="btn btn-glass dm-mentor-btn" data-id="${m.id}" style="flex:1; padding:0.45rem; font-size:0.8rem;">💬 DM</button>
                <button class="btn btn-primary connect-swap-btn" data-id="${m.id}" data-name="${m.name}" style="flex:1.2; padding:0.45rem; font-size:0.8rem;">Connect & Swap</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  isSkillInCategory(skillName, category) {
    const webDev = ["Web Development", "Frontend", "Backend", "Full Stack", "DevOps"];
    const tech = ["AI", "ML", "Cyber Security", "Cloud", "Blockchain", "Data Science", "Mobile Development", "Programming"];
    const langs = ["English", "Hindi", "Marathi", "French", "German", "Japanese", "Spanish"];
    const art = ["Drawing", "Painting", "Sketching", "Animation", "Graphic Design", "Photography", "UI UX", "Music", "Dance"];
    const business = ["Finance", "Entrepreneurship", "Marketing", "Sales", "Accounting"];
    const academic = ["Engineering", "Mathematics", "Science", "Commerce", "UPSC", "NEET", "JEE"];

    const s = skillName.trim();
    if (category === "Technology") return tech.includes(s) || webDev.includes(s);
    if (category === "Languages") return langs.includes(s);
    if (category === "Creative Arts") return art.includes(s);
    if (category === "Business") return business.includes(s);
    if (category === "Academics") return academic.includes(s);
    return false;
  }

  async afterRender() {
    // Input bindings for real-time search
    const searchInput = document.getElementById('mentor-search-input');
    const categorySelect = document.getElementById('mentor-category-select');
    const ratingSelect = document.getElementById('mentor-rating-select');
    const clearBtn = document.getElementById('clear-search-btn');

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        this.searchQuery = searchInput.value;
        this.reRender();
      });
    }

    if (categorySelect) {
      categorySelect.addEventListener('change', () => {
        this.selectedCategory = categorySelect.value;
        this.reRender();
      });
    }

    if (ratingSelect) {
      ratingSelect.addEventListener('change', () => {
        this.minRating = parseFloat(ratingSelect.value);
        this.reRender();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.searchQuery = "";
        this.selectedCategory = "All";
        this.minRating = 0;
        this.reRender();
      });
    }

    // Direct Message navigation
    document.querySelectorAll('.dm-mentor-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        window.location.hash = `#dashboard`;
      });
    });

    // Connect & Swap Scheduling Modal Trigger
    const currentUser = authService.getCurrentUser();
    document.querySelectorAll('.connect-swap-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const name = e.target.getAttribute('data-name');
        this.openBookingModal(id, name, currentUser);
      });
    });
  }

  async reRender() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = await this.render();
    await this.afterRender();
    if (window.lucide) window.lucide.createIcons();
  }

  async openBookingModal(mentorId, mentorName, currentUser) {
    const mentor = await dbService.getUser(mentorId);
    if (!mentor || !currentUser) return;

    let backdrop = document.getElementById('booking-modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'booking-modal-backdrop';
      backdrop.className = 'modal-backdrop';
      document.body.appendChild(backdrop);
    }

    // Determine booking modes based on skill overlaps
    const overlaps = currentUser.skillsTeach.filter(s => mentor.skillsLearn.includes(s));
    
    // Choose what user teaches them, and what mentor teaches user
    const skillsToLearn = mentor.skillsTeach;
    const skillsToGive = currentUser.skillsTeach;

    backdrop.innerHTML = `
      <div class="modal-container glass-card" style="max-width:500px;">
        <h3 style="color:var(--secondary); font-family:'Outfit'; margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
          📅 Schedule Swap with ${mentorName}
        </h3>

        <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.5rem;">
          
          <!-- Select skill you want to learn -->
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Select Skill to Learn</label>
            <select id="booking-learn-skill" class="glass-select">
              ${skillsToLearn.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
          </div>

          <!-- Select Payment / Swapping Mode -->
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Swapping Method</label>
            <select id="booking-swap-mode" class="glass-select">
              ${overlaps.length > 0 ? `<option value="swap_direct" selected>🤝 Direct Skill Swap (In exchange for ${overlaps[0]})</option>` : ''}
              ${skillsToGive.length > 0 ? `<option value="swap_custom">🤝 Custom Swap (Choose a skill you can teach them)</option>` : ''}
              <option value="credits" ${overlaps.length === 0 ? 'selected' : ''}>🪙 Pay 0 Skill Credits (Free - Mentors charge nothing)</option>
            </select>
          </div>

          <!-- Select Custom Swap Skill (Conditional display) -->
          <div id="custom-swap-skill-row" style="display:${overlaps.length > 0 ? 'none' : 'block'};">
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Skill You Will Teach</label>
            <select id="booking-teach-skill" class="glass-select">
              ${skillsToGive.map(s => `<option value="${s}">${s}</option>`).join('')}
              <option value="General Exchange">General Mentorship Swap</option>
            </select>
          </div>

          <!-- Date & Time Select -->
          <div style="display:flex; gap:1rem;">
            <div style="flex:1;">
              <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Date</label>
              <input type="date" id="booking-date" class="glass-input" required value="2026-07-20" />
            </div>
            <div style="flex:1;">
              <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Available Hours</label>
              <select id="booking-time" class="glass-select">
                ${mentor.availability ? mentor.availability.hours.map(h => `<option value="${h}">${h}</option>`).join('') : '<option value="10:00 - 11:00">10:00 - 11:00</option>'}
              </select>
            </div>
          </div>

        </div>

        <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
          <button id="close-booking-modal" class="btn btn-glass">Cancel</button>
          <button id="confirm-booking-btn" class="btn btn-primary">Send Swap Request</button>
        </div>
      </div>
    `;

    backdrop.classList.add('active');

    const closeBtn = document.getElementById('close-booking-modal');
    const confirmBtn = document.getElementById('confirm-booking-btn');
    const swapModeSelect = document.getElementById('booking-swap-mode');
    const customSwapSkillRow = document.getElementById('custom-swap-skill-row');

    // Dynamic UI Toggle
    swapModeSelect.addEventListener('change', () => {
      if (swapModeSelect.value.startsWith('swap_')) {
        customSwapSkillRow.style.display = 'block';
      } else {
        customSwapSkillRow.style.display = 'none';
      }
    });

    const closeModal = () => {
      backdrop.classList.remove('active');
    };

    closeBtn.addEventListener('click', closeModal);
    confirmBtn.addEventListener('click', async () => {
      const learnSkill = document.getElementById('booking-learn-skill').value;
      const swapMode = swapModeSelect.value;
      const date = document.getElementById('booking-date').value;
      const time = document.getElementById('booking-time').value;

      if (!date) {
        window.showToast("Please pick a valid date.", "error");
        return;
      }

      // No credit check needed as mentors charge nothing (0 credits)
      if (swapMode === 'credits') {
        // Explicitly set deduction to 0
        currentUser.credits -= 0;
        authService.setCurrentUser(currentUser);
      }

      // Create Booking Session in DB
      const session = {
        learnerId: currentUser.id,
        learnerName: currentUser.name,
        mentorId: mentorId,
        mentorName: mentorName,
        skillName: learnSkill,
        date: date,
        time: time,
        type: swapMode === 'credits' ? 'Free Mentorship Session' : 'One-to-One Exchange',
        creditCost: 0
      };

      await dbService.createSession(session);
      
      window.showToast(`Request sent to ${mentorName}!`, "success");
      closeModal();
      window.location.hash = '#dashboard';
    });
  }
}
