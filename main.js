document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initActiveNavLink();
    initMobileMenu();
    initContactForm();
  });
  
  /* Theme State Handler */
  function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    if (!themeToggleBtn) return;
  
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggleBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
    }
  
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
      }
    });
  }
  
  /* Highlight Active Navigation Link */
  function initActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  /* Mobile Navigation Toggle */
  function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    if (!mobileMenuBtn || !navLinks) return;
  
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }
  
  /* Modal Case Study Handler for Index Page */
  const projectData = {
    travia: {
      badge: "AI/ML Project • KWK 2025",
      title: "Travia — AI Travel Planner",
      content: `
        <p style="margin-bottom: 1rem;">Travia is an artificial intelligence travel planning assistant engineered during the Kode With Klossy AI/ML summer program in June 2025.</p>
        <p style="margin-bottom: 1rem;"><strong>Project Highlights:</strong></p>
        <ul style="padding-left: 1.25rem; margin-bottom: 1.5rem; color: var(--text-muted);">
          <li>Engineered backend model logic using Python and Gradio to compute itineraries based on user constraints.</li>
          <li>Collaborated with team members to deliver a live presentation to 60+ scholars and mentors.</li>
        </ul>
      `
    },
    pinktax: {
      badge: "Data Science Project • KWK 2026",
      title: "Pink Tax Data Visualization",
      content: `
        <p style="margin-bottom: 1rem;">A data analytics study bringing awareness to gender-based price discrimination across major retail brands.</p>
        <p style="margin-bottom: 1rem;"><strong>Project Highlights:</strong></p>
        <ul style="padding-left: 1.25rem; margin-bottom: 1.5rem; color: var(--text-muted);">
          <li>Queried retail price metrics using SQL to measure margin differences.</li>
          <li>Built and deployed an interactive Tableau visualization.</li>
          <li>Presented to an audience of 70+ scholars, industry leaders, and instructors.</li>
        </ul>
      `
    },
    empowher: {
      badge: "501(c)(3) Nonprofit Initiative",
      title: "EmpowHER Digital Outreach",
      content: `
        <p style="margin-bottom: 1rem;">Co-founded and scaled a 501(c)(3) nonprofit dedicated to alleviating period poverty for refugees in the Dallas metro area.</p>
        <p style="margin-bottom: 1rem;"><strong>Impact Metrics:</strong></p>
        <ul style="padding-left: 1.25rem; margin-bottom: 1.5rem; color: var(--text-muted);">
          <li>Scaled to 50+ members and established 12+ strategic distribution partnerships.</li>
          <li>Raised $1,000+ in donations and distributed 600+ physical hygiene products.</li>
          <li>Expanded digital footprint to 11k+ accounts across TikTok and Instagram.</li>
        </ul>
      `
    }
  };
  
  function openModal(key) {
    const data = projectData[key];
    if (!data) return;
    document.getElementById('modalBadge').innerText = data.badge;
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalContent').innerHTML = data.content;
    document.getElementById('modalOverlay').classList.add('active');
  }
  
  function closeModal(event) {
    if (event.target.id === 'modalOverlay') {
      closeModalDirect();
    }
  }
  
  function closeModalDirect() {
    document.getElementById('modalOverlay').classList.remove('active');
  }
  
  /* Contact Form Submission Handler */
  function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
  
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out, Bhavna will be in touch shortly!');
      contactForm.reset();
    });
  }