// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll behavior
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

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.15)';
    } else {
        navbar.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.1)';
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[placeholder="Your Name"]').value;
        const email = this.querySelector('input[placeholder="Your Email"]').value;
        const subject = this.querySelector('input[placeholder="Subject"]').value;
        const message = this.querySelector('textarea[placeholder="Message"]').value;
        
        // Basic validation
        if (name && email && subject && message) {
            // Create mailto link
            const mailtoLink = `mailto:pankajynr0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
            window.location.href = mailtoLink;
            
            // Clear form
            this.reset();
            alert('Thank you for reaching out! Your message has been prepared.');
        } else {
            alert('Please fill out all fields.');
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.about-content, .education, .skill-category, .project-card, .timeline-content, .info-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add fade in up animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active nav link
const navStyle = document.createElement('style');
avStyle.textContent = `
    .nav-link.active {
        color: var(--primary-color);
        text-shadow: 0 0 10px var(--primary-color);
    }
`;
document.head.appendChild(navStyle);

// Random stars generation for hero section
function generateStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    
    const starCount = 50;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.5 + 0.2;
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
        starsContainer.appendChild(star);
    }
}

generateStars();

// Scroll animations for counters (stats section)
function animateCounters() {
    const stats = document.querySelectorAll('.stat h4');
    
    stats.forEach(stat => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.textContent);
                    if (!isNaN(target)) {
                        let current = 0;
                        const increment = target / 50;
                        
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                entry.target.textContent = target;
                                clearInterval(timer);
                                observer.unobserve(entry.target);
                            } else {
                                entry.target.textContent = Math.floor(current) + (isNaN(current % 1) ? '' : '+');
                            }
                        }, 30);
                    }
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });
}

// Call animations after page load
window.addEventListener('load', animateCounters);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add hover effects to skill tags and project tags
document.querySelectorAll('.skill-tag, .project-tags span').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

console.log('Portfolio script loaded successfully!');
