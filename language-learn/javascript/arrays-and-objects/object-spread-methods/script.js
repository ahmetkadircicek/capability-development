// Creating an object using object literal syntax
const todo = {
  id: 1,
  title: 'Buy groceries',
  completed: false,
};

// Creating an object using the Object constructor
const list = new Object();
// Adding properties to the object
list.id = 1;
list.title = 'Buy groceries';
list.completed = false;

// Accessing object properties using dot notation
console.log(list.title);
console.log(todo.id);

// Creating another todo object
const todo2 = {
  id: 2,
  title: 'Buy groceries',
  completed: false,
};

// Object with nested object (address)
const person = {
  address: {
    lat: 123.456,
    lng: 789.123,
  },
};

// Accessing nested object properties
console.log(person.address.lat);

// Object with multiple properties
const object = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(object);

// Another object with different properties
const object2 = {
  d: 4,
};
console.log(object2);

// Using the spread operator (...) to combine objects
// This creates a new object with all properties from object and object2
const object3 = {
  ...object,
  ...object2,
};
console.log(object3);

// Using Object.assign() to combine objects
// This creates a new object with all properties from object and object2
const object4 = Object.assign({}, object, object2);
console.log(object4);

// Using Object.keys() to get all keys of an object
console.log(Object.keys(object));

// Using Object.values() to get all values of an object
console.log(Object.values(object));

// Using Object.entries() to get all key-value pairs of an object
console.log(Object.entries(object));

console.log(object.hasOwnProperty('a'));
