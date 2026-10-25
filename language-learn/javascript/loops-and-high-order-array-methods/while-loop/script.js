let i = 0;

while (i < 10) {
  // console.log(i);
  i++;
}

// Nested while loop

let j = 0;

while (j < 2) {
  console.log(j);
  j++;
  let k = 0;
  while (k < 2) {
    console.log(k);
    k++;
  }
}

do {
  console.log(i);
  i++;
} while (i < 10);
