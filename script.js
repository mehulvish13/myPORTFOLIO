/* 
Overview of JS Concepts Used:
- DOM Manipulation: For toggling menus, chat popup, and back-to-top button.
- Event Handling: Click, scroll, and form events.
- Responsive Navigation: Hamburger menu for mobile.
- Smooth Scrolling: For navigation and back-to-top.
- Simple Chatbot: Basic keyword-based responses.
- Form Handling: Prevent default and show feedback.
*/

// Responsive mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Chatbot popup toggle
function toggleChat() {
    const chatPopup = document.getElementById('chatPopup');
    chatPopup.classList.toggle('active');
}

// Simple chatbot response
function respondToChat() {
    const input = document.getElementById('chatInput').value;
    const response = document.getElementById('chatResponse');
    if (input.toLowerCase().includes('projects')) {
        response.innerText = "You can check my projects on GitHub!";
    } else if (input.toLowerCase().includes('skills')) {
        response.innerText = "I specialize in Python, ML, and AI technologies.";
    } else {
        response.innerText = "I'm here to help! Please ask about my projects or skills.";
    }
    document.getElementById('chatInput').value = '';
}

// Back to top button functionality
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu after click
            if (window.innerWidth < 768) {
                document.getElementById('mobile-menu').classList.add('hidden');
            }
        }
    });
});

// Contact form feedback
document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        form.reset();
    });
});