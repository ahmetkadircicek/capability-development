const num = new Number(10);

x = num.toString();
console.log(x, typeof x);

x = num.toString();
console.log(x, typeof x);

x = num.toString().length;
console.log(x, typeof x);

x = num.toFixed(2);
console.log(x, typeof x);

x = num.toPrecision(2);
console.log(x, typeof x);

x = num.toExponential(2);
console.log(x, typeof x);

x = num.toLocaleString('en-US');
console.log(x, typeof x);

x = num.toLocaleString('tr-TR');
console.log(x, typeof x);

x = num.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});
console.log(x, typeof x);
