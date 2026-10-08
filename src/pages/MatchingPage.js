// AI Skill Match & Swap Page for SkillVerse
import { authService } from '../services/authService';
import { dbService } from '../services/dbService';

export class MatchingPage {
  async render() {
    const currentUser = authService.getCurrentUser();
    if (!currentUser) return '';

    const allUsers = await dbService.getUsers();

    // Calculate AI matches
    const matches = allUsers
      .filter(u => u.id !== currentUser.id)
      .map(user => {
        const compatibilityData = this.calculateCompatibility(currentUser, user);
        return {
          user,
          ...compatibilityData
        };
      })
      .sort((a, b) => b.score - a.score);

    return `
      <div style="width: 100%;">
        <!-- Header -->
        <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem; background: linear-gradient(135deg, rgba(235, 205, 183, 0.15) 0%, rgba(121, 163, 195, 0.1) 100%);">
          <h1 style="font-family: 'Outfit', sans-serif; font-size: 2.25rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">
            🤝 AI Skill Swapping Matcher
          </h1>
          <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 700px; line-height: 1.5;">
            SkillVerse AI scans other professionals to locate direct reciprocal learning trades. When you teach a skill they want to learn, and they teach a skill you want to learn, compatibility scales.
          </p>
        </div>

        <!-- Matching results list -->
        <div style="display:flex; flex-direction:column; gap:1.5rem;">
          ${matches.length === 0 ? `
            <div class="glass-card text-center" style="padding:4rem 0;">
              <p style="color:var(--text-muted);">Configure your skills inside your profile to trigger AI matches.</p>
            </div>
          ` : matches.map(m => `
            <div class="glass-card match-card" style="padding:1.5rem; background:rgba(255,255,255,0.5);">
              <div style="display:flex; gap:1.5rem; flex:1; align-items:center; flex-wrap:wrap;">
                
                <!-- Avatar and basic details -->
                <div style="display:flex; gap:1rem; align-items:center; min-width:220px;">
                  <img src="${m.user.avatar}" style="width:70px; height:70px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                  <div>
                    <h3 style="font-family:'Outfit'; font-size:1.2rem; font-weight:700; color:var(--secondary);">${m.user.name}</h3>
                    <div style="font-size:0.8rem; color:#d4af37;">⭐ ${m.user.ratings} | Level ${m.user.level}</div>
                    <span class="badge badge-verified" style="font-size:0.65rem; margin-top:0.25rem;">${m.user.role}</span>
                  </div>
                </div>

                <!-- Match Criteria Indicators -->
                <div style="flex:2; min-width:250px; display:flex; flex-direction:column; gap:0.5rem; font-size:0.85rem;">
                  <div style="display:flex; align-items:center; gap:0.5rem;">
                    <span style="font-size:1.1rem;">🤝</span>
                    <span><strong>Mutual Swap:</strong> You teach ${m.mutualTeach.join(', ') || 'No direct overlap'}, they teach you ${m.mutualLearn.join(', ') || 'No direct overlap'}.</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:0.5rem; color:var(--text-muted);">
                    <span style="font-size:1.1rem;">📅</span>
                    <span><strong>Overlapping Days:</strong> ${m.mutualDays.join(', ') || 'Contact to coordinate availability'}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:0.5rem; color:var(--text-muted);">
                    <span style="font-size:1.1rem;">🗣️</span>
                    <span><strong>Common Languages:</strong> ${m.mutualLangs.join(', ')}</span>
                  </div>
                </div>

              </div>

              <!-- Matching Gauge and Booking Actions -->
              <div style="display:flex; align-items:center; gap:2rem; flex-wrap:wrap; justify-content:flex-end;">
                <!-- Compatibility % badge dial -->
                <div class="match-percentage" style="border-color:${m.score >= 90 ? 'var(--primary)' : 'var(--neutral)'}; background:rgba(255,255,255,0.85);">
                  ${m.score}%
                </div>
                
                <div style="display:flex; flex-direction:column; gap:0.5rem;" class="no-print">
                  <button class="btn btn-primary swap-now-btn" data-id="${m.user.id}" data-name="${m.user.name}">Connect & Swap</button>
                  <a href="#profile?userId=${m.user.id}" class="btn btn-glass" style="padding:0.4rem 1rem; font-size:0.8rem; text-align:center;">View Resume</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Compatibility Scoring Engine
  calculateCompatibility(user1, user2) {
    let score = 50; // base score
    
    // Skills User 1 wants to learn and User 2 teaches (and vice versa)
    const mutualLearn = user1.skillsLearn.filter(s => user2.skillsTeach.includes(s));
    const mutualTeach = user1.skillsTeach.filter(s => user2.skillsLearn.includes(s));

    score += mutualLearn.length * 15;
    score += mutualTeach.length * 15;

    // Timezone overlaps
    const days1 = user1.availability?.days || [];
    const days2 = user2.availability?.days || [];
    const mutualDays = days1.filter(d => days2.includes(d));
    score += mutualDays.length * 5;

    // Language matches
    const lang1 = user1.languages || [];
    const lang2 = user2.languages || [];
    const mutualLangs = lang1.filter(l => lang2.includes(l));
    score += mutualLangs.length * 5;

    // Cap score at 99% for realism unless perfect match
    score = Math.min(score, 99);
    // If no direct skill swap overlaps, reduce base
    if (mutualLearn.length === 0 && mutualTeach.length === 0) {
      score = Math.max(30, score - 20);
    }

    return {
      score,
      mutualLearn,
      mutualTeach,
      mutualDays,
      mutualLangs
    };
  }

  async afterRender() {
    const currentUser = authService.getCurrentUser();
    
    // Connect & swap click handler
    document.querySelectorAll('.swap-now-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const name = e.target.getAttribute('data-name');
        
        // Use the same booking modal from Discovery page for consistency
        // Let's import the method dynamically or re-declare it inside router window
        // To make it easy, we redirect the user to #discovery page and trigger the booking modal
        // or trigger booking modal right here since they are structurally similar!
        // We will call the discovery modal
        import('./DiscoveryPage').then(module => {
          const discovery = new module.DiscoveryPage();
          discovery.openBookingModal(id, name, currentUser);
        });
      });
    });
  }
}
