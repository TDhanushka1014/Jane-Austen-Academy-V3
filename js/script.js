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
  document.addEventListener('DOMContentLoaded', function() {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const dots = document.querySelectorAll('.dot');
            const autoPlayToggle = document.getElementById('autoPlayToggle');
            const playIcon = document.getElementById('playIcon');
            const pauseIcon = document.getElementById('pauseIcon');
            const toggleText = document.getElementById('toggleText');
            const progressBar = document.getElementById('progressBar');
            
            let currentSlide = 0;
            const slideCount = slides.length;
            let autoPlayInterval;
            let isAutoPlaying = true;
            const autoPlayDelay = 5000; // 5 seconds
            
            // Initialize slider
            function initSlider() {
                updateSlider();
                startAutoPlay();
            }
            
            // Update slider position and active dot
            function updateSlider() {
                slider.style.transform = `translateX(-${currentSlide * 100}%)`;
                
                // Update active dot
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlide);
                });
                
                // Reset progress bar
                progressBar.style.width = '0%';
            }
            
            // Next slide
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slideCount;
                updateSlider();
            }
            
            // Previous slide
            function prevSlide() {
                currentSlide = (currentSlide - 1 + slideCount) % slideCount;
                updateSlider();
            }
            
            // Go to specific slide
            function goToSlide(slideIndex) {
                currentSlide = slideIndex;
                updateSlider();
            }
            
            // Start auto play
            function startAutoPlay() {
                if (autoPlayInterval) {
                    clearInterval(autoPlayInterval);
                }
                
                autoPlayInterval = setInterval(() => {
                    nextSlide();
                }, autoPlayDelay);
                
                // Start progress bar animation
                progressBar.style.width = '100%';
                progressBar.style.transition = `width ${autoPlayDelay}ms linear`;
                
                isAutoPlaying = true;
                updateAutoPlayButton();
            }
            
            // Stop auto play
            function stopAutoPlay() {
                if (autoPlayInterval) {
                    clearInterval(autoPlayInterval);
                    autoPlayInterval = null;
                }
                
                // Reset progress bar
                progressBar.style.width = '0%';
                progressBar.style.transition = 'none';
                
                isAutoPlaying = false;
                updateAutoPlayButton();
            }
            
            // Toggle auto play
            function toggleAutoPlay() {
                if (isAutoPlaying) {
                    stopAutoPlay();
                } else {
                    startAutoPlay();
                }
            }
            
            // Update auto play button appearance
            function updateAutoPlayButton() {
                if (isAutoPlaying) {
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'block';
                    toggleText.textContent = 'Pause';
                } else {
                    playIcon.style.display = 'block';
                    pauseIcon.style.display = 'none';
                    toggleText.textContent = 'Play';
                }
            }
            
            // Event listeners
            prevBtn.addEventListener('click', () => {
                prevSlide();
                if (isAutoPlaying) {
                    // Restart auto play after manual navigation
                    startAutoPlay();
                }
            });
            
            nextBtn.addEventListener('click', () => {
                nextSlide();
                if (isAutoPlaying) {
                    // Restart auto play after manual navigation
                    startAutoPlay();
                }
            });
            
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const slideIndex = parseInt(this.getAttribute('data-slide'));
                    goToSlide(slideIndex);
                    if (isAutoPlaying) {
                        // Restart auto play after manual navigation
                        startAutoPlay();
                    }
                });
            });
            
            autoPlayToggle.addEventListener('click', toggleAutoPlay);
            
            // Pause auto play when hovering over slider
            slider.addEventListener('mouseenter', () => {
                if (isAutoPlaying) {
                    stopAutoPlay();
                }
            });
            
            // Resume auto play when leaving slider (if it was playing)
            slider.addEventListener('mouseleave', () => {
                if (!isAutoPlaying && autoPlayInterval === null) {
                    startAutoPlay();
                }
            });
            
            // Initialize the slider
            initSlider();
        });

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
