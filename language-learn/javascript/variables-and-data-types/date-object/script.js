// Declare a variable x to store date values
let x;

// Create a new Date object with current date and time
let d = new Date();

// Convert the date to a string representation
x = d.toString();
console.log(x);

// Get the current year (4 digits)
x = d.getFullYear();
console.log(x);

// Get the current month (0-11, 0 = January, 11 = December)
x = d.getMonth();
console.log(x);

// Get the current day of the month (1-31)
x = d.getDate();
console.log(x);

// Get the current hour (0-23)
x = d.getHours();
console.log(x);

// Get the current minute (0-59)
x = d.getMinutes();
console.log(x);

// Get the current second (0-59)
x = d.getSeconds();
console.log(x);

// Get the current millisecond (0-999)
x = d.getMilliseconds();
console.log(x);

// Get the primitive value of the Date object (timestamp in milliseconds)
x = d.valueOf();
console.log(x);

// Get the number of milliseconds since January 1, 1970
x = d.getTime();
console.log(x);

// Get the timezone offset in minutes (difference between local time and UTC)
x = d.getTimezoneOffset();
console.log(x);

x = Intl.DateTimeFormat('en-US').format(d);
console.log(x);

x = Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
}).format(d);
console.log(x);

x = Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(d);
console.log(x);
