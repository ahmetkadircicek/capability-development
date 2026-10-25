// initialExpression - executed before the loop starts
// conditionExpression - executed before each iteration of the loop
// incrementExpression - executed after each iteration of the loop
// for ([initialExpression]; [conditionExpression]; [incrementExpression]) {
//   // code block to be executed
// }

for (let i = 0; i < 10; i++) {
  // console.log(i);
}

// Loop through an array

const fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
  // console.log(fruits[i]);
}

// Loop break
// Stops the loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  // console.log(i);
}

// Loop continue
// Skips the current iteration of the loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
