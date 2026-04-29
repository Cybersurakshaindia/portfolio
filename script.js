// ============ NAVBAR FUNCTIONALITY ============
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============ NAVBAR SCROLL EFFECT ============
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ INTERSECTION OBSERVER FOR ANIMATIONS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.section-header, .about-item, .stat, .work-card, .skill-card, .contact-card, .contact-form').forEach(el => {
    observer.observe(el);
});

// ============ FORM SUBMISSION ============
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = this.querySelector('input[placeholder="Your Name"]').value;
        const email = this.querySelector('input[placeholder="Your Email"]').value;
        const message = this.querySelector('textarea[placeholder="Your Message"]').value;

        if (name && email && message) {
            const mailtoLink = `mailto:pankajynr0@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            window.location.href = mailtoLink;
            
            this.reset();
            alert('Thank you! Your message has been prepared.');
        }
    });
}

// ============ COUNTER ANIMATION ============
const counters = document.querySelectorAll('.stat-number');
let animationTriggered = false;

const animateCounters = () => {
    if (animationTriggered) return;
    animationTriggered = true;

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 50;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 30);
    });
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.about');
const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animationTriggered) {
            animateCounters();
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ============ HOVER EFFECTS ============
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ============ PARALLAX EFFECT ============
window.addEventListener('scroll', () => {
    const floatingCards = document.querySelectorAll('.floating-card');
    const scrollY = window.scrollY;

    floatingCards.forEach((card, index) => {
        card.style.transform = `translateY(${scrollY * (0.3 + index * 0.1)}px)`;
    });
});

// ============ CONSOLE MESSAGE ============
console.log('%c🛡️ PANKAJ KUMAR - CYBERSECURITY SPECIALIST 🛡️', 'color: #0071e3; font-size: 16px; font-weight: bold;');
console.log('%cWelcome to my Apple-style portfolio. Built with precision and care.', 'color: #86868b; font-size: 12px;');

console.log('Portfolio loaded successfully! 🚀');
