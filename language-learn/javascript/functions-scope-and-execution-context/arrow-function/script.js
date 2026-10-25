// Traditional function declaration
// Takes two parameters and returns their sum
function add(a, b) {
  return a + b;
}

// Call the add function with arguments 10 and 20
console.log(add(10, 20)); // Outputs: 30

// Arrow function expression
// More concise syntax, implicit return when no curly braces are used
const subtract = (a, b) => a - b;

// Call the subtract function with arguments 10 and 20
console.log(subtract(10, 20)); // Outputs: -10

const createObject = () => ({
  name: 'John',
});

console.log(createObject()); // Outputs: { name: 'John', age: 30 }
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
  console.log(number);
});
