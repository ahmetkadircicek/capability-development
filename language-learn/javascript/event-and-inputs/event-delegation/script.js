const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

list.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
});

list.addEventListener('mouseover', event => {
  if (event.target.tagName === 'LI') {
    event.target.style.color = 'red';
  }
});

list.addEventListener('mouseout', event => {
  if (event.target.tagName === 'LI') {
    event.target.style.color = 'black';
  }
});

// listItems.forEach(item => {
//   item.addEventListener('click', event => {
//     event.target.remove();
//     console.log(event.target);
//   });
// });
