// Main JavaScript for Portfolio

// Setup Alpine custom directives
document.addEventListener('alpine:init', () => {
  // Intersection Observer directive
  Alpine.directive('intersect', (el, { value, expression, modifiers }, { evaluateLater, cleanup }) => {
    const evaluate = evaluateLater(expression);
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          evaluate();
          if (modifiers.includes('once')) {
            observer.disconnect();
          }
        }
      });
    }, {
      threshold: modifiers.includes('full') ? 0.9 : 0.2,
      rootMargin: modifiers.includes('margin') ? '100px' : '0px',
    });
    
    observer.observe(el);
    cleanup(() => observer.disconnect());
  });
});

// Music Control Functions
function playBackgroundMusic() {
  const music = document.getElementById('background-music');
  if (music) {
    music.volume = 0.1; // Set volume to 10%
    music.play().catch(error => {
      console.error('Error playing music:', error);
    });
  }
}

function toggleBackgroundMusic() {
  const music = document.getElementById('background-music');
  const icon = document.getElementById('music-icon');
  
  if (music.paused) {
    music.play();
    icon.classList.remove('bi-music-note');
    icon.classList.add('bi-music-note-beamed');
  } else {
    music.pause();
    icon.classList.remove('bi-music-note-beamed');
    icon.classList.add('bi-music-note');
  }
}

// Initialize music if consent was given
document.addEventListener('DOMContentLoaded', function() {
  const musicConsent = localStorage.getItem('musicConsent');
  if (musicConsent === 'yes') {
    // Delay music start to avoid autoplay restrictions
    setTimeout(playBackgroundMusic, 1000);
  }
  
  // Initialize Particles.js
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#64FFDA' },
        shape: { type: 'circle' },
        opacity: { 
          value: 0.5, 
          random: false, 
          anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } 
        },
        size: { 
          value: 3, 
          random: true, 
          anim: { enable: true, speed: 2, size_min: 0.1, sync: false } 
        },
        line_linked: {
          enable: true, 
          distance: 150, 
          color: '#8892B0', 
          opacity: 0.4, 
          width: 1 
        },
        move: { 
          enable: true, 
          speed: 1, 
          direction: 'none', 
          random: true, 
          straight: false, 
          out_mode: 'out', 
          bounce: false 
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }
});

// Three.js Scene Initialization
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the home section with the 3D container
  const threeContainer = document.getElementById('three-container');
  if (!threeContainer) return;
  
  // Add Three.js initialization code here
  console.log('Three.js container detected, initialize 3D scene...');
}); 