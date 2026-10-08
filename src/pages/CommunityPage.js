// Community Space and Forums Page for SkillVerse
import { authService } from '../services/authService';
import { dbService } from '../services/dbService';

export class CommunityPage {
  constructor() {
    this.selectedFilter = "All"; // "All" or "Study Groups" or "Coding Rooms" etc
    this.replyToId = null;       // ID of post currently replying to
  }

  async render() {
    const user = authService.getCurrentUser();
    if (!user) return '';

    const defaultAvatar = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2379a3c3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='background:%23f5ebe7;padding:4px;border-radius:50%;'><path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/></svg>`;

    const posts = await dbService.getPosts();
    const filteredPosts = this.selectedFilter === "All" 
      ? posts 
      : posts.filter(p => p.category === this.selectedFilter);

    return `
      <div style="width: 100%;">
        <!-- Header -->
        <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem; background: linear-gradient(135deg, rgba(121, 163, 195, 0.12) 0%, rgba(235, 205, 183, 0.1) 100%);">
          <h1 style="font-family: 'Outfit', sans-serif; font-size: 2.25rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">
            💬 Community Space & Study Hub
          </h1>
          <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 700px; line-height: 1.5;">
            Join coding rooms, organize study slots, sign up for hackathons, and exchange knowledge logs with other members.
          </p>
        </div>

        <!-- Create Post & Forums Split -->
        <div class="dashboard-grid">
          
          <!-- LEFT FEED PANEL -->
          <div class="dashboard-widget-lg" style="display:flex; flex-direction:column; gap:1.5rem;">
            
            <!-- Filters bar -->
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap;" class="no-print">
              ${["All", "Study Groups", "Coding Rooms", "Creative Clubs", "Hackathons"].map(cat => `
                <button class="filter-tab btn ${this.selectedFilter === cat ? 'btn-primary' : 'btn-glass'}" data-cat="${cat}" style="padding:0.4rem 1rem; font-size:0.85rem; border-radius:var(--radius-md);">
                  ${cat}
                </button>
              `).join('')}
            </div>

            <!-- Posts List Feed -->
            <div style="display:flex; flex-direction:column; gap:1.5rem;">
              ${filteredPosts.length === 0 ? `
                <div class="glass-card text-center" style="padding:4rem 0;">
                  <p style="color:var(--text-muted);">No threads published in this category yet.</p>
                </div>
              ` : filteredPosts.map(p => `
                <div class="glass-card" style="background:#fff; border-color:rgba(121,163,195,0.15); padding:1.75rem;">
                  
                  <!-- Post Author details -->
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
                    <div style="display:flex; gap:0.75rem; align-items:center;">
                      <img src="${p.authorAvatar || defaultAvatar}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                      <div>
                        <strong style="color:var(--secondary); font-size:0.9rem;">${p.authorName}</strong>
                        <div style="font-size:0.75rem; color:var(--text-muted);">${new Date(p.date).toLocaleString()}</div>
                      </div>
                    </div>
                    <span class="badge" style="font-size:0.65rem; background:rgba(121,163,195,0.12); color:var(--primary); border-color:rgba(121,163,195,0.25);">${p.category}</span>
                  </div>

                  <!-- Post Content -->
                  <h3 style="font-family:'Outfit'; color:var(--secondary); font-size:1.25rem; font-weight:700; margin-bottom:0.5rem;">${p.title}</h3>
                  <p style="font-size:0.9rem; color:var(--text-dark); line-height:1.6; margin-bottom:1.25rem; white-space:pre-wrap;">${p.content}</p>
                  
                  <!-- Actions Bar -->
                  <div style="display:flex; gap:1.5rem; align-items:center; border-top:1px solid rgba(0,0,0,0.04); padding-top:1rem;" class="no-print">
                    <button class="like-post-btn" data-id="${p.id}" style="background:none; border:none; color:var(--text-muted); cursor:pointer; display:flex; align-items:center; gap:0.4rem; font-size:0.85rem; font-weight:600;">
                      <span>👍</span>
                      <span>${p.likes} Likes</span>
                    </button>
                    <button class="reply-post-btn" data-id="${p.id}" style="background:none; border:none; color:var(--text-muted); cursor:pointer; display:flex; align-items:center; gap:0.4rem; font-size:0.85rem; font-weight:600;">
                      <span>💬</span>
                      <span>${p.replies.length} Replies</span>
                    </button>
                  </div>

                  <!-- Replies drawer -->
                  <div id="reply-drawer-${p.id}" style="margin-top:1.25rem; background:rgba(0,0,0,0.02); padding:1rem; border-radius:var(--radius-md); display:flex; flex-direction:column; gap:0.75rem; border:1px solid rgba(0,0,0,0.03);">
                    <div style="display:flex; flex-direction:column; gap:0.50rem;">
                      ${p.replies.length === 0 ? `
                        <small style="color:var(--text-muted); font-style:italic;">No replies yet. Be the first to comment!</small>
                      ` : p.replies.map(rep => `
                        <div style="font-size:0.8rem; border-bottom:1px solid rgba(0,0,0,0.02); padding-bottom:0.5rem;">
                          <strong style="color:var(--secondary);">${rep.authorName}:</strong>
                          <span style="color:var(--text-dark);">${rep.text}</span>
                          <div style="font-size:0.7rem; color:var(--text-muted); margin-top:2px;">${rep.date}</div>
                        </div>
                      `).join('')}
                    </div>

                    <!-- Quick write reply -->
                    <div style="display:flex; gap:0.5rem; margin-top:0.5rem;" class="no-print">
                      <input type="text" id="reply-input-${p.id}" class="glass-input" style="padding:0.4rem; font-size:0.8rem;" placeholder="Write a reply..." />
                      <button class="btn btn-primary submit-reply-btn" data-id="${p.id}" style="padding:0.4rem 1rem; font-size:0.8rem;">Reply</button>
                    </div>
                  </div>

                </div>
              `).join('')}
            </div>

          </div>

          <!-- RIGHT CREATE PANEL -->
          <div class="dashboard-widget-sm" class="no-print">
            <div class="glass-card" style="background:#fff; position:sticky; top:90px;">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.2rem; margin-bottom:1.25rem;">📝 Start Discussion</h3>
              
              <form id="create-post-form" style="display:flex; flex-direction:column; gap:1rem;">
                <div>
                  <label style="display:block; font-size:0.75rem; font-weight:600; margin-bottom:0.4rem;">Select Space</label>
                  <select id="new-post-category" class="glass-select">
                    <option value="Study Groups">Study Groups</option>
                    <option value="Coding Rooms">Coding Rooms</option>
                    <option value="Creative Clubs">Creative Clubs</option>
                    <option value="Hackathons">Hackathons</option>
                  </select>
                </div>

                <div>
                  <label style="display:block; font-size:0.75rem; font-weight:600; margin-bottom:0.4rem;">Headline Title</label>
                  <input type="text" id="new-post-title" class="glass-input" required placeholder="e.g. Seeking Python Study Swap" />
                </div>

                <div>
                  <label style="display:block; font-size:0.75rem; font-weight:600; margin-bottom:0.4rem;">Description Content</label>
                  <textarea id="new-post-content" class="glass-textarea" required rows="5" placeholder="Explain details about study schedule or swap needs..."></textarea>
                </div>

                <button type="submit" class="btn btn-primary" style="width:100%; padding:0.75rem;">Publish Post (+50 XP)</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  async afterRender() {
    const user = authService.getCurrentUser();
    if (!user) return;

    // Filter toggles
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        this.selectedFilter = e.target.getAttribute('data-cat');
        this.reRenderUI();
      });
    });

    // Create post submit
    const createPostForm = document.getElementById('create-post-form');
    if (createPostForm) {
      createPostForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const category = document.getElementById('new-post-category').value;
        const title = document.getElementById('new-post-title').value.trim();
        const content = document.getElementById('new-post-content').value.trim();

        if (!title || !content) return;

        const newPost = {
          authorId: user.id,
          authorName: user.name,
          authorAvatar: user.avatar,
          category,
          title,
          content
        };

        await dbService.createPost(newPost);
        
        // Reward user
        user.xp = (user.xp || 100) + 50;
        authService.setCurrentUser(user);

        window.showToast("Thread published! Gain +50 XP.", "success");
        this.reRenderUI();
      });
    }

    // Likes triggers
    document.querySelectorAll('.like-post-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.closest('.like-post-btn').getAttribute('data-id');
        await dbService.likePost(id);
        
        // Micro-interaction bounce
        e.target.style.transform = 'scale(1.3)';
        setTimeout(() => e.target.style.transform = 'scale(1)', 150);

        this.reRenderUI();
      });
    });

    // Send replies triggers
    document.querySelectorAll('.submit-reply-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.getAttribute('data-id');
        const replyText = document.getElementById(`reply-input-${id}`).value.trim();
        
        if (!replyText) return;

        await dbService.replyToPost(id, {
          authorName: user.name,
          text: replyText
        });

        window.showToast("Reply posted!", "success");
        this.reRenderUI();
      });
    });
  }

  async reRenderUI() {
    const mainContent = document.getElementById('main-content');
    const scrollPos = window.scrollY;
    mainContent.innerHTML = await this.render();
    await this.afterRender();
    window.scrollTo(0, scrollPos);
  }
}
