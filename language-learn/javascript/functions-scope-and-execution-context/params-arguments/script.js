function registerUser(user) {
  if (!user) {
    user = 'Guest';
  }

  return user + ' is now registered';
}

console.log(registerUser(''));

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Objects as params

function loginUser(user) {
  return `The user ${user.name} is logged in`;
}

console.log(loginUser({ name: 'John' }));

// Arrays as params

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
console.log(getRandom([1, 2, 3, 4, 5]));

function getRandom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}
getRandom(22, 33, 44, 55, 66, 77, 88, 99);
