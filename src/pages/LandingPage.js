// Landing Page for SkillVerse
import { mockDb } from '../services/mockDb';

export class LandingPage {
  constructor() {
    this.categories = [
      { name: "Technology", icon: "💻", count: 124 },
      { name: "Languages", icon: "🗣️", count: 85 },
      { name: "Creative Arts", icon: "🎨", count: 96 },
      { name: "Business", icon: "📈", count: 73 },
      { name: "Academics", icon: "🎓", count: 110 },
      { name: "Fitness", icon: "🧘", count: 48 },
      { name: "Hobbies", icon: "♟️", count: 32 }
    ];
  }

  async render() {
    const mentors = mockDb.getUsers().slice(0, 3);

    return `
      <div style="width:100%; min-height:100vh;">
        <!-- Premium Landing Nav -->
        <nav style="display:flex; justify-content:space-between; align-items:center; padding: 1.5rem 4rem; width:100%; background:rgba(255,255,255,0.25); backdrop-filter:var(--glass-blur); border-bottom:1px solid var(--glass-border); position:fixed; top:0; z-index:100;">
          <div style="display:flex; align-items:center; gap:0.75rem; font-family:'Outfit', sans-serif; font-size:1.5rem; font-weight:800; color:var(--secondary);">
            <div style="width:32px; height:32px; border-radius:var(--radius-sm); background:linear-gradient(135deg, var(--primary), var(--secondary)); display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.1rem;">S</div>
            <span>SkillVerse</span>
          </div>
          <div style="display:flex; align-items:center; gap:2rem;">
            <a href="#discovery" style="text-decoration:none; color:var(--text-dark); font-weight:600; font-size:0.95rem;">Explore Mentors</a>
            <a href="#community" style="text-decoration:none; color:var(--text-dark); font-weight:600; font-size:0.95rem;">Community</a>
            <a href="#auth" class="btn btn-glass" style="padding:0.5rem 1.25rem;">Sign In</a>
            <a href="#auth" class="btn btn-primary" style="padding:0.5rem 1.25rem;">Get Started</a>
          </div>
        </nav>

        <!-- Hero Section -->
        <section class="landing-hero">
          <div style="display:inline-block; padding: 0.35rem 1rem; border-radius:var(--radius-full); background:rgba(121, 163, 195, 0.15); border:1px solid rgba(121, 163, 195, 0.3); color:#4a7d9f; font-size:0.8rem; font-weight:700; text-transform:uppercase; margin-bottom:1.5rem; letter-spacing:0.08em;">
            ✨ Introducing AI Skill Swapping
          </div>
          <h1 class="hero-title">One Profile. Unlimited Skills.<br>Infinite Opportunities.</h1>
          <p class="hero-tagline">SkillVerse is a global platform where every user becomes both a Learner and a Mentor. Exchange knowledge directly or earn Skill Credits by teaching others.</p>
          
          <div style="display:flex; justify-content:center; gap:1.25rem; margin-bottom:4rem;">
            <a href="#auth" class="btn btn-primary" style="font-size:1.05rem; padding:0.9rem 2.25rem;">Swap Skills Now</a>
            <a href="#discovery" class="btn btn-glass" style="font-size:1.05rem; padding:0.9rem 2.25rem;">Meet Mentors</a>
          </div>

          <!-- Interactive Feature Showcase (Glass Cards) -->
          <div class="landing-stats">
            <div class="glass-card stat-card">
              <div class="stat-number">10,000+</div>
              <div class="stat-label">Active Members</div>
            </div>
            <div class="glass-card stat-card">
              <div class="stat-number">15,000+</div>
              <div class="stat-label">Swaps Completed</div>
            </div>
            <div class="glass-card stat-card">
              <div class="stat-number">98%</div>
              <div class="stat-label">AI Match Score</div>
            </div>
            <div class="glass-card stat-card">
              <div class="stat-number">0 Cost</div>
              <div class="stat-label">Direct Skill Swap</div>
            </div>
          </div>
        </section>

        <!-- Skill Categories Grid -->
        <section style="padding:5rem 4rem; max-width:1200px; margin:0 auto;">
          <h2 style="font-family:'Outfit',sans-serif; font-size:2.25rem; font-weight:700; color:var(--secondary); text-align:center; margin-bottom:3rem;">Explore Custom Categories</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:1.5rem;">
            ${this.categories.map(cat => `
              <div class="glass-card glass-card-hover" style="text-align:center; padding:2rem 1.5rem; cursor:pointer;" onclick="window.location.hash='#discovery?category=${cat.name}'">
                <div style="font-size:3rem; margin-bottom:1rem; transform:scale(1); transition:transform var(--transition-fast);" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">${cat.icon}</div>
                <h4 style="color:var(--secondary); font-weight:700; font-size:1.05rem; margin-bottom:0.25rem;">${cat.name}</h4>
                <small style="color:var(--text-muted);">${cat.count} Mentors</small>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- AI Showcase Feature Section -->
        <section style="padding:6rem 4rem; background:rgba(255,255,255,0.3); backdrop-filter:var(--glass-blur); border-top:1px solid var(--glass-border); border-bottom:1px solid var(--glass-border);">
          <div style="max-width:1100px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center;">
            <div>
              <div class="badge badge-verified" style="margin-bottom:1rem;">Main USP</div>
              <h2 style="font-family:'Outfit',sans-serif; font-size:2.5rem; color:var(--secondary); font-weight:700; line-height:1.2; margin-bottom:1.5rem;">How does AI Skill Exchange work?</h2>
              <p style="color:var(--text-muted); line-height:1.6; margin-bottom:1.5rem;">Instead of paying for expensive courses, swap your talents. User A teaches Python to User B. In exchange, User B teaches English to User A. No cash required.</p>
              
              <div style="display:flex; flex-direction:column; gap:1.25rem;">
                <div style="display:flex; gap:1rem; align-items:flex-start;">
                  <div style="background:var(--primary); color:#fff; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">1</div>
                  <div>
                    <h4 style="color:var(--secondary); font-weight:700;">Build your Skill resume</h4>
                    <p style="font-size:0.85rem; color:var(--text-muted);">List your capabilities and skills you want to learn.</p>
                  </div>
                </div>
                <div style="display:flex; gap:1rem; align-items:flex-start;">
                  <div style="background:var(--primary); color:#fff; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">2</div>
                  <div>
                    <h4 style="color:var(--secondary); font-weight:700;">AI Engine Matches Profiles</h4>
                    <p style="font-size:0.85rem; color:var(--text-muted);">Matches availability, timezone, level, rating, and language compatibility.</p>
                  </div>
                </div>
                <div style="display:flex; gap:1rem; align-items:flex-start;">
                  <div style="background:var(--primary); color:#fff; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">3</div>
                  <div>
                    <h4 style="color:var(--secondary); font-weight:700;">Schedule & Practice</h4>
                    <p style="font-size:0.85rem; color:var(--text-muted);">Meet in the collaborative video room and complete tests to update your global portfolio.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Beautiful Visual Simulation Box -->
            <div class="glass-card" style="padding:2.5rem; position:relative; min-height:350px; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 20px 50px rgba(0,0,0,0.05);">
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(0,0,0,0.05); padding-bottom:1rem; margin-bottom:1.5rem;">
                <span style="font-weight:700; color:var(--secondary);">AI Matching Simulator</span>
                <span class="badge badge-verified">94% Compatibility</span>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; gap:1.5rem;">
                <!-- User A Card -->
                <div class="glass-card" style="flex:1; padding:1rem; text-align:center; background:#fff;">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" style="width:60px; height:60px; border-radius:50%; object-fit:cover; margin-bottom:0.5rem;" />
                  <h4 style="font-size:0.9rem; color:var(--secondary); margin-bottom:0.25rem;">Alex R.</h4>
                  <div class="badge badge-credits" style="font-size:0.6rem; padding:2px 6px;">Teaches Code</div>
                </div>
                <!-- Swap Arrow -->
                <div style="font-size:2rem; color:var(--primary); animation: bounceX 2s infinite;">↔️</div>
                <!-- User B Card -->
                <div class="glass-card" style="flex:1; padding:1rem; text-align:center; background:#fff;">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" style="width:60px; height:60px; border-radius:50%; object-fit:cover; margin-bottom:0.5rem;" />
                  <h4 style="font-size:0.9rem; color:var(--secondary); margin-bottom:0.25rem;">Elena R.</h4>
                  <div class="badge badge-credits" style="font-size:0.6rem; padding:2px 6px;">Teaches Art</div>
                </div>
              </div>
              <div style="margin-top:1.5rem; text-align:center;">
                <small style="color:var(--text-muted); font-style:italic;">"Swap session booked for Saturday 10:00 AM."</small>
              </div>
            </div>
          </div>
        </section>

        <!-- Mentor Spotlights Section -->
        <section style="padding:6rem 4rem; max-width:1200px; margin:0 auto;">
          <h2 style="font-family:'Outfit',sans-serif; font-size:2.25rem; font-weight:700; color:var(--secondary); text-align:center; margin-bottom:1rem;">Top Rated Knowledge Swappers</h2>
          <p style="color:var(--text-muted); text-align:center; margin-bottom:3rem;">Meet professionals ready to teach and trade skills today.</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:2rem;">
            ${mentors.map(m => `
              <div class="glass-card glass-card-hover" style="display:flex; flex-direction:column; justify-content:space-between; padding:2rem;">
                <div>
                  <div style="display:flex; gap:1.25rem; align-items:center; margin-bottom:1.25rem;">
                    <img src="${m.avatar}" style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                    <div>
                      <h3 style="font-family:'Outfit',sans-serif; color:var(--secondary); font-size:1.2rem; font-weight:700;">${m.name}</h3>
                      <div style="color:#d4af37; font-size:0.85rem;">⭐ ${m.ratings} (${m.reviews.length} Swaps)</div>
                    </div>
                  </div>
                  <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5; margin-bottom:1.25rem; min-height:60px;">${m.bio}</p>
                  <div style="margin-bottom:1.5rem;">
                    <div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--neutral); margin-bottom:0.5rem;">Teaches:</div>
                    <div style="display:flex; flex-wrap:wrap; gap:0.25rem;">
                      ${m.skillsTeach.map(s => `<span class="badge badge-verified" style="font-size:0.65rem;">${s}</span>`).join('')}
                    </div>
                  </div>
                </div>
                <a href="#auth" class="btn btn-glass" style="width:100%; text-align:center;">Request Skill Swap</a>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- FAQ Section -->
        <section style="padding:6rem 4rem; background:rgba(255,255,255,0.15); backdrop-filter:var(--glass-blur); border-top:1px solid var(--glass-border); max-width:1200px; margin:0 auto; border-radius:var(--radius-lg);">
          <h2 style="font-family:'Outfit',sans-serif; font-size:2.25rem; font-weight:700; color:var(--secondary); text-align:center; margin-bottom:3rem;">Frequently Answered Questions</h2>
          <div style="max-width:800px; margin:0 auto; display:flex; flex-direction:column; gap:1.5rem;">
            <div class="glass-card" style="padding:1.5rem;">
              <h4 style="color:var(--secondary); font-weight:700; margin-bottom:0.5rem;">Do I have to pay to use SkillVerse?</h4>
              <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.5;">No! The core feature of SkillVerse is the direct Skill Swap. If you teach someone your skill, you receive learning hours / credits that you can spend on lessons with other mentors. Paid options are available for direct purchasing, but swap matches are completely free.</p>
            </div>
            <div class="glass-card" style="padding:1.5rem;">
              <h4 style="color:var(--secondary); font-weight:700; margin-bottom:0.5rem;">How does the AI determine compatibility?</h4>
              <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.5;">Our matching algorithm reviews the skills you teach and learn, along with timezone availability, native languages, current experience levels, and past student ratings to connect you with the most compatible swap partners.</p>
            </div>
            <div class="glass-card" style="padding:1.5rem;">
              <h4 style="color:var(--secondary); font-weight:700; margin-bottom:0.5rem;">Is the learning room video chat secure?</h4>
              <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.5;">Yes. Our online room provides simulated encrypted video routing, live code sandboxes, collaborative whiteboard sketching, and auto-generates AI study notes after each session ends.</p>
            </div>
          </div>
        </section>

        <!-- Premium Footer -->
        <footer style="background:var(--secondary); color:#fff; padding:5rem 4rem 2rem; margin-top:5rem;">
          <div style="max-width:1200px; margin:0 auto; display:grid; grid-template-columns:2fr repeat(3, 1fr); gap:4rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:4rem;">
            <div>
              <div style="display:flex; align-items:center; gap:0.75rem; font-family:'Outfit', sans-serif; font-size:1.85rem; font-weight:800; color:#fff; margin-bottom:1.5rem;">
                <div style="width:36px; height:36px; border-radius:var(--radius-sm); background:linear-gradient(135deg, var(--primary), #fff); display:flex; align-items:center; justify-content:center; color:var(--secondary); font-size:1.25rem;">S</div>
                <span>SkillVerse</span>
              </div>
              <p style="color:rgba(255,255,255,0.6); font-size:0.9rem; line-height:1.6; max-width:320px;">Swap your talents, build a verified global portfolio, and master new skills. One Profile. Unlimited Skills.</p>
            </div>
            <div>
              <h4 style="margin-bottom:1.25rem; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent);">Explore</h4>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem; font-size:0.85rem;">
                <li><a href="#discovery" style="text-decoration:none; color:rgba(255,255,255,0.65);">Mentors Directory</a></li>
                <li><a href="#community" style="text-decoration:none; color:rgba(255,255,255,0.65);">Forums & Hackathons</a></li>
                <li><a href="#assessments" style="text-decoration:none; color:rgba(255,255,255,0.65);">Skill Assessments</a></li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom:1.25rem; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent);">Legal</h4>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem; font-size:0.85rem;">
                <li><a href="#" style="text-decoration:none; color:rgba(255,255,255,0.65);">Privacy Policy</a></li>
                <li><a href="#" style="text-decoration:none; color:rgba(255,255,255,0.65);">Terms of Swapping</a></li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom:1.25rem; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent);">Platform</h4>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem; font-size:0.85rem;">
                <li><a href="#" style="text-decoration:none; color:rgba(255,255,255,0.65);">MongoDB REST Sync API</a></li>
                <li><a href="#" style="text-decoration:none; color:rgba(255,255,255,0.65);">Gemini Core AI</a></li>
              </ul>
            </div>
          </div>
          <div style="max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; padding-top:2rem; font-size:0.8rem; color:rgba(255,255,255,0.4);">
            <span>© 2026 SkillVerse. All swap contracts validated via platform AI.</span>
            <span>Made with ☕ by Antigravity</span>
          </div>
        </footer>
      </div>

      <style>
        @keyframes bounceX {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
      </style>
    `;
  }

  async afterRender() {
    // Scroll behaviors or triggers
  }
}
