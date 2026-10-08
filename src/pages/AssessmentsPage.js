// Skill Assessments and Certificates Page for SkillVerse
import { authService } from '../services/authService';
import { dbService } from '../services/dbService';

export class AssessmentsPage {
  constructor() {
    this.activeQuiz = null; // Holds the assessment object if taking quiz
    this.quizAnswers = {};  // e.g. { q1: 1, q2: 0 }
    this.quizCompleted = false;
    this.quizScore = 0;
  }

  async render() {
    const user = authService.getCurrentUser();
    if (!user) return '';

    const assessments = await dbService.getAssessments();
    const certificates = await dbService.getCertificates(user.id);

    return `
      <div style="width: 100%;">
        <!-- Header -->
        <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem; background: linear-gradient(135deg, rgba(121, 163, 195, 0.12) 0%, rgba(235, 205, 183, 0.1) 100%);">
          <h1 style="font-family: 'Outfit', sans-serif; font-size: 2.25rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">
            📝 Skill Assessments & Credentials
          </h1>
          <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 700px; line-height: 1.5;">
            Validate your expertise. Completing assessments with a score of <strong>85% or higher</strong> awards you a verified SkillVerse certificate badge added to your resume.
          </p>
        </div>

        <!-- If taking active quiz -->
        ${this.activeQuiz ? this.renderActiveQuiz() : `
          <!-- MAIN LAYOUT: ASSESSMENTS LIST & CERTIFICATE GALLERY -->
          <div class="dashboard-grid">
            
            <!-- List of Available Assessments -->
            <div class="dashboard-widget-lg" style="display:flex; flex-direction:column; gap:1.5rem;">
              <div class="glass-card">
                <h3 style="color:var(--secondary); font-family:'Outfit'; margin-bottom:1.25rem;">Available Skill Tests</h3>
                <div style="display:flex; flex-direction:column; gap:1rem;">
                  ${assessments.map(ass => `
                    <div class="glass-card" style="padding:1.25rem; display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.45); border-color:rgba(121,163,195,0.15);">
                      <div>
                        <div style="display:flex; align-items:center; gap:0.5rem;">
                          <h4 style="font-weight:700; color:var(--secondary); font-size:1.1rem;">${ass.title}</h4>
                          <span class="badge" style="font-size:0.65rem;">${ass.difficulty}</span>
                        </div>
                        <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">
                          Subject: ${ass.skill} | Reward: +${ass.xpReward} XP & Certificate Badge
                        </p>
                      </div>
                      <button class="btn btn-primary start-quiz-btn" data-id="${ass.id}">Start Test</button>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Certificate Diplomas Gallery -->
            <div class="dashboard-widget-sm">
              <div class="glass-card">
                <h3 style="color:var(--secondary); font-family:'Outfit'; margin-bottom:1.25rem;">📜 Verified Diplomas</h3>
                <div style="display:flex; flex-direction:column; gap:1.25rem;">
                  ${certificates.length === 0 ? `
                    <p style="font-size:0.85rem; color:var(--text-muted); text-align:center; padding:2rem 0;">No diplomas earned yet. Pass a test to unlock.</p>
                  ` : certificates.map(c => `
                    <!-- Diploma card glass design -->
                    <div class="glass-card" style="padding:1.5rem; text-align:center; border:2px solid rgba(235, 205, 183, 0.4); background:rgba(255,255,255,0.9); box-shadow:0 10px 30px rgba(149,118,98,0.1);">
                      <div style="font-size:2rem; margin-bottom:0.5rem;">🎓</div>
                      <h4 style="font-family:'Outfit'; color:var(--secondary); font-size:1rem; font-weight:700; margin-bottom:0.25rem;">
                        ${c.skill}
                      </h4>
                      <div style="font-size:0.75rem; color:var(--primary); font-weight:600; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.75rem;">
                        Expert Certificate
                      </div>
                      
                      <!-- Diploma parameters details -->
                      <div style="font-size:0.7rem; color:var(--text-muted); border-top:1px dashed rgba(0,0,0,0.08); padding-top:0.75rem; display:flex; flex-direction:column; gap:0.25rem;">
                        <div>Recipient: <strong>${c.userName}</strong></div>
                        <div>Graduation score: <strong>${c.score}%</strong></div>
                        <div>Credential: <strong>${c.credentialId}</strong></div>
                        <div>Verified Date: ${c.date}</div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

          </div>
        `}
      </div>
    `;
  }

  renderActiveQuiz() {
    return `
      <div class="glass-card" style="max-width:700px; margin: 0 auto; background:#fff; padding:2.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(0,0,0,0.08); padding-bottom:1rem; margin-bottom:1.5rem;">
          <h2 style="font-family:'Outfit'; color:var(--secondary); font-size:1.35rem; font-weight:700;">
            📝 Test: ${this.activeQuiz.title}
          </h2>
          <button id="cancel-quiz-btn" class="btn btn-glass" style="padding:4px 10px; font-size:0.8rem;">Quit Exam</button>
        </div>

        <form id="quiz-form" style="display:flex; flex-direction:column; gap:2rem;">
          ${this.activeQuiz.questions.map((q, idx) => `
            <div>
              <h4 style="font-weight:700; color:var(--text-dark); margin-bottom:0.75rem; font-size:1.05rem;">
                Question ${idx + 1}: ${q.question}
              </h4>
              <div style="display:flex; flex-direction:column; gap:0.75rem;">
                ${q.options.map((opt, optIdx) => `
                  <label class="quiz-option-label" style="display:flex; align-items:center; gap:0.75rem; padding:0.75rem 1rem; border:1px solid rgba(121,163,195,0.25); border-radius:var(--radius-md); cursor:pointer; transition:all var(--transition-fast);">
                    <input type="radio" name="question_${q.id}" value="${optIdx}" required style="accent-color:var(--primary);" />
                    <span style="font-size:0.9rem; color:var(--text-dark);">${opt}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `).join('')}

          <button type="submit" class="btn btn-primary" style="width:100%; padding:0.9rem; margin-top:1rem;">
            Submit Answers for AI Evaluation
          </button>
        </form>
      </div>

      <style>
        .quiz-option-label:hover {
          background: rgba(121,163,195,0.08);
          border-color: var(--primary);
        }
        /* Highlight option if child input is checked */
        .quiz-option-label:has(input:checked) {
          background: rgba(121,163,195,0.15);
          border-color: var(--primary);
          box-shadow: 0 0 0 1px var(--primary);
        }
      </style>
    `;
  }

  async afterRender() {
    // Start Quiz triggers
    document.querySelectorAll('.start-quiz-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.getAttribute('data-id');
        const list = await dbService.getAssessments();
        this.activeQuiz = list.find(a => a.id === id);
        this.reRenderUI();
      });
    });

    // Cancel Quiz
    const cancelBtn = document.getElementById('cancel-quiz-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        this.activeQuiz = null;
        this.reRenderUI();
      });
    }

    // Submit Quiz Form
    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
      quizForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const user = authService.getCurrentUser();
        let correctCount = 0;
        
        this.activeQuiz.questions.forEach((q) => {
          const selected = quizForm.querySelector(`input[name="question_${q.id}"]:checked`).value;
          if (parseInt(selected) === q.correct) {
            correctCount++;
          }
        });

        const scorePercentage = Math.round((correctCount / this.activeQuiz.questions.length) * 100);
        this.activeQuiz = null;
        
        if (scorePercentage >= 85) {
          // Award XP, Credits and Certificate
          user.xp = (user.xp || 100) + 300;
          user.credits = (user.credits || 0) + 10;
          
          await dbService.createCertificate({
            userId: user.id,
            userName: user.name,
            skill: this.activeQuiz?.skill || "Technology",
            score: scorePercentage
          });
          
          authService.setCurrentUser(user);
          
          this.openAchievementModal(scorePercentage);
        } else {
          window.showToast(`Score: ${scorePercentage}%. Minimum 85% required to earn credential. Try again!`, "error");
          this.reRenderUI();
        }
      });
    }
  }

  openAchievementModal(score) {
    let backdrop = document.getElementById('achievement-modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'achievement-modal-backdrop';
      backdrop.className = 'modal-backdrop';
      document.body.appendChild(backdrop);
    }

    backdrop.innerHTML = `
      <div class="modal-container glass-card" style="max-width:450px; text-align:center; padding:2.5rem;">
        <span style="font-size:3.5rem; display:block; margin-bottom:1rem;">🏆</span>
        <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.6rem; margin-bottom:0.75rem;">AI Evaluation Passed!</h3>
        <h4 style="color:var(--primary); font-family:'Outfit'; font-size:1.25rem; font-weight:700; margin-bottom:1rem;">Score: ${score}%</h4>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.5rem; line-height:1.5;">
          Congratulations! You completed the assessment exam. A digital diploma has been registered to your profile resume, and you have been rewarded with <strong>+300 XP</strong> and <strong>+10 Skill Credits</strong>!
        </p>
        <button id="close-achievement-modal" class="btn btn-primary" style="width:100%;">View Credentials</button>
      </div>
    `;

    backdrop.classList.add('active');

    const closeBtn = document.getElementById('close-achievement-modal');
    closeBtn.addEventListener('click', () => {
      backdrop.classList.remove('active');
      this.reRenderUI();
    });
  }

  async reRenderUI() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = await this.render();
    await this.afterRender();
  }
}
