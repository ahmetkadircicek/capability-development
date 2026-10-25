let x = 100;
let y = 50;
function getSum(a, b) {
  let sum = a + b;
  return sum;
}
let sum1 = getSum(x, y);
let sum2 = getSum(10, 20);

console.log(sum1, sum2);
// Creation Phase
// Line 1: x variable is allocated memory and stores 'undefined'
// Line 2: y variable is allocated memory and stores 'undefined'
// Line 3: getSum() function is allocated memory and stores all the code
// Line 7: sum1 variable is allocated memory and stores 'undefined'
// Line 8: sum2 variable is allocated memory and stores 'undefined'

// Execution Phase
// Line 1: x variable is assigned the value of 100
// Line 2: y variable is assigned the value of 50
// Line 3: skips the function definition because threre is nothing to execute
// Line 7: invokes the getSum() function and creates a new execution context

// Function Creation Context
// Line 3: a variable is allocated memory and stores 'undefined'
// Line 4: b variable is allocated memory and stores 'undefined'

// Function Execution Context
// Line 3: a and b variable is assigned the value of 100 and 50
// Line 4: calculation is done and 150 is put in the sum variable
// Line 5: return tells the function EC to return the global EC with the value of sum
// Line 7: returned sum value is assigned to sum1 variable
// Line 8: invokes the getSum() function and creates a new execution context and does the same steps as above

