//Código JavaScript para el slider
const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 2;
  }
  updateSliderPosition();
});

nextButton.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex > 2) {
    slideIndex = 0;
  }
  updateSliderPosition();
});

function updateSliderPosition() {
  const slideWidth = sliderContainer.offsetWidth;
  const newPosition = -slideWidth * slideIndex;
  sliderContainer.style.transform = `translateX(${newPosition}px)`;
}









