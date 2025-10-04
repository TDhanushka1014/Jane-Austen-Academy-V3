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
let isTransitioning = false; // Prevent multiple transitions
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;
const carouselSlide = document.querySelector('.carousel-slide');

function showSlide(index) {
    if (isTransitioning) return;
    
    isTransitioning = true;
    
    // Remove active classes
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Handle index boundaries
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    // Add active class to current slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // Calculate transform value
    const translateXValue = -(currentSlide * 100);
    carouselSlide.style.transform = `translateX(${translateXValue}%)`;
    
    // Reset transitioning flag after animation completes
    setTimeout(() => {
        isTransitioning = false;
    }, 500); // Match this with CSS transition duration
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
        if (index !== currentSlide) {
            showSlide(index);
        }
    });
});

// Auto slide change
let autoSlideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Pause auto-slide on hover/touch
carouselSlide.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

carouselSlide.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
});

// Touch swipe functionality for mobile
let startX = 0;
let endX = 0;
const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    clearInterval(autoSlideInterval); // Pause auto-slide during touch
});

carouselContainer.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
    
    // Resume auto-slide after touch
    autoSlideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
});

function handleSwipe() {
    const swipeThreshold = 50;
    
    if (startX - endX > swipeThreshold) {
        // Swipe left - next slide
        showSlide(currentSlide + 1);
    } else if (endX - startX > swipeThreshold) {
        // Swipe right - previous slide
        showSlide(currentSlide - 1);
    }
}

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
