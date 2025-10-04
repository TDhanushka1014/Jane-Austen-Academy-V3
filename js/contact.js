// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const subject = document.getElementById('subject').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const message = document.getElementById('message').value;
    
    // Construct mailto link
    const mailtoLink = `mailto:archermon0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`WhatsApp: ${whatsapp}\n\nMessage: ${message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Your message has been prepared for sending. Please check your email client to complete the process.');
    
    // Reset form
    this.reset();
});