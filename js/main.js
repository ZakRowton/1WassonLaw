/**
 * Wasson Law - Main JavaScript
 * Kyle B. Wasson | Criminal Defense Attorney
 * Dark luxury theme interactivity
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ============================
    // Navigation Scroll Effects
    // ============================
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
        const currentScrollY = window.scrollY;

        // Add/remove scrolled class for glass effect enhancement
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 300) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    // ============================
    // Mobile Menu Toggle
    // ============================
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileClose = document.getElementById('mobile-close');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

    function openMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', openMobileMenu);
    }

    if (mobileClose) {
        mobileClose.addEventListener('click', closeMobileMenu);
    }

    // Close mobile menu when clicking a link
    mobileLinks.forEach(function(link) {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });

    // ============================
    // Smooth Scroll for Anchor Links
    // ============================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================
    // Intersection Observer Reveal Animations
    // ============================
    const revealElements = document.querySelectorAll('.reveal, .practice-card, .why-card, .testimonial-card');

    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    });

    revealElements.forEach(function(el) {
        revealObserver.observe(el);
    });

    // ============================
    // Hero Section Animations
    // ============================
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(function() {
            heroContent.classList.add('animate-in');
        }, 300);
    }

    // ============================
    // Contact Form Handling
    // ============================
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Hide previous messages
            if (formSuccess) formSuccess.style.display = 'none';
            if (formError) formError.style.display = 'none';

            // Basic validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const caseType = document.getElementById('case-type');
            const message = document.getElementById('message');
            let isValid = true;

            function showFieldError(field, show) {
                if (field) {
                    if (show) {
                        field.classList.add('error');
                    } else {
                        field.classList.remove('error');
                    }
                }
            }

            // Validate required fields
            if (!name || !name.value.trim()) {
                showFieldError(name, true);
                isValid = false;
            } else {
                showFieldError(name, false);
            }

            if (!email || !email.value.trim()) {
                showFieldError(email, true);
                isValid = false;
            } else {
                // Email regex
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value.trim())) {
                    showFieldError(email, true);
                    isValid = false;
                } else {
                    showFieldError(email, false);
                }
            }

            if (!phone || !phone.value.trim()) {
                showFieldError(phone, true);
                isValid = false;
            } else {
                showFieldError(phone, false);
            }

            if (!caseType || !caseType.value) {
                showFieldError(caseType, true);
                isValid = false;
            } else {
                showFieldError(caseType, false);
            }

            if (!message || !message.value.trim()) {
                showFieldError(message, true);
                isValid = false;
            } else {
                showFieldError(message, false);
            }

            if (!isValid) {
                if (formError) {
                    formError.textContent = 'Please fill in all required fields correctly.';
                    formError.style.display = 'block';
                }
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.textContent : 'Send Message';

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }

            // Simulate network delay
            setTimeout(function() {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }

                // Show success message
                if (formSuccess) {
                    formSuccess.style.display = 'block';
                }

                // Reset form
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(function() {
                    if (formSuccess) {
                        formSuccess.style.display = 'none';
                    }
                }, 5000);
            }, 1500);
        });
    }

    // ============================
    // Practice Area Card Hover Effects
    // ============================
    const practiceCards = document.querySelectorAll('.practice-card');
    practiceCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ============================
    // Testimonial Carousel (Simple)
    // ============================
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    if (testimonialCards.length > 1) {
        let currentTestimonial = 0;
        const testimonialContainer = document.querySelector('.testimonials-grid');

        // Add navigation dots if more than 3 testimonials on mobile
        if (window.innerWidth < 768 && testimonialCards.length > 1) {
            // Simple fade effect for testimonials
            testimonialCards.forEach(function(card, index) {
                if (index !== 0) {
                    card.style.opacity = '0.6';
                }
            });
        }
    }

    // ============================
    // Back to Top Button
    // ============================
    const backToTop = document.getElementById('back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================
    // Parallax Effect for Hero
    // ============================
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.3;
            heroSection.style.backgroundPosition = 'center ' + rate + 'px';
        });
    }

    // ============================
    // Active Navigation Link on Scroll
    // ============================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 150;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveNav();
            });
        }
    });

    // ============================
    // Counter Animation for Stats
    // ============================
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'), 10);
                const duration = 2000;
                const step = Math.ceil(target / (duration / 16));
                let current = 0;

                const timer = setInterval(function() {
                    current += step;
                    if (current >= target) {
                        counter.textContent = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        counter.textContent = current.toLocaleString();
                    }
                }, 16);

                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(function(counter) {
        counterObserver.observe(counter);
    });

    // ============================
    // Noise Canvas Effect (Optional Enhancement)
 // ============================
    const noiseCanvas = document.getElementById('noise-canvas');
    if (noiseCanvas) {
        const ctx = noiseCanvas.getContext('2d');
        let width, height;

        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            noiseCanvas.width = width;
            noiseCanvas.height = height;
        }

        function generateNoise() {
            const imageData = ctx.createImageData(width, height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const value = Math.random() * 255;
                data[i] = value;
                data[i + 1] = value;
                data[i + 2] = value;
                data[i + 3] = 8; // Very low opacity
            }

            ctx.putImageData(imageData, 0, 0);
        }

        resizeCanvas();
        generateNoise();

        window.addEventListener('resize', function() {
            resizeCanvas();
            generateNoise();
        });
    }

    console.log('Wasson Law website initialized. Kyle B. Wasson - Aggressive Criminal Defense.');
});
