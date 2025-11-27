// Splash Screen
window.addEventListener('load', function () {
  const splashScreen = document.getElementById('splashScreen');

  // Hide splash screen after 2.5 seconds
  setTimeout(() => {
    splashScreen.classList.add('hidden');

    // Remove from DOM after transition
    setTimeout(() => {
      splashScreen.style.display = 'none';
    }, 500);
  }, 2500);
});

// Sidebar toggle mode
const sidebarToggle = document.getElementById('toggleModeSidebar');
if (sidebarToggle) {
  sidebarToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
}

// Typing Effect
const typingText = document.querySelector('.typing-text');
if (typingText) {
  const texts = [
    'Web Developer',
    'Cyber Security Enthusiast',
    'Frontend Developer',
    'Problem Solver',
    'Creative Coder',
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500; // Pause before next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// Particles.js Configuration
if (typeof particlesJS !== 'undefined') {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const tabName = this.getAttribute('data-tab');

    // If it's a hero CTA button, activate the tab and scroll to content
    if (tabName) {
      // Find and click the corresponding tab
      const tabElement = document.querySelector(`#${tabName}-tab`);
      if (tabElement) {
        tabElement.click();
      }

      // Scroll to the main content area
      setTimeout(() => {
        const mainContent = document.querySelector('.container');
        if (mainContent) {
          mainContent.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    } else {
      // Regular smooth scroll
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  });
});

// Interest Items Animation on Scroll
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const interestItems = entry.target.querySelectorAll(
        '.interest-item-simple'
      );
      interestItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 100);
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
  // Set initial state for animation
  const interestItems = skillsSection.querySelectorAll('.interest-item-simple');
  interestItems.forEach((item) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 0.5s ease';
  });
  observer.observe(skillsSection);
}

// Portfolio Card Animation on Scroll
const portfolioObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        portfolioObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.portfolio-card').forEach((card) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
  portfolioObserver.observe(card);
});

// Timeline Animation on Scroll
const timelineObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, index * 150);
        timelineObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.timeline-item').forEach((item) => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-30px)';
  item.style.transition = 'all 0.6s ease';
  timelineObserver.observe(item);
});
