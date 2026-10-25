// Logical Operators

// && - AND
// || - OR
// ! - NOT
// ?? - NULLISH COALESCING
// The nullish coalescing operator (??) returns the right-hand operand
// when the left-hand operand is null or undefined, otherwise it returns
// the left-hand operand. Unlike the logical OR (||) operator, it doesn't
// return the right-hand side for other falsy values like 0, '', or false.
// Example: const result = someValue ?? defaultValue;

const x = 10;
const y = 20;
const z = 30;

console.log(x < y && y < z);

console.log(x < y || y > z);

console.log(!(x < y || y > z));

console.log(x ?? y ?? z);

const result = null ?? 'default';
console.log(result);
