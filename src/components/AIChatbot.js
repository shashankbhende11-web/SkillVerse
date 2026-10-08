// Floating AI Chatbot Component for SkillVerse
import { aiService } from '../services/aiService';
import { authService } from '../services/authService';

export class AIChatbot {
  constructor() {
    this.isOpen = false;
    this.messages = [
      { sender: "AI", text: "Hello! I am your SkillVerse AI Assistant. How can I help you swap skills, find mentors, or build your portfolio today?", timestamp: new Date() }
    ];
    this.isTyping = false;
    this.container = null;
  }

  render() {
    // Create the container element if it doesn't exist
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'global-ai-chatbot';
      this.container.style.position = 'fixed';
      this.container.style.bottom = '2rem';
      this.container.style.right = '2rem';
      this.container.style.zIndex = '9999';
      this.container.style.fontFamily = "'Outfit', sans-serif";
      document.body.appendChild(this.container);
    }

    this.container.innerHTML = `
      <!-- Chatbot Toggle Floating Button -->
      <button id="chatbot-toggle-btn" class="chatbot-bubble" aria-label="Open AI Assistant">
        <span class="bubble-icon">💬</span>
        <span class="bubble-pulse"></span>
      </button>

      <!-- Chatbot Panel Container -->
      <div id="chatbot-panel" class="chatbot-panel-card ${this.isOpen ? 'open' : ''}">
        <!-- Panel Header -->
        <div class="chatbot-header">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <div class="bot-avatar">🤖</div>
            <div>
              <h4 style="margin:0; font-size:1rem; font-weight:700; color:var(--text-light);">SkillVerse AI Coach</h4>
              <span style="font-size:0.7rem; color:rgba(255,255,255,0.7); display:flex; align-items:center; gap:0.25rem;">
                <span class="online-indicator"></span> Online
              </span>
            </div>
          </div>
          <button id="chatbot-close-btn" style="background:none; border:none; color:#fff; font-size:1.25rem; cursor:pointer;">&times;</button>
        </div>

        <!-- Panel Body Messages -->
        <div id="chatbot-messages" class="chatbot-messages-body">
          ${this.messages.map(msg => `
            <div class="chat-bubble-row ${msg.sender === 'User' ? 'user-row' : 'bot-row'}">
              <div class="chat-bubble">
                ${this.parseMessage(msg.text)}
              </div>
              <small class="chat-bubble-time">${this.formatTime(msg.timestamp)}</small>
            </div>
          `).join('')}
          
          ${this.isTyping ? `
            <div class="chat-bubble-row bot-row" id="chatbot-typing">
              <div class="chat-bubble typing-bubble">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Suggestion Chips -->
        <div class="chatbot-suggestions">
          <button class="suggestion-chip" data-query="How does skill swap work?">🤝 How does swapping work?</button>
          <button class="suggestion-chip" data-query="Who are Sanskrutii Tidke and Ashita Wairagade?">👥 View mentors</button>
          <button class="suggestion-chip" data-query="Is mentorship really free?">🪙 Is it free?</button>
        </div>

        <!-- Panel Footer Input -->
        <div class="chatbot-footer">
          <input type="text" id="chatbot-input" placeholder="Type a message..." autocomplete="off" />
          <button id="chatbot-send-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>

      <style>
        .chatbot-bubble {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          border: none;
          box-shadow: 0 10px 30px rgba(121, 163, 195, 0.4);
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .chatbot-bubble:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 35px rgba(121, 163, 195, 0.5);
        }
        .bubble-icon {
          font-size: 1.6rem;
          color: #fff;
        }
        .bubble-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--primary);
          opacity: 0.4;
          z-index: -1;
          animation: pulse-ring 2s infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }

        .chatbot-panel-card {
          position: absolute;
          bottom: 75px;
          right: 0;
          width: 360px;
          height: 480px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .chatbot-panel-card.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .chatbot-header {
          background: linear-gradient(135deg, var(--secondary) 0%, #302623 100%);
          padding: 1rem;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .bot-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
        .online-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4cd964;
          display: inline-block;
        }

        .chatbot-messages-body {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: rgba(255,255,255,0.3);
        }

        .chat-bubble-row {
          display: flex;
          flex-direction: column;
          max-width: 80%;
        }
        .bot-row {
          align-self: flex-start;
        }
        .user-row {
          align-self: flex-end;
          align-items: flex-end;
        }

        .chat-bubble {
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          line-height: 1.4;
          word-break: break-word;
        }
        .bot-row .chat-bubble {
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-dark);
          border-bottom-left-radius: 2px;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .user-row .chat-bubble {
          background: var(--primary);
          color: #fff;
          border-bottom-right-radius: 2px;
        }
        .chat-bubble-time {
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
          padding: 0 0.25rem;
        }

        .chatbot-suggestions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.4);
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .suggestion-chip {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(121, 163, 195, 0.25);
          border-radius: 12px;
          padding: 0.3rem 0.6rem;
          font-size: 0.75rem;
          cursor: pointer;
          color: var(--text-muted);
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .suggestion-chip:hover {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
        }

        .chatbot-footer {
          display: flex;
          padding: 0.75rem 1rem;
          background: #fff;
          border-top: 1px solid rgba(0,0,0,0.05);
          align-items: center;
          gap: 0.5rem;
        }
        #chatbot-input {
          flex: 1;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: var(--radius-sm);
          padding: 0.5rem 0.75rem;
          font-size: 0.85rem;
          outline: none;
          transition: border-color 0.2s ease;
          font-family: inherit;
        }
        #chatbot-input:focus {
          border-color: var(--primary);
        }
        #chatbot-send-btn {
          background: var(--primary);
          color: #fff;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        #chatbot-send-btn:hover {
          transform: scale(1.05);
        }

        /* Typing Indicator Bubble */
        .typing-bubble {
          display: flex;
          gap: 3px;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 0.75rem;
        }
        .typing-bubble .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-muted);
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .typing-bubble .dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-bubble .dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }
      </style>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const toggleBtn = this.container.querySelector('#chatbot-toggle-btn');
    const closeBtn = this.container.querySelector('#chatbot-close-btn');
    const sendBtn = this.container.querySelector('#chatbot-send-btn');
    const input = this.container.querySelector('#chatbot-input');
    const panel = this.container.querySelector('#chatbot-panel');

    toggleBtn.addEventListener('click', () => {
      this.isOpen = !this.isOpen;
      panel.classList.toggle('open', this.isOpen);
      if (this.isOpen) {
        setTimeout(() => this.scrollMessages(), 100);
        input.focus();
      }
    });

    closeBtn.addEventListener('click', () => {
      this.isOpen = false;
      panel.classList.remove('open');
    });

    // Send on click
    sendBtn.addEventListener('click', () => this.handleSendMessage());

    // Send on enter key
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.handleSendMessage();
      }
    });

    // Suggestion chips
    this.container.querySelectorAll('.suggestion-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const query = e.target.getAttribute('data-query');
        this.sendQuery(query);
      });
    });
  }

  async sendQuery(text) {
    if (!text.trim()) return;
    
    // Add user message
    this.messages.push({ sender: "User", text, timestamp: new Date() });
    this.renderMessagesOnly();
    this.scrollMessages();

    // Trigger typing indicator
    this.isTyping = true;
    this.renderMessagesOnly();
    this.scrollMessages();

    // Get response from AI Service
    let responseText = "";
    try {
      if (aiService.hasLiveAI()) {
        responseText = await aiService.callGemini(text);
      } else {
        responseText = this.generateSimulatedReply(text);
      }
    } catch (e) {
      responseText = "I'm sorry, I encountered a temporary connection issue. Please feel free to ask me another question.";
    }

    // Add AI message after a short realistic delay
    setTimeout(() => {
      this.isTyping = false;
      this.messages.push({ sender: "AI", text: responseText, timestamp: new Date() });
      this.renderMessagesOnly();
      this.scrollMessages();
    }, 800);
  }

  handleSendMessage() {
    const input = this.container.querySelector('#chatbot-input');
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    this.sendQuery(text);
  }

  generateSimulatedReply(query) {
    const q = query.toLowerCase();
    
    if (q.includes("swap") || q.includes("work")) {
      return "**Skill Swapping** on SkillVerse is direct and mutual! Here is how it works:\n\n1. Browse/Search mentors on the **Discovery** tab.\n2. Request a swap. You choose a skill you can teach them in exchange for a skill they teach.\n3. Alternatively, schedule for **0 Credits** if you just want general mentorship.\n4. Accept requests in your **Dashboard** and meet in our interactive collaborative **Learning Room**!";
    }
    
    if (q.includes("mentor") || q.includes("sanskrutii") || q.includes("tidke") || q.includes("ashita") || q.includes("wairagade")) {
      return "We have outstanding top-tier mentors on SkillVerse!\n\n- **Sanskrutii Tidke**: Expert in Full Stack Web Development, Frontend, and Cloud DevOps. Formerly a Tech Lead at Stripe.\n- **Ashita Wairagade**: AI Research Scientist specializing in Deep Learning, Python, and neural networks.\n\nYou can connect with either of them directly on the **Discovery** panel!";
    }

    if (q.includes("free") || q.includes("charge") || q.includes("credit")) {
      return "Yes! **Mentorship on SkillVerse is 100% free of charge**. All mentors offer their expertise for 0 credits. You can teach others to earn credits or swap skills directly without spending any money!";
    }

    if (q.includes("my profile") || q.includes("who am i") || q.includes("my name")) {
      const user = authService.getCurrentUser();
      return `Your name is registered as **${user ? user.name : 'Learner'}**. You are configured as a **${user ? user.role : 'Both'}** user, which means you can swap and teach. You currently have **${user ? user.credits : 75} Skill Credits** and **${user ? user.xp : 1820} XP**!`;
    }

    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return "Hi there! I am ready to guide you. Try asking about our mentors, how skill swaps work, or how to schedule free live sessions!";
    }

    // Default reply
    return "That's an interesting question! I am your SkillVerse coach. You can ask me to help build your professional profile, generate a custom learning roadmap, or search for free skill-swaps with Sanskrutii or Ashita.";
  }

  renderMessagesOnly() {
    const msgContainer = this.container.querySelector('#chatbot-messages');
    if (!msgContainer) return;

    msgContainer.innerHTML = `
      ${this.messages.map(msg => `
        <div class="chat-bubble-row ${msg.sender === 'User' ? 'user-row' : 'bot-row'}">
          <div class="chat-bubble">
            ${this.parseMessage(msg.text)}
          </div>
          <small class="chat-bubble-time">${this.formatTime(msg.timestamp)}</small>
        </div>
      `).join('')}
      
      ${this.isTyping ? `
        <div class="chat-bubble-row bot-row" id="chatbot-typing">
          <div class="chat-bubble typing-bubble">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      ` : ''}
    `;
  }

  scrollMessages() {
    const msgContainer = this.container.querySelector('#chatbot-messages');
    if (msgContainer) {
      msgContainer.scrollTop = msgContainer.scrollHeight;
    }
  }

  formatTime(date) {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  parseMessage(text) {
    if (!text) return '';
    // Formats linebreaks and basic bold markdowns
    return text
      .replace(/\n/g, '<br>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  }

  destroy() {
    if (this.container) {
      this.container.remove();
      this.container = null;
    }
  }
}
