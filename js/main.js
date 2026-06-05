// ============================================
// Wasson Law — Main JavaScript
// Kyle B. Wasson | Criminal Defense Attorney
// Dark luxury theme interactivity
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
  initFormHandler();
  initNavbarScroll();
  initActiveNavLinks();
});

// ============================================
// 1. Mobile Menu Toggle
// ============================================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!hamburger || !mobileMenu) return;

  const mobileLinks = mobileMenu.querySelectorAll('a');

  function openMenu() {
    mobileMenu.classList.add('active');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    if (mobileMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function (e) {
    if (
      mobileMenu.classList.contains('active') &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });
}

// ============================================
// 2. Smooth Scroll Navigation
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });
}

// ============================================
// 3. Scroll-Triggered Fade-In Animations
// ============================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.practice-card, .testimonial-card, .about-content, .why-card, .section-header'
  );

  if (!('IntersectionObserver' in window)) {
    animatedElements.forEach(function (el) {
      el.classList.add('animate-in');
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    }
  );

  animatedElements.forEach(function (el) {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
}

// ============================================
// 4. Form Submission Handler
// ============================================
function initFormHandler() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    clearFormAlert();

    if (!name || !email || !message) {
      showFormAlert('Please fill in all required fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showFormAlert('Please enter a valid email address.', 'error');
      return;
    }

    showFormAlert('Thank you, ' + name + '. Your message has been sent successfully. We will contact you shortly.', 'success');
    form.reset();
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormAlert(message, type) {
  clearFormAlert();

  const alert = document.createElement('div');
  alert.className = 'form-alert form-alert--' + type;
  alert.textContent = message;

  const form = document.getElementById('contact-form');
  form.parentNode.insertBefore(alert, form);

  requestAnimationFrame(function () {
    alert.classList.add('show');
  });

  setTimeout(function () {
    alert.classList.remove('show');
    setTimeout(function () {
      if (alert.parentNode) alert.parentNode.removeChild(alert);
    }, 300);
  }, 5000);
}

function clearFormAlert() {
  const existing = document.querySelector('.form-alert');
  if (existing && existing.parentNode) {
    existing.parentNode.removeChild(existing);
  }
}

// ============================================
// 5. Navbar Background Change on Scroll
// ============================================
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let ticking = false;

  function updateNavbar() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  });

  updateNavbar();
}

// ============================================
// 6. Active Nav Link Highlighting
// ============================================
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  let ticking = false;

  function highlightActiveLink() {
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });

    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(highlightActiveLink);
      ticking = true;
    }
  });

  highlightActiveLink();
}
