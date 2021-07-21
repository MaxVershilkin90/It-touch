import Slider from "./modules/slider.js";

document.addEventListener("DOMContentLoaded", ()=> {

  let mainSlider = new Slider("slider__slides", "slider__nav-button");
  mainSlider.render();

});
