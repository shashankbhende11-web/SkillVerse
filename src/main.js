// Entry point for SkillVerse SPA
import './style.css';
import { Router } from './router';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { initToastSystem } from './components/Toast';
import { authService } from './services/authService';
import { AIChatbot } from './components/AIChatbot';

// Import Pages
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProfilePage } from './pages/ProfilePage';
import { DiscoveryPage } from './pages/DiscoveryPage';
import { MatchingPage } from './pages/MatchingPage';
import { LearningRoomPage } from './pages/LearningRoomPage';
import { AIAssistantPage } from './pages/AIAssistantPage';
import { AssessmentsPage } from './pages/AssessmentsPage';
import { CommunityPage } from './pages/CommunityPage';
import { AdminPage } from './pages/AdminPage';

// Configure Routes mapping
// isPrivate: true redirects logged-out users to #auth
const routes = {
  landing: { component: LandingPage, isPrivate: false },
  auth: { component: AuthPage, isPrivate: false },
  dashboard: { component: DashboardPage, isPrivate: true },
  profile: { component: ProfilePage, isPrivate: true },
  discovery: { component: DiscoveryPage, isPrivate: true },
  matching: { component: MatchingPage, isPrivate: true },
  'learning-room': { component: LearningRoomPage, isPrivate: true },
  'ai-assistant': { component: AIAssistantPage, isPrivate: true },
  assessments: { component: AssessmentsPage, isPrivate: true },
  community: { component: CommunityPage, isPrivate: true },
  admin: { component: AdminPage, isPrivate: true }
};

// Initialize App Shell Layout
async function initAppShell() {
  const appContainer = document.getElementById('app');
  
  // Set up index layout wrapper
  appContainer.innerHTML = `
    <!-- Top Nav Header (Rendered on private pages) -->
    <div id="header-container"></div>
    
    <div class="app-wrapper">
      <!-- Sidebar Navigation (Rendered on private pages) -->
      <div id="sidebar-container"></div>
      
      <!-- Main Content Container where SPA pages render -->
      <main id="main-content" class="main-content"></main>
    </div>
  `;

  // Initialize central toast alerts system
  initToastSystem();

  // Instantiate layout components
  const header = new Header();
  const sidebar = new Sidebar();
  const chatbot = new AIChatbot();

  // Initialize Router
  const router = new Router(routes, 'main-content');

  // Monitor Authentication status to dynamically update header & sidebar layouts
  authService.onAuthChanged(async (user) => {
    const headerContainer = document.getElementById('header-container');
    const sidebarContainer = document.getElementById('sidebar-container');

    if (user) {
      // User is logged in, render layouts
      if (headerContainer) {
        headerContainer.innerHTML = await header.render();
        await header.afterRender();
      }
      if (sidebarContainer) {
        sidebarContainer.innerHTML = await sidebar.render();
        await sidebar.afterRender();
      }
      
      // Render global chatbot
      chatbot.render();
      
      // Update router matching status
      router.handleRouteChange();
    } else {
      // User is logged out, clear layouts
      if (headerContainer) headerContainer.innerHTML = '';
      if (sidebarContainer) sidebarContainer.innerHTML = '';
      
      // Clean up chatbot
      chatbot.destroy();
      
      // Re-route to login/landing
      router.handleRouteChange();
    }
  });

  // Background Glassmorphism Particles Canvas Drawer
  initBackgroundCanvas();
}

// Sparkly shifting backdrop dots for premium SaaS look
function initBackgroundCanvas() {
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  // Create points
  const points = [];
  const count = 35;
  
  for (let i = 0; i < count; i++) {
    points.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 4 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: Math.random() > 0.5 ? 'rgba(121, 163, 195, 0.15)' : 'rgba(235, 205, 183, 0.15)'
    });
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    
    points.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    
    requestAnimationFrame(animate);
  }

  animate();
}

// Start application
initAppShell();
