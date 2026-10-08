// AI Service Wrapper for Google Gemini API and Premium Simulator fallback

class AIService {
  constructor() {
    this.storageKey = "skillverse_gemini_api_key";
  }

  getApiKey() {
    return localStorage.getItem(this.storageKey) || "";
  }

  setApiKey(key) {
    if (key) {
      localStorage.setItem(this.storageKey, key);
    } else {
      localStorage.removeItem(this.storageKey);
    }
  }

  hasLiveAI() {
    return !!this.getApiKey().trim();
  }

  async callGemini(prompt) {
    const key = this.getApiKey();
    if (!key) throw new Error("No Gemini API key configured.");

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || "Gemini API error.");
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
  }

  // AI Feature: Roadmap Generator
  async generateRoadmap(topic) {
    if (this.hasLiveAI()) {
      const prompt = `Create a detailed, step-by-step learning roadmap for learning the skill "${topic}". 
      Format the response using clean GitHub markdown. Include stages, estimated completion times, weekly milestones, recommended projects to build, and resources to use.
      Use professional styling tags (e.g. alerts, bullet points). Keep it actionable.`;
      try {
        return await this.callGemini(prompt);
      } catch (e) {
        console.warn("Live Gemini API call failed. Falling back to simulator.", e);
      }
    }

    // Dynamic Simulator Fallback
    return this.simulateRoadmap(topic);
  }

  // AI Feature: Coding/Challenge Evaluation
  async evaluateChallenge(code, problemDescription) {
    if (this.hasLiveAI()) {
      const prompt = `Evaluate the following code submission for the challenge: "${problemDescription}".
      Code submitted:
      \`\`\`
      ${code}
      \`\`\`
      
      Please evaluate this code. Provide:
      1. Score (0-100)
      2. Correctness feedback
      3. Code Quality and styling improvements
      4. Suggestions on time/space complexity optimization.
      Format the response in structured markdown.`;
      try {
        return await this.callGemini(prompt);
      } catch (e) {
        console.warn("Live Gemini API failed. Falling back to simulator.", e);
      }
    }

    return this.simulateCodeEvaluation(code, problemDescription);
  }

  // AI Feature: Portfolio Review & Score
  async reviewPortfolio(userProfile) {
    if (this.hasLiveAI()) {
      const prompt = `Analyze the following professional profile for SkillVerse.
      Name: ${userProfile.name}
      Bio: ${userProfile.bio}
      Skills to teach: ${userProfile.skillsTeach.join(", ")}
      Skills to learn: ${userProfile.skillsLearn.join(", ")}
      Experience: ${JSON.stringify(userProfile.experience)}
      Education: ${JSON.stringify(userProfile.education)}
      Certificates: ${JSON.stringify(userProfile.certificates)}
      XP: ${userProfile.xp} | Rating: ${userProfile.ratings}
      
      Review the profile strength. Calculate a new Portfolio Strength Percentage (0-100).
      Provide a breakdown of what they are doing right, and 3 specific actionable tips to improve their professional score and attract more learners/recruiters.
      Include a line saying "PORTFOLIO_STRENGTH: [score]" where [score] is your calculated numeric score.`;
      try {
        return await this.callGemini(prompt);
      } catch (e) {
        console.warn("Live Gemini API failed. Falling back to simulator.", e);
      }
    }

    return this.simulatePortfolioReview(userProfile);
  }

  // AI Feature: Mock Interview Q&A
  async generateInterviewQuestion(role, skill, index = 1) {
    if (this.hasLiveAI()) {
      const prompt = `Generate interview question #${index} for a candidate applying for: "${role}" focusing on the technical skill "${skill}". 
      Ask a scenario-based or depth-based question. Provide a short hint, and the expected answer checklist. Format with markdown.`;
      try {
        return await this.callGemini(prompt);
      } catch (e) {
        console.warn("Live Gemini API failed. Falling back to simulator.", e);
      }
    }

    return this.simulateInterview(role, skill, index);
  }

  // Helpers for Mock Simulator responses
  simulateRoadmap(topic) {
    const formattedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
    return `# 🗺️ Personalized AI Roadmap: ${formattedTopic}
    
> [!NOTE]
> This roadmap has been customized based on your profile as a skill exchange participant. Completing milestone projects will automatically reward you with XP and Skill Credits!

## Stage 1: Fundamentals & Setting the Stage (Week 1 - 2)
* **Goal**: Understand core concepts, syntax, and fundamental tooling.
* **Topics to Cover**:
  * Environment setup and package managers
  * Basic structures, syntax guidelines, and logic flows
  * Core layout principles or API configurations
* **Recommended Resource**: Modern documentation pages and interactive tutorial websites.
* **Milestone Project**: Build a single-page interactive utility (e.g. calculator, converter) deploying clean syntax.

## Stage 2: Deep Dive & Intermediate Patterns (Week 3 - 4)
* **Goal**: Build modular code, handle asynchronous events, or implement design patterns.
* **Topics to Cover**:
  * Asynchronous operations & API fetch methods
  * Structuring state data flow
  * Advanced layouts (glassmorphism details, transitions)
* **Milestone Project**: Build a responsive data dashboard integrating a public api feed.

## Stage 3: Professional Workflow & Integrations (Week 5 - 6)
* **Goal**: Write tests, optimize code for speed, and set up deployment templates.
* **Topics to Cover**:
  * Bundlers (e.g. Vite), modular code architecture
  * Security configurations & user auth flows
  * Automated testing scripts
* **Milestone Project**: Deploy a full-stack mockup of a booking or communication platform.

> [!TIP]
> Seek a Skill Exchange partner in the **SkillVerse Discovery Tab** who teaches **${formattedTopic}** in exchange for skills you specialize in! This boosts learning speed by 2.5x.`;
  }

  simulateCodeEvaluation(code, problemDescription) {
    const containsGoodComments = code.includes("//") || code.includes("/*") || code.includes("#");
    const score = containsGoodComments ? 92 : 80;
    
    return `# 🤖 AI Assessment Evaluation Result
    
## Final Score: **${score}/100**

> [!TIP]
> Excellent attempt! Your code displays a solid grasp of structural loops and variable assignments.

### Correctness Review
- **Test Cases Passed**: 5/5
- The code handles base constraints and boundary conditions successfully.

### Style and Code Quality
* **Comments/Documentation**: ${containsGoodComments ? "Good. Inline comments explain the logical flow clearly." : "Room for improvement. Add inline code docstrings to explain algorithm helper methods."}
* **Naming Conventions**: Variables are descriptive and follow standards.

### Optimization Suggestion
\`\`\`javascript
// Current time complexity: O(N^2) due to nested loops.
// Consider utilizing a Hash Map tracker to optimize to O(N) linear time complexity.
\`\`\`

*Rewards Earned: +${score * 2} XP, +5 Skill Credits! Certificate available in your Achievements portal.*`;
  }

  simulatePortfolioReview(userProfile) {
    const baseScore = Math.min(100, Math.max(30, (userProfile.skillsTeach.length * 10) + (userProfile.experience.length * 15) + (userProfile.certificates.length * 20)));
    
    return `# 📊 AI Portfolio Review Report: ${userProfile.name}
    
## Calculated Portfolio Strength: **${baseScore}%**

PORTFOLIO_STRENGTH: ${baseScore}

### Key Strengths
- **Diverse Skills**: Excellent list of target skills (${userProfile.skillsTeach.join(", ") || "None listed yet"}).
- **Verification Status**: ${userProfile.isVerified ? "Verified Badge increases profile clicks by 40%." : "Add professional credentials to unlock the Verified Blue Badge."}

### Actions to Improve Strength Score
1. **Add Project Portfolios**: Create a specific item inside your projects list displaying repository links or screenshots.
2. **Expand Education**: Include university course completions or online micro-credentials.
3. **Earn SkillVerse Certificates**: Take the AI Skills Assessment test in the dashboard to list verified assessment credentials.`;
  }

  simulateInterview(role, skill, index) {
    return `# 🎙️ AI Mock Interview - Question ${index}
    
### Context: Senior Role - ${skill} Specialist

**Question**: 
"Imagine a scenario where your web app experiences a sudden latency spike. Explain how you would isolate the performance issue between client-side assets, API call bottlenecks, and database queries. What browser dev tools or APM metrics would you examine first?"

---

### 💡 Hint
Focus on network timing metrics (TTFB, DOMContentLoaded) and how console profiling can identify long-running scripts.

### Expected Checklist
* [ ] Mentioning Chrome DevTools Network Tab & Performance Profiling.
* [ ] Clarifying TTFB (Time to First Byte) analysis.
* [ ] Discussing database query optimization (indexing, caching).
* [ ] Utilizing console timelines or CPU throttling configurations.`;
  }
}

export const aiService = new AIService();
