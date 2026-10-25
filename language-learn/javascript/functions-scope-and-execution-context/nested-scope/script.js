function first() {
  const x = 100;
  function second() {
    const y = 200;
    console.log(x + y);
  }
  second();
}

first();

if (true) {
  const x = 300;
  if (true) {
    console.log(x);
  }
}
