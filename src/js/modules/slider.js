export default class Slider {

  constructor(slider, button) {
    this.slider = document.querySelector(`.${slider}`);
    this.slides = this.slider.children;
    this.buttons = document.querySelectorAll(`.${button}`);
    this.slideIndex = 1;
  }

  showSlides(n) {

    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    for (const slide of this.slides) {
      slide.style.display = 'none';
    }


    this.slides[this.slideIndex - 1].classList.add('slider__slide--active');
    this.slides[this.slideIndex - 1].style.display = 'flex';

  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  render() {
    console.log(this.buttons);
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.plusSlides(1);
      });
    })

    this.showSlides(this.slideIndex);
  }

}
