// console.log(document);
// console.log(window.document);
// console.log(document.body);
// console.log(document.body.innerHTML);

// console.log(document.links[0]);

// document.body.innerHTML = '<h1>Hello World</h1>';

// document.write('Add content dynamically');

console.log(document.getElementById('main'));
const main = document.getElementById('main');
main.innerHTML = '<h1>Hello Universe</h1>';

const h1 = document.querySelector('#main h1');
h1.style.color = 'blue';
