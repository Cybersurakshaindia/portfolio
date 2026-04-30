// Updated script.js for enhanced interactivity

// Form validation improvements
function validateForm() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const isValid = // Add validation logic
        if (!isValid) {
            event.preventDefault();
            alert('Please fill out the form correctly!');
        }
    });
}

// Smooth scroll animations
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Testimonial carousel
let currentTestimonial = 0;
function carousel() {
    const testimonials = document.querySelectorAll('.testimonial');
    setInterval(() => {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
    }, 5000);
}

// Blog preview interaction
function blogPreviewInteraction() {
    const previews = document.querySelectorAll('.blog-preview');
    previews.forEach(preview => {
        preview.addEventListener('mouseover', () => {
            preview.classList.add('hover');
        });
        preview.addEventListener('mouseout', () => {
            preview.classList.remove('hover');
        });
    });
}

// Service card animations
function serviceCardAnimations() {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('zoom-in');
        });
        card.addEventListener('mouseout', () => {
            card.classList.remove('zoom-in');
        });
    });
}

// Initialize all
function init() {
    validateForm();
    smoothScroll();
    carousel();
    blogPreviewInteraction();
    serviceCardAnimations();
}

document.addEventListener('DOMContentLoaded', init);