const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;
const cardWidth = 220; // Width of a card including margin
const totalCards = document.querySelectorAll('.card').length;
const visibleCards = 3; // Adjust based on how many cards are visible in your container

nextButton.addEventListener('click', () => {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});
