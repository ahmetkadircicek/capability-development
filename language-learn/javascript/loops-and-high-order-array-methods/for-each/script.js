const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

console.log(socials.__proto__);

socials.forEach(function (item) {
  console.log(item);
});

socials.forEach(social => {
  console.log(social);
});

socials.forEach((social, index, arr) => {
  console.log(social, index, arr);
});

function logSocials(social, index, arr) {
  console.log(social, index, arr);
}

socials.forEach(logSocials);

const fruits = [
  { name: 'apple', price: 1 },
  { name: 'banana', price: 2 },
  { name: 'orange', price: 3 },
  { name: 'mango', price: 4 },
];

fruits.forEach(fruit => {
  console.log(fruit.name, fruit.price);
});
