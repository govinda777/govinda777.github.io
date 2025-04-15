// Main JavaScript for portfolio website

document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for section animations
  const observeElements = document.querySelectorAll('.animate-on-scroll');
  
  if (observeElements.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observeElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // Navbar scroll behavior
  const navbar = document.getElementById('navbar');
  let lastScrollTop = 0;
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Add background on scroll
      if (scrollTop > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
      
      // Hide on scroll down, show on scroll up
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.classList.add('navbar-hidden');
      } else {
        navbar.classList.remove('navbar-hidden');
      }
      
      lastScrollTop = scrollTop;
    });
  }
  
  // Typed.js effect for header text
  const typedElement = document.getElementById('typed-text');
  if (typedElement && window.Typed) {
    new Typed(typedElement, {
      strings: ['Desenvolvimento Web', 'Aplicativos Mobile', 'Sistemas Corporativos', 'Arquitetura de Software'],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
  }
  
  // Anime.js animations for icons
  const techIcons = document.querySelectorAll('.tech-icon');
  if (techIcons.length && window.anime) {
    anime({
      targets: '.tech-icon',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      easing: 'easeOutExpo'
    });
  }
  
  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('menu-open');
      document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('menu-open');
        document.body.classList.remove('no-scroll');
      });
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Project filtering (if projects have categories)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        projectCards.forEach(card => {
          if (filterValue === 'all') {
            card.style.display = 'block';
            
            anime({
              targets: card,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 500,
              easing: 'easeOutExpo'
            });
          } else if (card.classList.contains(filterValue)) {
            card.style.display = 'block';
            
            anime({
              targets: card,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 500,
              easing: 'easeOutExpo'
            });
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
}); 