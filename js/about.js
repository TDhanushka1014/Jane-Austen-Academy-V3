// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

/// Event Year Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const eventCards = document.querySelectorAll('.event-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const year = btn.getAttribute('data-year');

        eventCards.forEach(card => {
            if (year === 'all' || card.getAttribute('data-year') === year) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
