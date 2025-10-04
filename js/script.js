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

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    // Reset all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Handle index boundaries
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;
    
    // Show current slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // Move carousel - UPDATED CALCULATION
    const slideWidth = 100 / totalSlides; // Calculate percentage per slide
    document.querySelector('.carousel-slide').style.transform = `translateX(-${currentSlide * slideWidth}%)`;
}

// Next/Previous buttons
document.querySelector('.next-btn').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Indicator clicks
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto slide change
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Tab functionality for results section
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding tab pane
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});