"use strict";

var btn = document.querySelector('.dash__btn');
var body = document.querySelector('body');
var popup = document.querySelector('.popup');
var close = document.querySelector('.popup__close');
btn.addEventListener('click', function () {
  popup.style.display = 'flex';
  createImage();
});
close.addEventListener('click', function () {
  popup.style.display = 'none';
  document.querySelector('canvas').remove();
});

function createImage() {
  html2canvas(document.querySelector('.dash-board'), {
    onrendered: function onrendered(canvas) {
      popup.appendChild(canvas);
    }
  });
}