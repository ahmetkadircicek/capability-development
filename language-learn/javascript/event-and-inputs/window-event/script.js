window.onload = function () {
  document.querySelector('h1').textContent = 'Hello World';
};

window.addEventListener('load', () => {
  document.querySelector('h1').textContent = 'Load';
  console.log('Load');
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('h1').textContent = 'DOMContentLoaded';
  console.log('DOMContentLoaded');
});

console.log('Script loaded');
