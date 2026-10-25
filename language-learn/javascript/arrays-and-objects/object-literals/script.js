const person = {
  name: 'John',
  age: 30,
  isAdmin: true,
  hobbies: ['reading', 'traveling', 'cooking'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    zip: '12345',
  },
};

console.log(person);

person.name = 'Jane';
console.log(person);

console.log(person.address.city);

console.log(person.hobbies[0]);

delete person.age;
console.log(person);

person.greet = function () {
  console.log('Hello, my name is ' + this.name);
};

person.greet();
