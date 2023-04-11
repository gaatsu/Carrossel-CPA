const carousel = document.querySelector('.carousel');
const container = carousel.querySelector('.carousel-container');
const items = carousel.querySelectorAll('.carousel-item');
const dots = carousel.querySelectorAll('.carousel-dot');
const itemWidth = items[0].clientWidth;

let currentIndex = 0;

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    setCarouselPosition();
    setActiveDot();
  });
});

function setCarouselPosition() {
  container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function setActiveDot() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

setActiveDot();

setInterval(() => {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  setCarouselPosition();
  setActiveDot();
}, 10000);