// Declaring variables with basic data types
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// Object property shorthand - when variable names match property names
const person = { firstName, lastName, age };

// Accessing object properties using dot notation
console.log(person.age);

// Destructuring Objects

// Creating a nested object structure
const todo = {
  id: 1,
  title: 'Buy Milk',
  user: {
    userName: 'John',
  },
};

// Destructuring the todo object
// - Renaming id to todoId during destructuring
// - Extracting title directly
// - Extracting userName from the nested user object
const {
  id: todoId,
  title,
  user: { userName },
} = todo;

// Displaying the destructured values
console.log(todoId, title, userName);

// Destructuring Arrays

// Creating an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Destructuring the array:
// - first gets the first element (1)
// - second gets the second element (2)
// - rest gets all remaining elements as an array [3, 4, 5]
const [first, second, ...rest] = numbers;

// Displaying the destructured array values
console.log(first, second, rest);
