export default class Slider {

  constructor(slider, button) {
    this.slider = document.querySelector(`.${slider}`);
    this.buttons = this.slider.querySelectorAll(`.${button}`);
  }

  render() {
    console.log(this.slider, this.buttons);
  }

}
