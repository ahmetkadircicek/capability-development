// const user = 'John';

(function () {
  const user = 'Ahmet';
  console.log(user);
  const hello = () => {
    console.log('Hello');
  };
  hello();
})();

(function (name) {
  const hello = () => {
    console.log(`Hello ${name}`);
  };
  hello();
})('Shawn');
