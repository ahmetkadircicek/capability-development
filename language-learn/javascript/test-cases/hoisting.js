console.log(a);
var a = 10;
console.log(a);

try {
    console.log(b);
    let b = 20;
    console.log(b);
} catch (error) {
    console.error('ERROR:', error.message);
}

try {
    console.log(c);
    const c = 30;
    console.log(c);
} catch (error) {
    console.error('ERROR:', error.message);
}
