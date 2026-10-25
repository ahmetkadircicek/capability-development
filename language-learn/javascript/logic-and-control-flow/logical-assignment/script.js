// Logical Assignment

// &&= - AND assignment
// assigns the right-hand side value only if the left-hand side is falsy

// ||= - OR assignment
// ??= - NULLISH assignment

let a = null;

if (!a) {
  console.log('a is true');
} else {
  console.log('a is false');
}

// a = a || 10;

console.log(a);

a ||= 20;

console.log(a);

a ??= 30;

console.log(a);
