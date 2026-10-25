const x = 100;

if (true) {
  const x = 200;
  console.log(x);
}
console.log(x);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

if (true) {
  const a = 300;
  let b = 400;
  var c = 500;
  console.log(x);
}
console.log(c);

// let and const are block scoped
// var is function scoped

function run() {
  var n = 10;
  console.log(n);
}
run();
