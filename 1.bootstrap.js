(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var spectral_graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spectral_graph */ "./node_modules/spectral_graph/spectral_graph.js");


let component_id="spectre-analyser";
let mouse_value_display_id="mouse-value";
let slider_id="waterfall-slider";
let time_value_id="time";
let time_button_id="time_valid";

let waterfall = spectral_graph__WEBPACK_IMPORTED_MODULE_0__["WaterfallGraph"].new(800,600,800,600,component_id);
waterfall.run();

let data_size = 0;
var interval_id=setInterval(add_basic_data, 100);
let waterfallCanvas = document.getElementById(component_id);
let mouse_value_display = document.getElementById(mouse_value_display_id);
let slider = document.getElementById(slider_id);
let time_value=document.getElementById(time_value_id);
let time_button=document.getElementById(time_button_id);
let should_look_mouse_value=false;
requestAnimationFrame(step);

waterfallCanvas.addEventListener("mouseenter", () =>
  should_look_mouse_value=true
);

waterfallCanvas.addEventListener("mouseleave", () =>
  should_look_mouse_value=false
);

time_button.addEventListener("click", () => {
    console.log("test");
    clearInterval(interval_id);
    interval_id=setInterval(add_basic_data, time_value.value);
  }
);

slider.addEventListener('input', () => {
  waterfall.set_slider_position(parseInt(slider.value));
});

function add_basic_data() {
  data_size=waterfall.add_data(waterfall.debug_data(data_size,-60,60));
  slider.max=data_size;
  slider.value=waterfall.get_slider_position();
}



function get_mouse_data(){
  let mouse_value=waterfall.get_mouse_value();
  if (mouse_value === undefined || !should_look_mouse_value) {
    mouse_value_display.textContent = "-";
  }
  else {
    mouse_value_display.textContent = mouse_value;
  }
}

function step() {
  get_mouse_data();
  requestAnimationFrame(step);
}



/***/ })

}]);
//# sourceMappingURL=1.bootstrap.js.map