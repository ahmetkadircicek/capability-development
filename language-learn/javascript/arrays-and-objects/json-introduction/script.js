// Javascript Object Notation (JSON)
// JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
// JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These conventions are summarized in the following rules:

// Sample array of todo objects
const todos = [
  {
    id: 1,
    title: 'Buy Milk',
    completed: false,
  },
];

// Convert JavaScript object to JSON string
// JSON.stringify() takes a JavaScript object and transforms it into a JSON string
const json = JSON.stringify(todos);

// Display the JSON string in the console
console.log(json);

// Parse JSON string back to JavaScript object
// JSON.parse() takes a JSON string and transforms it back into a JavaScript object
const parsed = JSON.parse(json);

// Display the parsed JavaScript object
console.log(parsed);
