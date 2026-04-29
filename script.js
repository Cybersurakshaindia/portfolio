// ============ MATRIX RAIN EFFECT ============
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px Courier New';
    ctx.shadowColor = '#00ff41';
    ctx.shadowBlur = 10;
    
    for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i]);
        
        if (drops[i] * Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i] += fontSize;
    }
}

let matrixInterval = setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ============ MOBILE MENU ============
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = 'rgba(0, 0, 0, 0.9)';
        navLinks.style.padding = '20px';
        navLinks.style.gap = '10px';
    });
}

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============ FORM SUBMISSION ============
const hackerForm = document.getElementById('hackerForm');
if (hackerForm) {
    hackerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = this.querySelector('input[placeholder="SENDER_NAME"]').value;
        const email = this.querySelector('input[placeholder="SENDER_EMAIL"]').value;
        const subject = this.querySelector('input[placeholder="MESSAGE_SUBJECT"]').value;
        const message = this.querySelector('textarea[placeholder="MESSAGE_CONTENT"]').value;
        
        if (name && email && subject && message) {
            const mailtoLink = `mailto:pankajynr0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
            window.location.href = mailtoLink;
            this.reset();
            alert('[SUCCESS] MESSAGE TRANSMITTED');
        } else {
            alert('[ERROR] INCOMPLETE DATA');
        }
    });
}

// ============ GLITCH EFFECT ============
const glitchElements = document.querySelectorAll('.glitch');
glitchElements.forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style.animation = 'none';
        setTimeout(() => {
            el.style.animation = 'glitch-anim 0.3s infinite';
        }, 10);
    });
});

// ============ SCAN LINE EFFECT ============
function createScanline() {
    const scanline = document.createElement('div');
    scanline.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #00ff41, transparent);
        pointer-events: none;
        z-index: 9999;
        animation: scanMove 6s linear infinite;
    `;
    document.body.appendChild(scanline);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes scanMove {
            0% { top: 0; }
            100% { top: 100vh; }
        }
    `;
    document.head.appendChild(style);
}

createScanline();

// ============ CONSOLE EFFECT ============
console.log('%c🔓 SYSTEM ACCESS GRANTED 🔓', 'color: #00ff41; font-size: 20px; text-shadow: 0 0 10px #00ff41; font-weight: bold;');
console.log('%cWelcome to PANKAJ KUMAR\'s Hacker Terminal', 'color: #00d9ff; font-size: 14px;');
console.log('%cThis system is monitored. Unauthorized access is prohibited.', 'color: #ff0055; font-size: 12px;');

// ============ RANDOM GLITCH ============
setInterval(() => {
    if (Math.random() > 0.95) {
        document.body.style.filter = 'hue-rotate(90deg)';
        setTimeout(() => {
            document.body.style.filter = 'hue-rotate(0deg)';
        }, 50);
    }
}, 3000);

console.log('%cLoading complete...', 'color: #00ff41;');
