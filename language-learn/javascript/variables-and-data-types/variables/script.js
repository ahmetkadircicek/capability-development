/**
 * JavaScript Variables
 *
 * There are three ways to declare variables in JavaScript:
 * 1. var - function scoped, older way (not recommended for modern code)
 * 2. let - block scoped, can be reassigned
 * 3. const - block scoped, cannot be reassigned
 */

// Using let for variables that will change
let firstName = 'John';
let lastName = 'Doe';
console.log(firstName, lastName); // John Doe

// Variables can be reassigned with let
let age = 22;
console.log(age); // 22
age = 23;
console.log(age); // 23

// Variables declared without a value are undefined
let score;
console.log(score); // undefined

// Operations on undefined result in NaN (Not a Number)
score += 1;
console.log(score); // NaN

// Using const for arrays - the array itself cannot be reassigned
const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]

// But array contents can be modified
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// Primitive const values cannot be changed
const x = 100;
// x = 200; // This would cause an error: "Assignment to constant variable"

// Using const for objects - the object reference cannot be reassigned
const person = {
  name: 'John',
  age: 22,
};
console.log(person); // {name: 'John', age: 22}

// But object properties can be modified
person.name = 'Jane';
console.log(person); // {name: 'Jane', age: 22}
