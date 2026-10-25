const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'green',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colors = ['red', 'blue', 'green'];

for (const color in colors) {
  console.log(color);
}
