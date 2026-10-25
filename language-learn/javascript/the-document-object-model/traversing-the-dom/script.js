// Get child elements

const parent = document.querySelector('.parent');
console.log(parent.children);
parent.children[1].style.color = 'red';

console.dir(parent);

parent.children[1].innerText = 'Child 2';
parent.children[1].style.color = 'blue';
parent.children[1].style.backgroundColor = 'lightgrey';

parent.firstElementChild.style.color = 'green';
parent.lastElementChild.style.color = 'orange';
