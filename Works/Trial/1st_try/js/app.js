// Element CRUD
// Element selection and traversing
// event handling
// querySelector,getElementsByTagName,getElementsByClassName,getElementsByName

images = [
  "images/01.jpg",
  "images/02.jpg",
  "images/03.jfif",
  "images/04.jpg",
  "images/05.jfif",
  "images/06.jfif",
  "images/01.jpg",
  "images/02.jpg",
  "images/03.jfif",
  "images/04.jpg",
  "images/05.jfif",
  "images/06.jfif",
]
let sliderWidth = 1000;
let sliderHeight = 500;

const slides = document.querySelector('.slides');
const slider = document.querySelector('.slider');


let slideElementWidth = sliderWidth;
let slideElementCount = images.length;
slider.style.width = `${sliderWidth}px`;
slider.style.height = `${sliderHeight}px`;
slides.style.width = `${slideElementWidth*slideElementCount}px`;

for (let img of images) {
  let slide = `
  <div class="slide" style="width:${slideElementWidth}px">
      <img src="${img}" alt="">
  </div>
  `
  slides.innerHTML += slide
}
let moveX = 0;

function goRight() {
  if (moveX < -(slideElementCount - 1) * slideElementWidth) {
      moveX = 0
      slides.style.transform = `translateX(${moveX}px)`

  } else {
      moveX -= slideElementWidth
      slides.style.transform = `translateX(${moveX}px)`
  }
}

function goLeft() {
  if (moveX >= 0) {
      moveX = -(slideElementCount - 1) * slideElementWidth
      slides.style.transform = `translateX(${moveX}px)`
  } else {
      moveX += slideElementWidth
      slides.style.transform = `translateX(${moveX}px)`
  }

}