// Google Meet & Zoom Inspired Collaborative Learning Room for SkillVerse
import { authService } from '../services/authService';
import { dbService } from '../services/dbService';
import { aiService } from '../services/aiService';

export class LearningRoomPage {
  constructor(params) {
    this.params = params;
    this.activeTab = "whiteboard"; // "whiteboard" or "code" or "notes"
    this.sidebarTab = "chat"; // "chat" or "people"
    
    // Call States
    this.isMuted = false;
    this.isVideoOff = false;
    this.isSharingScreen = false;
    this.isHandRaised = false;
    this.isRecording = false;
    this.isSidebarOpen = true;
    
    this.recordingTime = 0;
    this.recordingInterval = null;
    this.localStream = null; // holds real camera/mic stream
    
    const currentUser = authService.getCurrentUser();
    const firstName = currentUser?.name ? currentUser.name.split(' ')[0] : "Learner";

    // Seed chat messages
    this.chatMessages = [
      { sender: "System", text: "SkillVerse Encrypted Meeting Tunnel Active.", time: "10:00 AM" },
      { sender: "Sanskrutii Tidke", text: `Hi ${firstName}, welcome to our Zoom session! We are ready to learn.`, time: "10:01 AM" },
      { sender: "Ashita Wairagade", text: "Hey everyone! Glad to join. Ready to start when you are.", time: "10:02 AM" }
    ];
  }

  async render() {
    const user = authService.getCurrentUser();
    if (!user) return '';

    return `
      <div class="meet-workspace">
        
        <!-- Header Info Bar -->
        <div class="meet-header">
          <div class="meet-title-group">
            <span class="meet-badge">LIVE SECURE</span>
            <h2 class="meet-title">💻 Advanced Full Stack Swapping: Web Architecture</h2>
            <p class="meet-subtitle">Host: <strong>Sanskrutii Tidke</strong> | Co-Host: <strong>Ashita Wairagade</strong></p>
          </div>
          
          <div class="meet-status-group">
            <div id="meet-timer-container" class="meet-timer" style="display: none;">
              <span class="timer-dot"></span>
              REC <span id="meet-timer-val">00:00</span>
            </div>
            <button id="leave-call-btn" class="btn-leave">📞 End Swap</button>
          </div>
        </div>

        <!-- Main Workspace Area -->
        <div class="meet-main-layout ${this.isSidebarOpen ? 'sidebar-open' : ''}">
          
          <!-- LEFT / CENTER: CALL STREAMS & PRESENTATION GRID -->
          <div class="meet-content-area">
            
            <div class="meet-viewscreen-grid ${this.isSharingScreen ? 'sharing-layout' : 'grid-layout'}">
              
              <!-- SCREEN SHARE MAIN PREVIEW SCREEN -->
              ${this.isSharingScreen ? `
                <div class="screen-share-view glass-card">
                  <div class="presentation-header">
                    <span style="display:flex; align-items:center; gap:0.5rem; color:#fff;">
                      🖥️ <strong>${user.name || 'You'} is presenting</strong>
                    </span>
                    <span style="font-size:0.75rem; color:rgba(255,255,255,0.6);">Click Stop Sharing in controls to return</span>
                  </div>
                  <!-- Mock presentation slide / code -->
                  <div class="presentation-body">
                    <pre style="margin:0; font-family:monospace; font-size:0.9rem; color:#85b5e1; text-align:left;">
// SkillVerse Dynamic CSS Grid & Variable Demo
const theme = {
  primary: '#79A3C3',
  background: 'rgba(255, 255, 255, 0.45)',
  blur: '12px'
};

function renderGlassmorphismCard() {
  const card = document.createElement('div');
  card.style.backdropFilter = \`blur(\${theme.blur})\`;
  card.style.background = theme.background;
  console.log("Card mounted on viewport successfully!");
}</pre>
                  </div>
                </div>
              ` : ''}

              <!-- PARTICIPANT FEEDS CONTAINER -->
              <div class="meet-feeds-group">
                
                <!-- Feed 1: Sanskrutii Tidke (Mentor) -->
                <div class="meet-video-card speaker-active">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250" class="feed-img" />
                  <div class="speaking-indicator">
                    <div class="indicator-bar bar-1"></div>
                    <div class="indicator-bar bar-2"></div>
                    <div class="indicator-bar bar-3"></div>
                  </div>
                  <div class="feed-label">
                    <span>Sanskrutii Tidke (Mentor)</span>
                    <span class="mic-icon-feed">🎙️</span>
                  </div>
                </div>

                <!-- Feed 2: Ashita Wairagade (Participant) -->
                <div class="meet-video-card">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250" class="feed-img" />
                  <div class="feed-label">
                    <span>Ashita Wairagade (Learner)</span>
                    <span class="mic-icon-feed">🎙️</span>
                  </div>
                </div>

                <!-- Feed 3: You (real webcam) -->
                <div class="meet-video-card your-feed">
                  <!-- Real camera feed via getUserMedia -->
                  <video id="my-video-feed" class="feed-img" autoplay muted playsinline
                    style="display:${this.isVideoOff ? 'none' : 'block'}; object-fit:cover;"></video>

                  <!-- Fallback avatar when camera is off or unavailable -->
                  <div id="my-video-avatar" class="feed-avatar-placeholder" style="display:${this.isVideoOff ? 'flex' : 'none'};">
                    <img src="${user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || 'You')}&background=6c63ff&color=fff&size=200&bold=true&rounded=true`}" 
                      style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                    <span style="font-size:0.75rem; color:#abb1b8; margin-top:0.5rem;" id="my-avatar-label">Camera Off</span>
                  </div>

                  <!-- Hand raise badge -->
                  <div id="my-hand-badge" class="hand-raised-badge ${this.isHandRaised ? 'active' : ''}">🙋‍♀️ Hand Raised</div>
                  
                  <div class="feed-label">
                    <span>${user.name || 'You'} (You)</span>
                    <span id="my-mic-feed-icon" class="mic-icon-feed ${this.isMuted ? 'muted' : ''}">🎙️</span>
                  </div>
                </div>

              </div>

            </div>

            <!-- COLLABORATIVE SANDBOX COLLAPSED TAB/SLIDE (Interactive Area below video feeds) -->
            <div class="sandbox-card glass-card">
              <div class="sandbox-header">
                <button class="sandbox-tab-btn ${this.activeTab === 'whiteboard' ? 'active' : ''}" data-sandbox-tab="whiteboard">🎨 Whiteboard Canvas</button>
                <button class="sandbox-tab-btn ${this.activeTab === 'code' ? 'active' : ''}" data-sandbox-tab="code">💻 Collaborative Code Editor</button>
                <button class="sandbox-tab-btn ${this.activeTab === 'notes' ? 'active' : ''}" data-sandbox-tab="notes">🤖 AI Summary Notes</button>
              </div>

              <div class="sandbox-body">
                <!-- Whiteboard -->
                <div id="sandbox-whiteboard" style="display:${this.activeTab === 'whiteboard' ? 'block' : 'none'};">
                  <div class="whiteboard-toolbar">
                    <div style="display:flex; gap:0.5rem;">
                      <button class="color-btn" style="background:#221d1b;" data-color="#221d1b"></button>
                      <button class="color-btn" style="background:#79A3C3;" data-color="#79A3C3"></button>
                      <button class="color-btn" style="background:#e06c75;" data-color="#e06c75"></button>
                    </div>
                    <button id="clear-meet-whiteboard" class="btn btn-glass" style="padding:0.25rem 0.75rem; font-size:0.75rem;">Clear Whiteboard</button>
                  </div>
                  <canvas id="meet-whiteboard-canvas" class="meet-canvas"></canvas>
                </div>

                <!-- Code Sandbox -->
                <div id="sandbox-code" style="display:${this.activeTab === 'code' ? 'block' : 'none'};">
                  <textarea id="meet-code-editor" class="meet-editor-text" spellcheck="false">// Collaborative Code Workspace
// Write JavaScript or styling tests below
function initSkillVerseExchange() {
  const mentors = ['Sanskrutii Tidke', 'Ashita Wairagade'];
  const user = '${user.name || 'You'}';
  
  console.log("Setting up free swap call for " + user + " with " + mentors.join(", ") + ".");
}
                  </textarea>
                </div>

                <!-- AI Notes -->
                <div id="sandbox-notes" style="display:${this.activeTab === 'notes' ? 'block' : 'none'};">
                  <button id="generate-ai-meet-notes" class="btn btn-primary" style="width:100%; margin-bottom:1rem; font-size:0.85rem;">🤖 Compile AI Session Summaries & Checklists</button>
                  <div id="meet-notes-container" class="notes-container-box">
                    <p style="color:var(--text-muted); font-style:italic; text-align:center;">Generate a summary based on meeting transcripts and codes.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- MEETING CONTROLS TOOLBAR -->
            <div class="meet-controls-bar">
              <button id="btn-mute" class="control-circle ${this.isMuted ? 'active-red' : ''}" title="${this.isMuted ? 'Unmute microphone' : 'Mute microphone'}">
                <span class="control-emoji">${this.isMuted ? '🎙️❌' : '🎙️'}</span>
              </button>
              
              <button id="btn-camera" class="control-circle ${this.isVideoOff ? 'active-red' : ''}" title="${this.isVideoOff ? 'Start video' : 'Stop video'}">
                <span class="control-emoji">${this.isVideoOff ? '📹❌' : '📹'}</span>
              </button>

              <button id="btn-screenshare" class="control-circle ${this.isSharingScreen ? 'active-green' : ''}" title="Share screen">
                <span class="control-emoji">🖥️</span>
              </button>

              <button id="btn-handraise" class="control-circle ${this.isHandRaised ? 'active-yellow' : ''}" title="Raise hand">
                <span class="control-emoji">🙋‍♀️</span>
              </button>

              <button id="btn-record" class="control-circle ${this.isRecording ? 'active-red' : ''}" title="Record meeting">
                <span class="control-emoji">🔴</span>
              </button>

              <button id="btn-sidebar" class="control-circle ${this.isSidebarOpen ? 'active-primary' : ''}" title="Toggle meeting sidebar">
                <span class="control-emoji">💬</span>
              </button>
            </div>

          </div>

          <!-- RIGHT SIDE PANEL: CHAT & PEOPLE -->
          <div class="meet-sidebar glass-card">
            <div class="sidebar-header-tabs">
              <button class="sidebar-tab-btn ${this.sidebarTab === 'chat' ? 'active' : ''}" data-side-tab="chat">💬 Chat</button>
              <button class="sidebar-tab-btn ${this.sidebarTab === 'people' ? 'active' : ''}" data-side-tab="people">👥 People (3)</button>
            </div>

            <div class="sidebar-tab-content">
              
              <!-- Tab 1: Chat Message Log -->
              <div id="side-tab-chat" style="display:${this.sidebarTab === 'chat' ? 'flex' : 'none'}; flex-direction:column; height:100%;">
                <div id="meet-chat-log" class="meet-chat-log-box">
                  ${this.chatMessages.map(msg => `
                    <div class="meet-chat-bubble ${msg.sender === 'System' ? 'system-bubble' : (msg.isMine || msg.sender === user.name) ? 'my-bubble' : 'other-bubble'}">
                      <small class="sender-label">${msg.sender}</small>
                      <p class="bubble-text">${msg.text}</p>
                    </div>
                  `).join('')}
                </div>
                
                <div class="meet-chat-input-bar">
                  <input type="text" id="meet-chat-input" placeholder="Send a message to everyone..." autocomplete="off" />
                  <button id="meet-chat-send-btn">Send</button>
                </div>
              </div>

              <!-- Tab 2: Participants List -->
              <div id="side-tab-people" style="display:${this.sidebarTab === 'people' ? 'block' : 'none'};">
                <div class="people-list-container">
                  <div class="people-row">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" class="people-avatar" />
                    <div class="people-info">
                      <span class="people-name">Sanskrutii Tidke</span>
                      <span class="people-role">Host, Mentor</span>
                    </div>
                    <span style="font-size:0.9rem;">🎙️ On</span>
                  </div>

                  <div class="people-row">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" class="people-avatar" />
                    <div class="people-info">
                      <span class="people-name">Ashita Wairagade</span>
                      <span class="people-role">Participant</span>
                    </div>
                    <span style="font-size:0.9rem;">🎙️ On</span>
                  </div>

                  <div class="people-row">
                    <img src="${user.avatar}" class="people-avatar" />
                    <div class="people-info">
                      <span class="people-name">${user.name || 'You'} (You)</span>
                      <span class="people-role">Presenter</span>
                    </div>
                    <span id="my-mic-status-label" style="font-size:0.9rem;">${this.isMuted ? '🎙️ Muted' : '🎙️ On'}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>
        .meet-workspace {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #110e0d;
          color: #f6f8fa;
          padding: 1.5rem;
          box-sizing: border-box;
          border-radius: var(--radius-md);
        }
        .meet-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 1rem;
          margin-bottom: 1rem;
        }
        .meet-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .meet-badge {
          align-self: flex-start;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          background: #4cd964;
          color: #221d1b;
          letter-spacing: 0.05em;
        }
        .meet-title {
          font-size: 1.25rem;
          font-family: 'Outfit';
          margin: 0;
          color: #fff;
          font-weight: 700;
        }
        .meet-subtitle {
          font-size: 0.8rem;
          color: #abb1b8;
          margin: 0;
        }
        .meet-status-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .meet-timer {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #e06c75;
          font-size: 0.85rem;
          font-weight: 700;
          background: rgba(224, 108, 117, 0.15);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-sm);
        }
        .timer-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e06c75;
          animation: blink-timer 1.2s infinite;
        }
        @keyframes blink-timer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .btn-leave {
          background: #e06c75;
          border: none;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-leave:hover {
          background: #d05b64;
          transform: scale(1.02);
        }

        .meet-main-layout {
          display: flex;
          gap: 1.5rem;
          flex: 1;
          height: calc(100vh - 120px);
          overflow: hidden;
        }
        .meet-content-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 0;
          height: 100%;
        }

        .meet-viewscreen-grid {
          flex: 1.3;
          min-height: 280px;
          display: flex;
          gap: 1rem;
        }
        .grid-layout .meet-feeds-group {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          width: 100%;
        }
        .sharing-layout {
          display: flex;
        }
        .sharing-layout .screen-share-view {
          flex: 2.2;
          background: #1e1e1e;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .sharing-layout .meet-feeds-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          overflow-y: auto;
        }

        .presentation-header {
          background: #110e0d;
          padding: 0.5rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .presentation-body {
          flex: 1;
          background: #1c2229;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .meet-video-card {
          position: relative;
          background: #201a18;
          border-radius: var(--radius-sm);
          border: 2px solid transparent;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 16/10;
        }
        .meet-video-card.speaker-active {
          border-color: #4cd964;
          box-shadow: 0 0 15px rgba(76, 217, 100, 0.2);
        }
        .feed-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .feed-label {
          position: absolute;
          bottom: 0.75rem;
          left: 0.75rem;
          background: rgba(0, 0, 0, 0.6);
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .mic-icon-feed {
          font-size: 0.7rem;
        }
        .mic-icon-feed.muted {
          filter: grayscale(1) opacity(0.5);
        }
        .speaking-indicator {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: #4cd964;
          padding: 0.35rem;
          border-radius: 50%;
          display: flex;
          align-items: flex-end;
          gap: 2px;
          width: 18px;
          height: 18px;
          box-sizing: border-box;
          justify-content: center;
        }
        .indicator-bar {
          width: 2px;
          background: #221d1b;
          border-radius: 1px;
        }
        .bar-1 { height: 6px; animation: bounce-bar 0.8s infinite alternate ease-in-out; }
        .bar-2 { height: 10px; animation: bounce-bar 0.6s infinite alternate ease-in-out 0.1s; }
        .bar-3 { height: 4px; animation: bounce-bar 0.7s infinite alternate ease-in-out 0.2s; }
        @keyframes bounce-bar {
          0% { height: 2px; }
          100% { height: 100%; }
        }

        .feed-avatar-placeholder {
          width: 100%;
          height: 100%;
          background: #221d1b;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .hand-raised-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background: #ffd700;
          color: #221d1b;
          font-weight: 700;
          font-size: 0.7rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          display: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }
        .hand-raised-badge.active {
          display: block;
          animation: scale-up-hand 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes scale-up-hand {
          0% { transform: scale(0.6); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .sandbox-card {
          flex: 1;
          background: rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-sm);
          overflow: hidden;
          min-height: 220px;
        }
        .sandbox-header {
          display: flex;
          background: rgba(0,0,0,0.2);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .sandbox-tab-btn {
          flex: 1;
          background: none;
          border: none;
          color: #abb1b8;
          padding: 0.6rem;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.8rem;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .sandbox-tab-btn:hover {
          color: #fff;
          background: rgba(255,255,255,0.02);
        }
        .sandbox-tab-btn.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
          background: rgba(255,255,255,0.05);
        }
        .sandbox-body {
          flex: 1;
          padding: 0.75rem;
          overflow: hidden;
        }
        .whiteboard-toolbar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.4rem;
          align-items: center;
        }
        .color-btn {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          cursor: pointer;
        }
        .meet-canvas {
          width: 100%;
          height: 140px;
          background: #faf8f6;
          border-radius: var(--radius-sm);
          cursor: crosshair;
        }
        .meet-editor-text {
          width: 100%;
          height: 140px;
          background: #1c2229;
          color: #85b5e1;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-sm);
          padding: 0.75rem;
          font-family: monospace;
          font-size: 0.8rem;
          outline: none;
          resize: none;
        }
        .notes-container-box {
          height: 100px;
          overflow-y: auto;
          background: #fff;
          color: var(--text-dark);
          border-radius: var(--radius-sm);
          padding: 0.75rem;
          font-size: 0.8rem;
          line-height: 1.4;
          text-align: left;
        }

        .meet-controls-bar {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.5rem;
          background: rgba(0,0,0,0.3);
          border-radius: var(--radius-full);
          align-self: center;
        }
        .control-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #3c4043;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .control-circle:hover {
          background: #4e5256;
          transform: scale(1.05);
        }
        .control-emoji {
          font-size: 1.15rem;
          color: #fff;
        }
        .control-circle.active-red {
          background: #e06c75;
        }
        .control-circle.active-red:hover {
          background: #d05b64;
        }
        .control-circle.active-green {
          background: #4cd964;
        }
        .control-circle.active-yellow {
          background: #ffd700;
        }
        .control-circle.active-yellow .control-emoji {
          color: #221d1b;
        }
        .control-circle.active-primary {
          background: var(--primary);
        }

        .meet-sidebar {
          width: 320px;
          display: none;
          flex-direction: column;
          background: rgba(255,255,255,0.06);
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          height: 100%;
        }
        .meet-main-layout.sidebar-open .meet-sidebar {
          display: flex;
        }

        .sidebar-header-tabs {
          display: flex;
          background: rgba(0,0,0,0.2);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .sidebar-tab-btn {
          flex: 1;
          background: none;
          border: none;
          color: #abb1b8;
          padding: 0.85rem;
          cursor: pointer;
          font-weight: 700;
          font-size: 0.85rem;
          border-bottom: 2px solid transparent;
          font-family: inherit;
          transition: all 0.2s ease;
        }
        .sidebar-tab-btn.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
          background: rgba(255,255,255,0.03);
        }
        .sidebar-tab-content {
          flex: 1;
          padding: 1rem;
          overflow: hidden;
          min-height: 0;
        }

        .meet-chat-log-box {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          padding-right: 0.25rem;
        }
        .meet-chat-bubble {
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          font-size: 0.8rem;
          line-height: 1.3;
          max-width: 85%;
        }
        .system-bubble {
          background: rgba(255,255,255,0.05);
          border: 1px dashed rgba(255,255,255,0.15);
          align-self: center;
          text-align: center;
          max-width: 95%;
          color: #abb1b8;
        }
        .my-bubble {
          background: var(--primary);
          color: #fff;
          align-self: flex-end;
          border-bottom-right-radius: 2px;
        }
        .other-bubble {
          background: rgba(255,255,255,0.1);
          align-self: flex-start;
          border-bottom-left-radius: 2px;
        }
        .sender-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          margin-bottom: 0.15rem;
          opacity: 0.8;
        }
        .bubble-text {
          margin: 0;
        }
        .meet-chat-input-bar {
          display: flex;
          gap: 0.4rem;
        }
        #meet-chat-input {
          flex: 1;
          background: rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: var(--radius-sm);
          color: #fff;
          padding: 0.45rem 0.75rem;
          font-size: 0.8rem;
          outline: none;
          font-family: inherit;
        }
        #meet-chat-input:focus {
          border-color: var(--primary);
        }
        #meet-chat-send-btn {
          background: var(--primary);
          border: none;
          color: #fff;
          border-radius: var(--radius-sm);
          padding: 0.45rem 0.85rem;
          font-size: 0.8rem;
          cursor: pointer;
          font-weight: 600;
        }

        .people-list-container {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .people-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255,255,255,0.03);
          padding: 0.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .people-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }
        .people-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .people-name {
          font-size: 0.8rem;
          font-weight: 700;
        }
        .people-role {
          font-size: 0.65rem;
          color: #abb1b8;
        }
      </style>
    `;
  }

  async afterRender() {
    const user = authService.getCurrentUser();

    // ── Request real camera + microphone ────────────────────────────────────
    this.startLocalMedia();

    // Bind sandbox tabs toggle
    document.querySelectorAll('.sandbox-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.target.getAttribute('data-sandbox-tab');
        this.activeTab = tab;
        
        const wb = document.getElementById('sandbox-whiteboard');
        const cd = document.getElementById('sandbox-code');
        const nt = document.getElementById('sandbox-notes');
        if (wb) wb.style.display = tab === 'whiteboard' ? 'block' : 'none';
        if (cd) cd.style.display = tab === 'code' ? 'block' : 'none';
        if (nt) nt.style.display = tab === 'notes' ? 'block' : 'none';
        
        document.querySelectorAll('.sandbox-tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        if (tab === 'whiteboard') this.initWhiteboard();
      });
    });

    // Bind sidebar tabs toggle
    document.querySelectorAll('.sidebar-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.target.getAttribute('data-side-tab');
        this.sidebarTab = tab;

        const chatTab = document.getElementById('side-tab-chat');
        const peopleTab = document.getElementById('side-tab-people');
        if (chatTab) chatTab.style.display = tab === 'chat' ? 'flex' : 'none';
        if (peopleTab) peopleTab.style.display = tab === 'people' ? 'block' : 'none';

        document.querySelectorAll('.sidebar-tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        if (tab === 'chat') setTimeout(() => this.scrollChat(), 50);
      });
    });

    // Control: Mute/Unmute microphone
    const muteBtn = document.getElementById('btn-mute');
    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        this.isMuted = !this.isMuted;
        muteBtn.classList.toggle('active-red', this.isMuted);
        muteBtn.title = this.isMuted ? 'Unmute microphone' : 'Mute microphone';
        
        const emojiSpan = muteBtn.querySelector('.control-emoji');
        if (emojiSpan) emojiSpan.innerText = this.isMuted ? '🎙️❌' : '🎙️';
        
        // Mute/unmute the real audio track
        if (this.localStream) {
          this.localStream.getAudioTracks().forEach(t => { t.enabled = !this.isMuted; });
        }

        const feedIcon = document.getElementById('my-mic-feed-icon');
        if (feedIcon) feedIcon.classList.toggle('muted', this.isMuted);

        const labelStatus = document.getElementById('my-mic-status-label');
        if (labelStatus) labelStatus.innerText = this.isMuted ? '🎙️ Muted' : '🎙️ On';

        window.showToast(this.isMuted ? 'Microphone muted' : 'Microphone unmuted', 'info');
      });
    }

    // Control: Stop/Start video camera
    const camBtn = document.getElementById('btn-camera');
    if (camBtn) {
      camBtn.addEventListener('click', () => {
        this.isVideoOff = !this.isVideoOff;
        camBtn.classList.toggle('active-red', this.isVideoOff);
        camBtn.title = this.isVideoOff ? 'Start video' : 'Stop video';

        const emojiSpan = camBtn.querySelector('.control-emoji');
        if (emojiSpan) emojiSpan.innerText = this.isVideoOff ? '📹❌' : '📹';

        // Enable/disable the real video track
        if (this.localStream) {
          this.localStream.getVideoTracks().forEach(t => { t.enabled = !this.isVideoOff; });
        }

        // Show/hide the video element vs avatar placeholder
        const feedVideo = document.getElementById('my-video-feed');
        const avatarPlaceholder = document.getElementById('my-video-avatar');
        if (feedVideo) feedVideo.style.display = this.isVideoOff ? 'none' : 'block';
        if (avatarPlaceholder) avatarPlaceholder.style.display = this.isVideoOff ? 'flex' : 'none';

        const avatarLabel = document.getElementById('my-avatar-label');
        if (avatarLabel) avatarLabel.textContent = this.isVideoOff ? 'Camera Off' : 'Camera On';

        window.showToast(this.isVideoOff ? 'Camera stopped' : 'Camera started', 'info');
      });
    }

    // Control: Screen Sharing toggle
    const shareBtn = document.getElementById('btn-screenshare');
    shareBtn.addEventListener('click', () => {
      this.isSharingScreen = !this.isSharingScreen;
      shareBtn.classList.toggle('active-green', this.isSharingScreen);
      
      window.showToast(this.isSharingScreen ? 'Screen sharing initialized' : 'Screen sharing stopped', 'success');
      this.reRenderUI();
    });

    // Control: Hand Raise with Audio Synthesizer Beep
    const handBtn = document.getElementById('btn-handraise');
    handBtn.addEventListener('click', () => {
      this.isHandRaised = !this.isHandRaised;
      handBtn.classList.toggle('active-yellow', this.isHandRaised);

      const badge = document.getElementById('my-hand-badge');
      if (badge) {
        badge.classList.toggle('active', this.isHandRaised);
      }

      if (this.isHandRaised) {
        window.showToast('You raised your hand', 'success');
        this.playHandRaiseChime();
        
        // Mock reply from mentor acknowledging the raised hand in chat
        setTimeout(() => {
          const uName = authService.getCurrentUser()?.name;
          const fName = uName ? uName.split(' ')[0] : 'there';
          this.chatMessages.push({
            sender: "Sanskrutii Tidke",
            text: `Yes, ${fName}? I see your hand raised, go ahead and ask!`,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          });
          this.renderChatLogsOnly();
          this.scrollChat();
        }, 1500);
      } else {
        window.showToast('You lowered your hand', 'info');
      }
    });

    // Control: Meeting recording
    const recBtn = document.getElementById('btn-record');
    recBtn.addEventListener('click', () => {
      this.isRecording = !this.isRecording;
      recBtn.classList.toggle('active-red', this.isRecording);
      
      const timerContainer = document.getElementById('meet-timer-container');
      if (this.isRecording) {
        timerContainer.style.display = 'flex';
        this.recordingTime = 0;
        this.recordingInterval = setInterval(() => {
          this.recordingTime++;
          const mins = Math.floor(this.recordingTime / 60).toString().padStart(2, '0');
          const secs = (this.recordingTime % 60).toString().padStart(2, '0');
          document.getElementById('meet-timer-val').innerText = `${mins}:${secs}`;
        }, 1000);
        window.showToast('Recording initialized...', 'info');
      } else {
        clearInterval(this.recordingInterval);
        timerContainer.style.display = 'none';
        window.showToast('Recording saved to your local cloud space.', 'success');
      }
    });

    // Control: Sidebar Toggle
    const sideBtn = document.getElementById('btn-sidebar');
    sideBtn.addEventListener('click', () => {
      this.isSidebarOpen = !this.isSidebarOpen;
      sideBtn.classList.toggle('active-primary', this.isSidebarOpen);
      
      const layout = document.querySelector('.meet-main-layout');
      layout.classList.toggle('sidebar-open', this.isSidebarOpen);
      
      if (this.isSidebarOpen) {
        setTimeout(() => this.scrollChat(), 50);
      }
    });

    // Send chat messages
    const chatInput = document.getElementById('meet-chat-input');
    const chatSendBtn = document.getElementById('meet-chat-send-btn');
    
    const sendChatMessage = () => {
      const text = chatInput.value.trim();
      if (!text) return;
      
      chatInput.value = "";
      
      const currentSenderName = authService.getCurrentUser()?.name || "You";

      // Push client message
      this.chatMessages.push({
        sender: currentSenderName,
        isMine: true,
        text: text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      
      this.renderChatLogsOnly();
      this.scrollChat();

      // Trigger automatic responsive replies from Sanskrutii or Ashita
      setTimeout(() => {
        let reply = "";
        let sender = "";
        
        if (text.toLowerCase().includes("code") || text.toLowerCase().includes("error") || text.toLowerCase().includes("bug")) {
          sender = "Sanskrutii Tidke";
          reply = "Let me look at that in the Collaborative Code Editor. Open the tab below so we can fix it!";
        } else if (text.toLowerCase().includes("ai") || text.toLowerCase().includes("model") || text.toLowerCase().includes("python")) {
          sender = "Ashita Wairagade";
          reply = "I've loaded a simple training loop algorithm in the sandbox too. Take a look.";
        } else {
          const uName = authService.getCurrentUser()?.name;
          const fName = uName ? uName.split(' ')[0] : 'friend';
          const replies = [
            `Excellent point, ${fName}. Let's sketch that design component on our whiteboard.`,
            "That completely makes sense. Let's analyze it together.",
            "I'm keeping track of these key takeaways for our summary review!"
          ];
          sender = Math.random() > 0.5 ? "Sanskrutii Tidke" : "Ashita Wairagade";
          reply = replies[Math.floor(Math.random() * replies.length)];
        }

        this.chatMessages.push({
          sender: sender,
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        
        this.renderChatLogsOnly();
        this.scrollChat();
      }, 1400);
    };

    if (chatSendBtn) chatSendBtn.addEventListener('click', sendChatMessage);
    if (chatInput) {
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendChatMessage();
      });
    }

    // Collaborative AI summary compiler
    const generateSummaryBtn = document.getElementById('generate-ai-meet-notes');
    if (generateSummaryBtn) {
      generateSummaryBtn.addEventListener('click', async () => {
        const output = document.getElementById('meet-notes-container');
        output.innerHTML = `
          <div style="text-align:center; padding:1.5rem 0;">
            <p style="color:var(--text-muted); font-size:0.8rem;">Synthesizing meeting logs and files...</p>
          </div>
        `;

        try {
          // Fetch dynamic study guide
          const promptText = "Review notes for CSS layout design and full stack connections.";
          const result = await aiService.generateRoadmap(promptText);
          output.innerHTML = `<div style="text-align:left; font-size:0.75rem;">${this.parseMarkdown(result)}</div>`;
          window.showToast("AI meeting notes successfully compiled!", "success");
        } catch (e) {
          output.innerHTML = `<p style="color:#e06c75; font-size:0.8rem;">AI notes generation failed.</p>`;
        }
      });
    }

    // Leave call button - exits back to dashboard and pops rewards
    const leaveBtn = document.getElementById('leave-call-btn');
    if (leaveBtn) {
      leaveBtn.addEventListener('click', () => {
        // Stop local media streams before leaving
        if (this.localStream) {
          this.localStream.getTracks().forEach(t => t.stop());
          this.localStream = null;
        }
        this.openCompletionModal(user);
      });
    }

    // Whiteboard initializer
    this.initWhiteboard();
    this.scrollChat();
  }

  // Request real camera + mic from the browser
  async startLocalMedia() {
    const videoEl = document.getElementById('my-video-feed');
    const avatarEl = document.getElementById('my-video-avatar');
    const avatarLabel = document.getElementById('my-avatar-label');

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      // Browser doesn't support getUserMedia — show avatar fallback
      if (videoEl) videoEl.style.display = 'none';
      if (avatarEl) avatarEl.style.display = 'flex';
      if (avatarLabel) avatarLabel.textContent = 'Camera unavailable';
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      this.localStream = stream;

      if (videoEl) {
        videoEl.srcObject = stream;
        videoEl.style.display = 'block';
      }
      if (avatarEl) avatarEl.style.display = 'none';

      window.showToast('Camera & microphone connected', 'success');
    } catch (err) {
      console.warn('getUserMedia denied or unavailable:', err.message);
      // Gracefully fall back: show avatar, hide broken video
      if (videoEl) videoEl.style.display = 'none';
      if (avatarEl) avatarEl.style.display = 'flex';
      if (avatarLabel) avatarLabel.textContent = 'Camera Blocked';
      window.showToast('Camera/mic access denied — using avatar', 'info');
    }
  }

  // Chime synth for raising hand
  playHandRaiseChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 note
      osc.frequency.exponentialRampToValueAtTime(880.00, ctx.currentTime + 0.15); // A5 note

      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch (e) {
      console.warn("Audio Context blocked or unsupported in browser.", e);
    }
  }

  initWhiteboard() {
    const canvas = document.getElementById('meet-whiteboard-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 140;

    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    let isDrawing = false;
    let color = "#221d1b";
    ctx.strokeStyle = color;

    const startDrawing = (e) => {
      isDrawing = true;
      ctx.beginPath();
      const rect = canvas.getBoundingClientRect();
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    };

    const draw = (e) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      ctx.stroke();
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    // Bind whiteboard colors
    document.querySelectorAll('.color-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        color = e.target.getAttribute('data-color');
        ctx.strokeStyle = color;
      });
    });

    // Clear whiteboard
    const clearBtn = document.getElementById('clear-meet-whiteboard');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      });
    }
  }

  renderChatLogsOnly() {
    const chatLog = document.getElementById('meet-chat-log');
    if (!chatLog) return;
    const currentUser = authService.getCurrentUser();
    const currentSenderName = currentUser?.name || "You";

    chatLog.innerHTML = this.chatMessages.map(msg => `
      <div class="meet-chat-bubble ${msg.sender === 'System' ? 'system-bubble' : (msg.isMine || msg.sender === currentSenderName) ? 'my-bubble' : 'other-bubble'}">
        <small class="sender-label">${msg.sender}</small>
        <p class="bubble-text">${msg.text}</p>
      </div>
    `).join('');
  }

  scrollChat() {
    const chatLog = document.getElementById('meet-chat-log');
    if (chatLog) {
      chatLog.scrollTop = chatLog.scrollHeight;
    }
  }

  openCompletionModal(user) {
    let backdrop = document.getElementById('completion-modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'completion-modal-backdrop';
      backdrop.className = 'modal-backdrop';
      document.body.appendChild(backdrop);
    }

    backdrop.innerHTML = `
      <div class="modal-container glass-card" style="max-width:440px; text-align:center;">
        <span style="font-size:3.5rem; display:block; margin-bottom:1rem;">🏆</span>
        <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.45rem; margin-bottom:0.75rem;">Swapping Session Concluded!</h3>
        <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1.5rem; line-height:1.4;">
          Your attendance with mentor <strong>Sanskrutii Tidke</strong> and learner <strong>Ashita Wairagade</strong> has rewarded you with:
        </p>
        
        <div style="display:flex; justify-content:center; gap:2rem; margin-bottom:1.5rem;">
          <div style="background:rgba(121,163,195,0.1); padding:0.5rem 1.25rem; border-radius:12px;">
            <span style="display:block; font-size:1.5rem; font-weight:800; color:var(--primary);">+150</span>
            <span style="font-size:0.7rem; color:var(--text-muted); font-weight:700;">XP POINTS</span>
          </div>
          <div style="background:rgba(235,205,183,0.15); padding:0.5rem 1.25rem; border-radius:12px;">
            <span style="display:block; font-size:1.5rem; font-weight:800; color:var(--secondary);">+10</span>
            <span style="font-size:0.7rem; color:var(--text-muted); font-weight:700;">CREDITS</span>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:0.5rem;">
          <button id="meet-modal-cert-btn" class="btn btn-primary">Take Skills Assessment</button>
          <button id="meet-modal-dash-btn" class="btn btn-glass">Return to Dashboard</button>
        </div>
      </div>
    `;

    backdrop.classList.add('active');

    // Grant completion rewards
    user.xp = (user.xp || 100) + 150;
    user.credits = (user.credits || 0) + 10;
    authService.setCurrentUser(user);

    document.getElementById('meet-modal-cert-btn').addEventListener('click', () => {
      backdrop.classList.remove('active');
      window.location.hash = '#assessments';
    });

    document.getElementById('meet-modal-dash-btn').addEventListener('click', () => {
      backdrop.classList.remove('active');
      window.location.hash = '#dashboard';
    });
  }

  async reRenderUI() {
    const mainContent = document.getElementById('main-content');
    const scrollPos = window.scrollY;
    mainContent.innerHTML = await this.render();
    await this.afterRender();
    window.scrollTo(0, scrollPos);
  }

  parseMarkdown(text) {
    if (!text) return '';
    return text
      .replace(/^# (.*$)/gim, '<strong>$1</strong>')
      .replace(/^## (.*$)/gim, '<strong style="color:var(--secondary); display:block; margin-top:0.4rem;">$1</strong>')
      .replace(/^\* (.*$)/gim, '• $1<br>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }
}
