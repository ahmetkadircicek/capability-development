const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', event => {
  alert('Button clicked');
});

div.addEventListener('click', event => {
  alert('Div clicked');
  event.stopPropagation();
});

form.addEventListener('click', () => {
  alert('Form clicked');
});
