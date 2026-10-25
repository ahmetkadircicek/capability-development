// Initialize an array with values 1 through 5
const arr = [1, 2, 3, 4, 5];

// Add element 6 to the end of the array
arr.push(6);
console.log(arr);

// Remove the last element from the array
arr.pop();
console.log(arr);

// Add element 0 to the beginning of the array
arr.unshift(0);
console.log(arr);

// Remove the first element from the array
arr.shift();
console.log(arr);

// Reverse the order of elements in the array
arr.reverse();
console.log(arr);

// Sort the array elements (default string comparison)
arr.sort();
console.log(arr);

// Sort the array in ascending numerical order
arr.sort((a, b) => a - b);
console.log(arr);

// Sort the array in descending numerical order
arr.sort((a, b) => b - a);
console.log(arr);

// Check if the array includes the value 3 (returns true or false)
x = arr.includes(3);
console.log(x);

// Find the index of the value 3 in the array
x = arr.indexOf(3);
console.log(x);

// Join all array elements into a string with '-' as separator
x = arr.join('-');
console.log(x);

// Create a new array with elements from index 1 to 2 (not including 3)
x = arr.slice(1, 3);
console.log(x);

// Remove 3 elements starting from index 2 and return removed elements
x = arr.splice(2, 3);
console.log(x);

// Insert 'a' and 'b' at index 1 without removing any elements (returns empty array)
x = arr.splice(1, 0, 'a', 'b');
console.log(x);

// Remove 3 elements starting from index 1 and insert 'a' and 'b' instead
x = arr.splice(1, 3, 'a', 'b');
console.log(x);

// Remove 3 elements starting from index 1 and insert 'a' and 'b' instead
x = arr.splice(1, 3, 'a', 'b');
console.log(x);

// Remove 4 elements starting from index 1, reverse them, convert to string, and get first character
x = arr.splice(1, 4).reverse().toString().charAt(0);
console.log(x);

// Remove 4 elements starting from index 1, reverse them, and join with '-' separator
x = arr.splice(1, 4).reverse().join('-');
console.log(x);
