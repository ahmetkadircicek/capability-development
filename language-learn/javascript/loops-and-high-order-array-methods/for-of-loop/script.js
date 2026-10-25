const items = ['item1', 'item2', 'item3'];

for (const item of items) {
  console.log(item);
}

// Loop over strings

const str = 'Hello World';

for (const char of str) {
  console.log(char);
}

// Loop over maps

const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3'],
]);

for (const [key, value] of map) {
  console.log(key, value);
}
