// AI Career Coach Page for SkillVerse
import { authService } from '../services/authService';
import { aiService } from '../services/aiService';

export class AIAssistantPage {
  constructor() {
    this.activeSubTab = "roadmap"; // "roadmap" or "portfolio" or "interview"
    this.roadmapSkill = "Web Development";
    this.interviewRole = "Frontend Engineer";
    this.interviewSkill = "JavaScript";
    this.interviewIndex = 1;
    this.currentOutput = "";
    this.isLoading = false;
  }

  async render() {
    const user = authService.getCurrentUser();
    if (!user) return '';

    return `
      <div style="width: 100%;">
        <!-- Header -->
        <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem; background: linear-gradient(135deg, rgba(121, 163, 195, 0.12) 0%, rgba(235, 205, 183, 0.1) 100%);">
          <h1 style="font-family: 'Outfit', sans-serif; font-size: 2.25rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">
            🤖 AI Career Coach & Assistant
          </h1>
          <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 700px; line-height: 1.5;">
            Unlock personalized study blueprints, code critiques, CV analyses, and automated technical mock interview sessions powered by Gemini Core models.
          </p>
        </div>

        <!-- Assistant Workspace layout -->
        <div class="dashboard-grid">
          
          <!-- LEFT SIDEBAR CONTROL PANEL -->
          <div class="dashboard-widget-sm">
            <div class="glass-card" style="display:flex; flex-direction:column; gap:0.5rem; background:rgba(255,255,255,0.5);">
              
              <button class="assistant-tab ${this.activeSubTab === 'roadmap' ? 'active' : ''}" data-tab="roadmap" style="display:flex; align-items:center; gap:0.75rem; width:100%; border:none; background:none; padding:0.85rem; text-align:left; cursor:pointer; font-weight:600; border-radius:var(--radius-md);">
                <span>🗺️</span>
                <span>Generate Skill Roadmap</span>
              </button>
              
              <button class="assistant-tab ${this.activeSubTab === 'portfolio' ? 'active' : ''}" data-tab="portfolio" style="display:flex; align-items:center; gap:0.75rem; width:100%; border:none; background:none; padding:0.85rem; text-align:left; cursor:pointer; font-weight:600; border-radius:var(--radius-md);">
                <span>📊</span>
                <span>Review Portfolio Strength</span>
              </button>

              <button class="assistant-tab ${this.activeSubTab === 'interview' ? 'active' : ''}" data-tab="interview" style="display:flex; align-items:center; gap:0.75rem; width:100%; border:none; background:none; padding:0.85rem; text-align:left; cursor:pointer; font-weight:600; border-radius:var(--radius-md);">
                <span>🎙️</span>
                <span>AI Mock Interview</span>
              </button>

            </div>
          </div>

          <!-- RIGHT DETAIL PANEL -->
          <div class="dashboard-widget-lg">
            <div class="glass-card" style="min-height:420px; display:flex; flex-direction:column; justify-content:space-between; background:#fff;">
              
              <!-- Tab 1: Roadmap Configuration -->
              <div id="panel-roadmap" style="display:${this.activeSubTab === 'roadmap' ? 'block' : 'none'};">
                <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.35rem; margin-bottom:1rem;">🗺️ Custom Skill Roadmap Creator</h3>
                <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1.5rem; line-height:1.4;">
                  Enter any skill (e.g. Next.js, Sketching, Quantum Computing, Chess Strategy). The AI will compose a detailed syllabus, milestone projects, and recommended swap resources.
                </p>
                <div style="display:flex; gap:0.75rem;" class="no-print">
                  <input type="text" id="roadmap-topic-input" class="glass-input" placeholder="e.g. Docker & Kubernetes" value="${this.roadmapSkill}" />
                  <button id="generate-roadmap-btn" class="btn btn-primary" style="flex-shrink:0;">Compose Roadmap</button>
                </div>
              </div>

              <!-- Tab 2: Portfolio Critique -->
              <div id="panel-portfolio" style="display:${this.activeSubTab === 'portfolio' ? 'block' : 'none'};">
                <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.35rem; margin-bottom:1rem;">📊 Automated Resume & Portfolio Review</h3>
                <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1.5rem; line-height:1.4;">
                  SkillVerse AI scans your qualifications, courses, and credentials to calculate a portfolio strength metric and provides recommendations to attract exchange bookings.
                </p>
                <button id="run-portfolio-review-btn" class="btn btn-primary" class="no-print">Analyze My Resume Profile</button>
              </div>

              <!-- Tab 3: Mock Interview -->
              <div id="panel-interview" style="display:${this.activeSubTab === 'interview' ? 'block' : 'none'};">
                <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.35rem; margin-bottom:1rem;">🎙️ Technical Interview Simulator</h3>
                <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1.5rem; line-height:1.4;">
                  Practice real-world scenario interview questions. Provide your text or coding response below and click Evaluate for scoring critique!
                </p>
                <div style="display:flex; gap:0.5rem; margin-bottom:1.5rem;" class="no-print">
                  <input type="text" id="interview-role-input" class="glass-input" placeholder="Role (e.g. Python Developer)" value="${this.interviewRole}" style="flex:1;" />
                  <input type="text" id="interview-skill-input" class="glass-input" placeholder="Skill Focus (e.g. Django)" value="${this.interviewSkill}" style="flex:1;" />
                  <button id="trigger-interview-btn" class="btn btn-primary">Start Interview</button>
                </div>
                
                <!-- Interview Answer Box (Conditional display) -->
                <div id="interview-eval-box" style="display:none; flex-direction:column; gap:1rem; margin-top:1.5rem;" class="no-print">
                  <label style="display:block; font-size:0.8rem; font-weight:700;">Submit Your Practice Answer</label>
                  <textarea id="interview-answer-input" class="glass-textarea" rows="4" placeholder="Type your detailed explanation or paste code block here..."></textarea>
                  <button id="submit-interview-answer-btn" class="btn btn-accent" style="width:100%;">Evaluate Answer</button>
                </div>
              </div>

              <!-- AI Output Viewer Area -->
              <div id="ai-response-container" style="margin-top:2rem; border-top:1px solid rgba(0,0,0,0.06); padding-top:1.5rem; flex:1;">
                ${this.isLoading ? `
                  <div style="padding:3rem 0; text-align:center;">
                    <div class="skeleton skeleton-title" style="margin:0 auto 1.25rem;"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                    <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.75rem;">AI Coach is compiling details...</p>
                  </div>
                ` : this.currentOutput ? `
                  <div class="glass-card" style="padding:1.5rem; background:rgba(121,163,195,0.04); text-align:left; max-height:400px; overflow-y:auto; font-size:0.9rem; line-height:1.6;">
                    ${this.parseMarkdown(this.currentOutput)}
                  </div>
                ` : `
                  <div style="text-align:center; padding:4rem 0; color:var(--text-muted); font-style:italic;">
                    Select an activity in the panel to receive AI insights.
                  </div>
                `}
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>
        .assistant-tab {
          transition: all var(--transition-fast);
          color: var(--text-muted);
        }
        .assistant-tab:hover {
          background: rgba(121, 163, 195, 0.15);
          color: var(--secondary);
        }
        .assistant-tab.active {
          background: var(--primary);
          color: #fff;
        }
      </style>
    `;
  }

  async afterRender() {
    const user = authService.getCurrentUser();
    if (!user) return;

    // Sub-tab toggling
    document.querySelectorAll('.assistant-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const selected = e.target.closest('.assistant-tab').getAttribute('data-tab');
        this.activeSubTab = selected;
        this.currentOutput = "";
        this.reRenderUI();
      });
    });

    // Roadmap submit
    const generateRoadmapBtn = document.getElementById('generate-roadmap-btn');
    if (generateRoadmapBtn) {
      generateRoadmapBtn.addEventListener('click', async () => {
        const input = document.getElementById('roadmap-topic-input').value.trim();
        if (!input) return;

        this.roadmapSkill = input;
        this.isLoading = true;
        this.reRenderUI();

        try {
          this.currentOutput = await aiService.generateRoadmap(input);
        } catch (e) {
          this.currentOutput = "### Error\nFailed to generate roadmap.";
        }
        this.isLoading = false;
        this.reRenderUI();
      });
    }

    // Portfolio Critique submit
    const runPortfolioBtn = document.getElementById('run-portfolio-review-btn');
    if (runPortfolioBtn) {
      runPortfolioBtn.addEventListener('click', async () => {
        this.isLoading = true;
        this.reRenderUI();

        try {
          this.currentOutput = await aiService.reviewPortfolio(user);
        } catch (e) {
          this.currentOutput = "### Error\nFailed to evaluate portfolio.";
        }
        this.isLoading = false;
        this.reRenderUI();
      });
    }

    // Mock Interview Q&A trigger
    const startInterviewBtn = document.getElementById('trigger-interview-btn');
    if (startInterviewBtn) {
      startInterviewBtn.addEventListener('click', async () => {
        const role = document.getElementById('interview-role-input').value.trim();
        const skill = document.getElementById('interview-skill-input').value.trim();

        if (!role || !skill) {
          window.showToast("Please provide both Role and Skill Focus.", "error");
          return;
        }

        this.interviewRole = role;
        this.interviewSkill = skill;
        this.isLoading = true;
        this.reRenderUI();

        try {
          this.currentOutput = await aiService.generateInterviewQuestion(role, skill, this.interviewIndex);
          // Show answer submit container
          setTimeout(() => {
            const evalBox = document.getElementById('interview-eval-box');
            if (evalBox) evalBox.style.display = 'flex';
          }, 100);
        } catch (e) {
          this.currentOutput = "### Error\nFailed to generate question.";
        }
        this.isLoading = false;
        this.reRenderUI();
      });
    }

    // Submit mock answer evaluation
    const submitAnswerBtn = document.getElementById('submit-interview-answer-btn');
    if (submitAnswerBtn) {
      submitAnswerBtn.addEventListener('click', async () => {
        const answerText = document.getElementById('interview-answer-input').value.trim();
        if (!answerText) {
          window.showToast("Please write an answer to evaluate.", "error");
          return;
        }

        this.isLoading = true;
        this.reRenderUI();

        try {
          this.currentOutput = await aiService.evaluateChallenge(answerText, `Technical Interview Q: for ${this.interviewRole} - ${this.interviewSkill}`);
          
          // Reward user for answering
          user.xp = (user.xp || 100) + 150;
          user.credits = (user.credits || 0) + 2;
          authService.setCurrentUser(user);
          window.showToast("Evaluation complete! Earned +150 XP, +2 Credits.", "success");
        } catch (e) {
          this.currentOutput = "### Error\nFailed to evaluate answer.";
        }
        
        this.isLoading = false;
        this.reRenderUI();
      });
    }
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
    // Basic Markdown Parser
    return text
      .replace(/^# (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h4 style="margin-top:1rem; color:var(--secondary);">$1</h4>')
      .replace(/^### (.*$)/gim, '<h5 style="margin-top:0.75rem; color:var(--secondary);">$1</h5>')
      .replace(/^\* (.*$)/gim, '<li>$1</li>')
      .replace(/> \[(.*)\]\n> (.*)/gim, '<blockquote style="border-left:3px solid var(--primary); padding-left:0.5rem; font-style:italic;">$2</blockquote>')
      .replace(/\`\`\`([a-zA-Z]*)\n([\s\S]*?)\`\`\`/gm, '<pre style="background:#221d1b; color:#fff; padding:1rem; border-radius:8px; font-family:monospace; overflow-x:auto;"><code>$2</code></pre>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  }
}
