const date = new Date(8, 30, 2025, 12, 30, 0);
const hour = date.getHours();

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

// Nested if statements
if (hour < 12) {
  console.log('Good Morning');
  if (hour === 6) {
    console.log('Wake up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
  if (hour === 12) {
    console.log('Time for lunch');
  }
}
