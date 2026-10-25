// Array Literal
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers[0] = 100;
console.log(numbers);

numbers.push(6);
console.log(numbers);

// Array Constructor
const fruits = new Array('apple', 'banana', 'cherry');
console.log(fruits);

fruits[0] = 'orange';
console.log(fruits);

fruits[fruits.length] = 'pear';
console.log(fruits);
