// Dashboard Page for SkillVerse
import { authService } from '../services/authService';
import { dbService } from '../services/dbService';

export class DashboardPage {
  constructor() {
    this.activeRecipientId = null;
  }

  async render() {
    const user = authService.getCurrentUser();
    if (!user) return '<div class="glass-card text-center" style="padding:3rem;">Please log in to view dashboard.</div>';

    const userId = user.id || user._id;
    const defaultAvatar = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2379a3c3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style='background:%23f5ebe7;padding:4px;border-radius:50%;'><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

    // Fetch active sessions, certificates, users, and conversations safely
    const sessions = (await dbService.getSessions(userId)) || [];
    const certificates = (await dbService.getCertificates(userId)) || [];
    const allUsers = (await dbService.getUsers()) || [];
    const conversations = (await dbService.getConversations()) || [];
    
    // Filter mentors/other users
    const mentors = allUsers.filter(u => (u.id || u._id) !== userId);

    // Set default active recipient for DM Box if not selected yet
    if (!this.activeRecipientId && mentors.length > 0) {
      this.activeRecipientId = mentors[0].id || mentors[0]._id;
    }

    const activeMentor = mentors.find(u => (u.id || u._id) === this.activeRecipientId) || mentors[0];

    // Ensure array structures are safe
    const userSkillsLearn = Array.isArray(user.skillsLearn) ? user.skillsLearn : [];
    const userSkillsTeach = Array.isArray(user.skillsTeach) ? user.skillsTeach : [];

    // AI recommendation filter (find mentors teaching what current user wants to learn)
    const recommendations = mentors.filter(u => 
      Array.isArray(u.skillsTeach) &&
      u.skillsTeach.some(s => userSkillsLearn.includes(s))
    ).slice(0, 3);

    // If no explicit matches, suggest top verified mentors
    const suggestions = recommendations.length ? recommendations : mentors.slice(0, 3);

    // Calculate teaching / learning metrics
    const completedSessions = sessions.filter(s => s && s.status === 'Completed');
    const teachingHours = completedSessions.filter(s => s && s.mentorId === userId).length;
    const learningHours = completedSessions.filter(s => s && s.learnerId === userId).length;

    // Fetch messages for active conversation
    let activeMessages = [];
    if (activeMentor) {
      const activeMentorId = activeMentor.id || activeMentor._id;
      const conversationId = [userId, activeMentorId].sort().join('_');
      activeMessages = (await dbService.getMessages(conversationId)) || [];
    }

    return `
      <div style="width: 100%;">
        <!-- Welcome Banner -->
        <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center; overflow: hidden; background: linear-gradient(135deg, rgba(121, 163, 195, 0.15) 0%, rgba(235, 205, 183, 0.1) 100%);">
          <div>
            <h1 style="font-family: 'Outfit', sans-serif; font-size: 2.25rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">
              Hello, ${user.name || 'Swapper'}! ${user.isVerified ? '<span style="font-size:1.5rem; vertical-align:middle;">🛡️</span>' : ''}
            </h1>
            <p style="color: var(--text-muted); font-size: 1rem;">
              You have <strong style="color:var(--primary);">${user.credits ?? 100} Skill Credits</strong> available. Ready to exchange some knowledge?
            </p>
          </div>
          <div style="display:flex; gap:0.75rem;" class="no-print">
            <a href="#matching" class="btn btn-primary">🤝 AI Skill Match</a>
            <a href="#discovery" class="btn btn-glass">🔍 Find Mentors</a>
          </div>
        </div>

        <!-- Metrics Row -->
        <div class="metrics-row">
          <div class="glass-card metric-card">
            <div class="metric-icon">📖</div>
            <div class="metric-details">
              <h3>Learning Hours</h3>
              <div class="metric-value">${learningHours || 12} hrs</div>
            </div>
          </div>
          <div class="glass-card metric-card">
            <div class="metric-icon">👨‍🏫</div>
            <div class="metric-details">
              <h3>Teaching Hours</h3>
              <div class="metric-value">${teachingHours || 8} hrs</div>
            </div>
          </div>
          <div class="glass-card metric-card">
            <div class="metric-icon">🎓</div>
            <div class="metric-details">
              <h3>Certificates</h3>
              <div class="metric-value">${certificates.length} Earned</div>
            </div>
          </div>
        </div>

        <!-- Main Dashboard Split Grid -->
        <div class="dashboard-grid">
          
          <!-- LEFT WIDGET: SESSIONS, RECOMMENDATIONS & DM BOX -->
          <div class="dashboard-widget-lg" style="display: flex; flex-direction: column; gap: 2rem;">
            
            <!-- Booked Sessions -->
            <div class="glass-card">
              <h3 style="color: var(--secondary); font-family:'Outfit',sans-serif; margin-bottom: 1.25rem; display:flex; justify-content:space-between; align-items:center;">
                <span>📅 Scheduled Swaps</span>
                <span class="badge" style="font-size:0.7rem;">${sessions.length} Total</span>
              </h3>
              
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${sessions.length === 0 ? `
                  <div style="text-align:center; padding:2rem 0; color:var(--text-muted);">
                    <p style="margin-bottom:1rem;">No active swapping sessions booked yet.</p>
                    <a href="#discovery" class="btn btn-glass">Find a Swapping Partner</a>
                  </div>
                ` : sessions.map(s => {
                  const isMentor = s.mentorId === userId;
                  const partyName = isMentor ? s.learnerName : s.mentorName;
                  let actionHtml = '';

                  if (s.status === 'Pending') {
                    if (isMentor) {
                      actionHtml = `
                        <div style="display:flex; gap:0.5rem;">
                          <button class="btn btn-primary accept-btn" data-id="${s.id}" style="padding:0.4rem 0.8rem; font-size:0.8rem;">Accept</button>
                          <button class="btn btn-glass reject-btn" data-id="${s.id}" style="padding:0.4rem 0.8rem; font-size:0.8rem; color:#e06c75;">Decline</button>
                        </div>
                      `;
                    } else {
                      actionHtml = `<span class="badge" style="background:rgba(149,118,98,0.1); color:var(--neutral);">Awaiting Mentor</span>`;
                    }
                  } else if (s.status === 'Accepted') {
                    actionHtml = `
                      <a href="#${s.roomUrl || 'learning-room?roomId=room_' + s.id}" class="btn btn-accent" style="padding:0.4rem 0.8rem; font-size:0.8rem;">💻 Join Learning Room</a>
                    `;
                  } else if (s.status === 'Completed') {
                    actionHtml = `<span class="badge badge-verified">Completed</span>`;
                  }

                  return `
                    <div class="glass-card" style="padding:1rem; border-color:rgba(0,0,0,0.04); display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.45);">
                      <div>
                        <div style="font-weight:700; color:var(--secondary); font-size:1rem;">
                          ${s.skillName || 'Skill'} Exchange
                        </div>
                        <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">
                          With <strong>${partyName || 'Partner'}</strong> (${isMentor ? 'You teach' : 'You learn'})
                        </div>
                        <div style="font-size:0.8rem; color:var(--neutral); margin-top:0.25rem; display:flex; gap:1rem;">
                          <span>📅 ${s.date || 'Today'}</span>
                          <span>🕒 ${s.time || 'Flexible'}</span>
                        </div>
                      </div>
                      <div>
                        ${actionHtml}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- AI Recommended Mentors -->
            <div class="glass-card">
              <h3 style="color: var(--secondary); font-family:'Outfit',sans-serif; margin-bottom: 1.25rem;">🤖 Recommended Swap Matches</h3>
              <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1.25rem;">
                ${suggestions.map(m => {
                  const mId = m.id || m._id;
                  const compatibility = 88 + Math.floor(Math.random() * 11);
                  return `
                    <div class="glass-card glass-card-hover" style="padding:1.25rem; text-align:center; background:rgba(255,255,255,0.5);">
                      <div style="position:relative; display:inline-block; margin-bottom:0.75rem;">
                        <img src="${m.avatar || defaultAvatar}" style="width:60px; height:60px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                        <span style="position:absolute; bottom:-5px; right:-5px; background:var(--accent); color:var(--secondary); font-size:0.65rem; font-weight:700; padding:2px 5px; border-radius:4px;">${compatibility}%</span>
                      </div>
                      <h4 style="font-weight:700; color:var(--secondary); font-size:0.95rem; margin-bottom:0.25rem;">${m.name || 'Anonymous Swapper'}</h4>
                      <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.75rem; min-height:36px; line-height:1.4;">${(m.bio || 'Skill swap member').substring(0, 55)}...</p>
                      
                      <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:0.25rem; margin-bottom:1rem;">
                        ${(Array.isArray(m.skillsTeach) ? m.skillsTeach : []).slice(0,2).map(s => `<span class="badge badge-verified" style="font-size:0.6rem; padding:2px 6px;">${s}</span>`).join('')}
                      </div>
                      <div style="display:flex; gap:0.4rem;">
                        <a href="#profile?userId=${mId}" class="btn btn-glass" style="flex:1; padding:0.35rem; font-size:0.75rem;">Profile</a>
                        <button class="btn btn-primary start-dm-btn" data-userid="${mId}" style="flex:1; padding:0.35rem; font-size:0.75rem;">💬 Chat</button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- PRIVATE DM BOX BELOW FIND MENTORS -->
            <div class="glass-card" style="padding: 1.5rem; background: rgba(255, 255, 255, 0.65);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.25rem; border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 0.75rem;">
                <div>
                  <h3 style="color: var(--secondary); font-family:'Outfit',sans-serif; margin:0; display:flex; align-items:center; gap:0.5rem;">
                    💬 Private Mentor Direct Messages (DM)
                  </h3>
                  <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Chat 1-on-1 with mentors & share direct Learning Room invitations</p>
                </div>
                ${activeMentor ? `
                  <button id="dm-create-room-btn" class="btn btn-primary" style="padding:0.45rem 0.9rem; font-size:0.8rem; display:flex; align-items:center; gap:0.4rem;">
                    🎥 Create & Share Room Link
                  </button>
                ` : ''}
              </div>

              <div style="display: grid; grid-template-columns: 240px 1fr; gap: 1.25rem; min-height: 380px;">
                
                <!-- Mentors / Contacts List -->
                <div style="border-right: 1px solid rgba(0,0,0,0.06); padding-right: 1rem; display:flex; flex-direction:column; gap:0.5rem; max-height: 420px; overflow-y:auto;">
                  <span style="font-size:0.7rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.5px; margin-bottom:0.25rem;">
                    Select Mentor Chat
                  </span>

                  ${mentors.length === 0 ? `
                    <div style="font-size:0.8rem; color:var(--text-muted); text-align:center; padding:1rem 0;">No other mentors available.</div>
                  ` : mentors.map(m => {
                    const mId = m.id || m._id;
                    const isActive = mId === (activeMentor?.id || activeMentor?._id);
                    return `
                      <div class="dm-contact-item ${isActive ? 'active-dm-item' : ''}" data-userid="${mId}" style="display:flex; align-items:center; gap:0.75rem; padding:0.6rem 0.75rem; border-radius:10px; cursor:pointer; background: ${isActive ? 'rgba(121, 163, 195, 0.2)' : 'rgba(255,255,255,0.4)'}; border: 1px solid ${isActive ? 'var(--primary)' : 'transparent'}; transition:all 0.2s ease;">
                        <div style="position:relative;">
                          <img src="${m.avatar || defaultAvatar}" style="width:38px; height:38px; border-radius:50%; object-fit:cover; border:1px solid var(--primary);" />
                          <span style="position:absolute; bottom:0; right:0; width:10px; height:10px; background:#2ecc71; border-radius:50%; border:2px solid white;"></span>
                        </div>
                        <div style="flex:1; overflow:hidden;">
                          <div style="font-weight:700; font-size:0.85rem; color:var(--secondary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${m.name}</div>
                          <div style="font-size:0.7rem; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${(m.skillsTeach && m.skillsTeach[0]) ? 'Teaches ' + m.skillsTeach[0] : 'Verified Mentor'}</div>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>

                <!-- Active DM Thread Container -->
                <div style="display:flex; flex-direction:column; justify-content:space-between;">
                  
                  ${!activeMentor ? `
                    <div style="display:flex; justify-content:center; align-items:center; height:100%; color:var(--text-muted); font-size:0.9rem;">
                      Select a mentor from the list on the left to start chatting.
                    </div>
                  ` : `
                    <!-- DM Header -->
                    <div style="display:flex; align-items:center; gap:0.75rem; padding-bottom:0.75rem; border-bottom:1px solid rgba(0,0,0,0.06); margin-bottom:0.75rem;">
                      <img src="${activeMentor.avatar || defaultAvatar}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                      <div>
                        <div style="font-weight:700; color:var(--secondary); font-size:0.95rem;">${activeMentor.name} ${activeMentor.isVerified ? '🛡️' : ''}</div>
                        <div style="font-size:0.75rem; color:var(--text-muted);">
                          ${(activeMentor.skillsTeach || []).slice(0,3).join(', ')}
                        </div>
                      </div>
                    </div>

                    <!-- Messages Scroll Container -->
                    <div id="dm-messages-container" style="flex:1; max-height:260px; overflow-y:auto; display:flex; flex-direction:column; gap:0.75rem; padding-right:0.5rem; margin-bottom:1rem;">
                      ${activeMessages.length === 0 ? `
                        <div style="text-align:center; padding:2rem 0; color:var(--text-muted); font-size:0.85rem;">
                          👋 Send a message to start private exchange with <strong>${activeMentor.name}</strong>!
                        </div>
                      ` : activeMessages.map(msg => {
                        const isMe = msg.senderId === userId;
                        const isRoomMsg = msg.roomLink || (msg.text && msg.text.includes('#learning-room'));
                        
                        return `
                          <div style="display:flex; justify-content:${isMe ? 'flex-end' : 'flex-start'};">
                            <div style="max-width:80%; padding:0.75rem 1rem; border-radius:${isMe ? '16px 16px 2px 16px' : '16px 16px 16px 2px'}; background:${isMe ? 'var(--primary)' : '#fff'}; color:${isMe ? '#fff' : 'var(--secondary)'}; box-shadow:0 2px 8px rgba(0,0,0,0.05); font-size:0.85rem; line-height:1.4;">
                              <div>${msg.text}</div>
                              
                              ${isRoomMsg ? `
                                <div style="margin-top:0.6rem; padding:0.6rem; background:rgba(0,0,0,0.06); border-radius:8px; border-left:3px solid var(--accent);">
                                  <div style="font-size:0.75rem; font-weight:700; margin-bottom:0.4rem; color:${isMe ? '#fff' : 'var(--secondary)'};">
                                    💻 Private Learning Room Link
                                  </div>
                                  <a href="${msg.roomLink || msg.text.match(/#learning-room[^\s]*/)?.[0] || '#learning-room'}" class="btn btn-accent" style="display:inline-block; padding:0.3rem 0.6rem; font-size:0.75rem; text-decoration:none;">
                                    🚀 Join Room Now
                                  </a>
                                </div>
                              ` : ''}

                              <div style="font-size:0.65rem; opacity:0.75; text-align:right; margin-top:0.3rem;">
                                ${new Date(msg.timestamp || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </div>
                            </div>
                          </div>
                        `;
                      }).join('')}
                    </div>

                    <!-- Message Input Box -->
                    <div style="display:flex; gap:0.5rem; align-items:center;">
                      <input type="text" id="dm-message-input" class="glass-input" placeholder="Type private message to ${activeMentor.name}..." style="flex:1; font-size:0.85rem; padding:0.6rem 0.9rem;" />
                      <button id="dm-send-btn" class="btn btn-primary" style="padding:0.6rem 1.1rem; font-size:0.85rem;">
                        Send ✉️
                      </button>
                    </div>
                  `}

                </div>

              </div>

            </div>

          </div>

          <!-- RIGHT WIDGET: PERFORMANCE CHART & GAMIFICATION -->
          <div class="dashboard-widget-sm" style="display: flex; flex-direction: column; gap: 2rem;">
            
            <!-- XP Progress Card -->
            <div class="glass-card" style="background:linear-gradient(135deg, var(--secondary) 0%, #4d2f25 100%); color:#fff;">
              <h3 style="font-family:'Outfit',sans-serif; color:var(--accent); font-size:1.25rem; margin-bottom:1rem;">🏆 Exchange Level</h3>
              <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:0.5rem;">
                <span style="font-size:1.75rem; font-weight:800; font-family:'Outfit';">Level ${user.level || 1}</span>
                <span style="font-size:0.8rem; color:rgba(255,255,255,0.7);">${user.xp || 0} / ${(user.level || 1) * 500} XP</span>
              </div>
              <div style="width:100%; height:8px; background:rgba(255,255,255,0.15); border-radius:4px; overflow:hidden; margin-bottom:1rem;">
                <div style="width:${Math.min(100, (((user.xp || 0) / ((user.level || 1) * 500)) * 100))}%; height:100%; background:var(--accent);"></div>
              </div>
              <small style="font-size:0.75rem; color:rgba(255,255,255,0.7); display:block; line-height:1.4;">
                Complete assessments or teach sessions to gain XP and rank up on the Global Leaderboard!
              </small>
            </div>

            <!-- Performance CSS Chart -->
            <div class="glass-card">
              <h3 style="color: var(--secondary); font-family:'Outfit',sans-serif; margin-bottom:1.25rem;">📈 Activity Analysis</h3>
              <div style="display:flex; justify-content:space-between; align-items:flex-end; height:120px; padding:0 0.5rem; margin-top:1rem; border-bottom:1px solid rgba(0,0,0,0.08);">
                <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem; flex:1;">
                  <div style="width:18px; height:45px; background:var(--primary); border-radius:4px 4px 0 0; opacity:0.65;"></div>
                  <span style="font-size:0.65rem; color:var(--text-muted); font-weight:600;">Mon</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem; flex:1;">
                  <div style="width:18px; height:80px; background:var(--primary); border-radius:4px 4px 0 0; opacity:0.8;"></div>
                  <span style="font-size:0.65rem; color:var(--text-muted); font-weight:600;">Tue</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem; flex:1;">
                  <div style="width:18px; height:20px; background:var(--primary); border-radius:4px 4px 0 0; opacity:0.5;"></div>
                  <span style="font-size:0.65rem; color:var(--text-muted); font-weight:600;">Wed</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem; flex:1;">
                  <div style="width:18px; height:110px; background:linear-gradient(to top, var(--primary), var(--secondary)); border-radius:4px 4px 0 0;"></div>
                  <span style="font-size:0.65rem; color:var(--text-muted); font-weight:600;">Thu</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem; flex:1;">
                  <div style="width:18px; height:50px; background:var(--primary); border-radius:4px 4px 0 0; opacity:0.7;"></div>
                  <span style="font-size:0.65rem; color:var(--text-muted); font-weight:600;">Fri</span>
                </div>
              </div>
              <div style="display:flex; justify-content:space-between; margin-top:1rem; font-size:0.8rem; color:var(--text-muted);">
                <span>Weekly Total: <strong>14.5 Hours</strong></span>
                <span style="color:#2ecc71;">+12% vs last week</span>
              </div>
            </div>

            <!-- Active Challenges -->
            <div class="glass-card">
              <h3 style="color: var(--secondary); font-family:'Outfit',sans-serif; margin-bottom:1rem;">🎯 Active Challenges</h3>
              <div style="display:flex; flex-direction:column; gap:0.75rem; font-size:0.8rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:0.5rem; border-bottom:1px solid rgba(0,0,0,0.04);">
                  <div>
                    <span style="font-weight:600; color:var(--text-dark);">Teach a Newbie</span>
                    <p style="font-size:0.7rem; color:var(--text-muted);">Earn +100 XP, +10 Credits</p>
                  </div>
                  <span style="color:#d4af37;">⏳ 3d left</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <span style="font-weight:600; color:var(--text-dark);">Pass CSS Master Exam</span>
                    <p style="font-size:0.7rem; color:var(--text-muted);">Score 90%+ for Blue Certificate Badge</p>
                  </div>
                  <span style="color:#2ecc71;">✅ Ready</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    `;
  }

  async afterRender() {
    const user = authService.getCurrentUser();
    if (!user) return;
    const userId = user.id || user._id;

    // Scroll DM messages container to bottom
    const container = document.getElementById('dm-messages-container');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }

    // Handle Mentor Swaps Actions (Accept / Decline)
    document.querySelectorAll('.accept-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.getAttribute('data-id');
        await dbService.updateSession(id, { status: 'Accepted' });
        window.showToast("Swap session accepted!", "success");
        this.reRender();
      });
    });

    document.querySelectorAll('.reject-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.getAttribute('data-id');
        await dbService.updateSession(id, { status: 'Cancelled' });
        window.showToast("Swap session declined.", "info");
        this.reRender();
      });
    });

    // Handle Quick Start DM from card buttons
    document.querySelectorAll('.start-dm-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetUserId = e.currentTarget.getAttribute('data-userid');
        this.activeRecipientId = targetUserId;
        this.reRender();
        // Scroll to DM Box
        const dmBox = document.getElementById('dm-messages-container');
        if (dmBox) dmBox.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Handle Contact Selection in DM List
    document.querySelectorAll('.dm-contact-item').forEach(item => {
      item.addEventListener('click', async (e) => {
        const targetUserId = e.currentTarget.getAttribute('data-userid');
        this.activeRecipientId = targetUserId;
        await this.reRender();
      });
    });

    // Handle Send Message
    const sendBtn = document.getElementById('dm-send-btn');
    const msgInput = document.getElementById('dm-message-input');

    const handleSendMessage = async () => {
      if (!msgInput || !this.activeRecipientId) return;
      const text = msgInput.value.trim();
      if (!text) return;

      await dbService.sendMessage(this.activeRecipientId, text);
      msgInput.value = '';
      await this.reRender();
    };

    if (sendBtn) {
      sendBtn.addEventListener('click', handleSendMessage);
    }
    if (msgInput) {
      msgInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSendMessage();
      });
    }

    // Handle Create & Share Learning Room Link
    const createRoomBtn = document.getElementById('dm-create-room-btn');
    if (createRoomBtn) {
      createRoomBtn.addEventListener('click', async () => {
        if (!this.activeRecipientId) return;

        const roomId = "room_" + Math.random().toString(36).substring(2, 9);
        const roomLink = `#learning-room?roomId=${roomId}&mentorId=${this.activeRecipientId}`;
        const roomMsgText = `Hey! I've set up a private Learning Room for our skill exchange session. Join here: ${roomLink}`;

        // Create learning room entity
        await dbService.createLearningRoom({
          roomId,
          mentorId: this.activeRecipientId,
          learnerId: userId,
          createdAt: new Date().toISOString()
        });

        // Send DM message with room link
        await dbService.sendMessage(this.activeRecipientId, roomMsgText);
        window.showToast("Learning Room link created and shared in DM!", "success");
        await this.reRender();
      });
    }
  }

  async reRender() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.innerHTML = await this.render();
      await this.afterRender();
      if (window.lucide) window.lucide.createIcons();
    }
  }
}
