// Basic console.log examples
console.log(); // Empty log (prints a blank line)
console.log(100); // Logging a number
console.log('Hello World'); // Logging a string

// Logging variables
const x = 10;
console.log(x); // Outputs the value of variable x

// Different console methods for various purposes
console.error('This is an error'); // Displays error message (typically in red)
console.warn('This is a warning'); // Displays warning message (typically in yellow)

// Console table for displaying tabular data
console.table([
  { name: 'John', age: 20 },
  { name: 'Jane', age: 21 },
]);

// Console grouping for organizing related logs
console.group('User');
console.error('This is an error'); // Error within the group
console.warn('This is a warning'); // Warning within the group
console.groupEnd(); // Ends the group

// Styled console logs using CSS
const styles = 'padding: 10px; border-radius: 5px; background-color: black; color: green;';
console.log('%cHello World', styles); // %c applies the CSS styles to the text

// Keyboard shortcuts for Chrome DevTools
// cmd + d - multiple select
// cmd + alt + left mouse click - multi select
// cmd + alt + j - open console
