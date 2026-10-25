let d;

d = new Date();

console.log(d, typeof d);

d = new Date(2021, 1, 10, 10, 10, 10);
console.log(d, typeof d);

d = new Date('2021-03-10T10:10:10');
console.log(d, typeof d);

d = new Date('2021-03-10T10:10:10Z');
console.log(d, typeof d);

d = Date.now();
console.log(d, typeof d);

d = new Date(1615544400000);
console.log(d, typeof d);
