// Values are stored in the stack
const name = 'John';
const age = 22;

// Reference types are stored in the heap
const person = {
  name: 'Brad',
  age: 40,
};

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Ahmet';

console.log(name, newName); // John
console.log(person, newPerson); // {name: 'John', age: 40} {name: 'John', age: 40}
