const email = 'test@test.com';

if (email) {
  console.log('Email is valid');
}

console.log(Boolean(email));

const x = false;

console.log(Boolean(x));

if (x) {
  console.log('x is truthy');
} else {
  console.log('x is falsy');
}

// Falsy values
// 0
// ''
// null
// undefined
// NaN

// Truthy values
// '0'
// ' '
// 'false'
// []
// {}
// function() {}
