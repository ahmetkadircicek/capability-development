// Check type and truthy of
console.log(typeof 1, !!1); // number, true
console.log(typeof 'Hello', !!'Hello'); // string, true
console.log(typeof [1, 2, 3], !![1, 2, 3]); // object, true
console.log(typeof { a: 1, b: 2 }, !!{ a: 1, b: 2 }); // object, true

// Falsy values
console.log(typeof 0, !!0); // number, false
console.log(typeof '', !!''); // string, false
console.log(typeof null, !!null); // object, false
console.log(typeof undefined, !!undefined); // undefined, false
console.log(typeof NaN, !!NaN); // number, false
