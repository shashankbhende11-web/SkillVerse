// Custom SPA Hash Router for SkillVerse
import { authService } from './services/authService';

export class Router {
  constructor(routes, containerId = 'main-content') {
    this.routes = routes;
    this.container = document.getElementById(containerId);
    
    // Listen to hash changes and initial load
    window.addEventListener('hashchange', () => this.handleRouteChange());
    window.addEventListener('load', () => this.handleRouteChange());
  }

  // Parse hash and queries: e.g. #learning-room?sessionId=123 => { path: 'learning-room', params: { sessionId: '123' } }
  parseHash() {
    const hash = window.location.hash || '#landing';
    const [pathWithHash, queryString] = hash.split('?');
    const path = pathWithHash.slice(1) || 'landing';
    
    const params = {};
    if (queryString) {
      const searchParams = new URLSearchParams(queryString);
      for (const [key, value] of searchParams.entries()) {
        params[key] = value;
      }
    }
    return { path, params };
  }

  async handleRouteChange() {
    const { path, params } = this.parseHash();
    const route = this.routes[path] || this.routes['landing'];
    const currentUser = authService.getCurrentUser();

    // Route Guard: Redirect to auth if trying to access private page while logged out
    if (route.isPrivate && !currentUser) {
      window.location.hash = '#auth';
      return;
    }

    // Route Guard: Redirect to dashboard if logged in and accessing auth
    if (path === 'auth' && currentUser) {
      window.location.hash = '#dashboard';
      return;
    }

    // Toggle sidebar/header visibility depending on page context
    const bodyClassList = document.body.classList;
    const appContainer = document.getElementById('app');
    
    if (path === 'landing' || path === 'auth') {
      appContainer.classList.add('no-sidebar');
      // Hide sidebar & internal header
      const sidebar = document.getElementById('app-sidebar');
      const header = document.getElementById('app-header');
      if (sidebar) sidebar.style.display = 'none';
      if (header) header.style.display = 'none';
    } else {
      appContainer.classList.remove('no-sidebar');
      // Show sidebar & internal header
      const sidebar = document.getElementById('app-sidebar');
      const header = document.getElementById('app-header');
      if (sidebar) sidebar.style.display = 'flex';
      if (header) header.style.display = 'flex';
    }

    // Set page container with fade transition
    this.container.classList.remove('page-fade-enter-active');
    this.container.classList.add('page-fade-enter');
    
    // Instantiate and render page
    try {
      const PageClass = route.component;
      const pageInstance = new PageClass(params);
      
      this.container.innerHTML = await pageInstance.render();
      
      // Trigger animations
      requestAnimationFrame(() => {
        this.container.classList.remove('page-fade-enter');
        this.container.classList.add('page-fade-enter-active');
      });

      // Call page lifecycle event binder
      if (pageInstance.afterRender) {
        await pageInstance.afterRender();
      }

      // Re-trigger icon rendering if Lucide is loaded
      if (window.lucide) {
        window.lucide.createIcons();
      }

      // Scroll to top
      window.scrollTo(0, 0);

      // Highlight active links in sidebar
      this.updateSidebarActiveState(path);

    } catch (error) {
      console.error("Error rendering page: ", error);
      this.container.innerHTML = `
        <div class="glass-card text-center" style="max-width:500px; margin: 4rem auto;">
          <h2 style="color:var(--secondary); margin-bottom:1rem;">Oops! Component Error</h2>
          <p style="color:var(--text-muted); margin-bottom:1.5rem;">Failed to load view details.</p>
          <a href="#dashboard" class="btn btn-primary">Back to Dashboard</a>
        </div>
      `;
    }
  }

  updateSidebarActiveState(currentPath) {
    const links = document.querySelectorAll('.sidebar-link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentPath}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
