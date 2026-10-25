let amount = '100';

console.log(amount, typeof amount); // 10 'number'

// Convert string to number
amount = parseInt(amount);
console.log(amount, typeof amount); // 10 'number'

// Convert string to float
amount = parseFloat(amount);
console.log(amount, typeof amount); // 10 'number'

amount = Number(amount);
console.log(amount, typeof amount); // 10 'number'

amount = Number('hello');
console.log(amount, typeof amount); // NaN 'number'
