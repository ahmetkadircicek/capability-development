function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        let innerVariable = 'I am from inner function';
        console.log(outerVariable);
        console.log(innerVariable);
    }

    return innerFunction;
}

innerFunction();