// Function Declaration

function addDollarSign(value) {
  return '$' + value;
}

console.log(addDollarSign(100));

// Function Expression

const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));

// Function Hoisting Explanation:
// In JavaScript, function declarations are hoisted to the top of their scope during the compilation phase.
// This means you can call a function declaration before it appears in your code.
//
// For example:
// console.log(addDollarSign(100)); // This would work even if placed before the function declaration
// function addDollarSign(value) { return '$' + value; }
//
// However, function expressions are NOT hoisted in the same way.
// The variable declaration is hoisted, but the assignment happens at runtime.
//
// For example:
// console.log(addPlusSign(200)); // This would cause an error if placed before the function expression
// const addPlusSign = function(value) { return '+' + value; };
//
// This is a key difference between function declarations and function expressions in JavaScript.
