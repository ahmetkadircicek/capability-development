function debounce(func, delay) {
    // Part 1: Initialization
    console.log('Part 1: Debounce function initialized');
    let timeoutId;
    console.log('Part 1: timeoutId variable created:', timeoutId);

    // Part 2: Return the wrapper function
    console.log('Part 2: Creating and returning the wrapper function');
    return (function () {
        return function (...args) {
            // Part 3: Wrapper function execution
            console.log('Part 3: Wrapper function called with args:', args);
            console.log('Part 3: Current timeoutId before clearing:', timeoutId);

            // Part 4: Clear any existing timeout
            clearTimeout(timeoutId);
            console.log('Part 4: Previous timeout cleared');

            // Part 5: Set new timeout
            console.log('Part 5: Setting new timeout with delay:', delay);
            timeoutId = setTimeout(() => {
                // Part 6: Timeout callback execution
                console.log('Part 6: Timeout completed after', delay, 'ms');
                console.log('Part 6: About to execute the original function');

                // Part 7: Execute original function
                console.log('Part 7: Applying original function with context and args');
                func.apply(this, args);
                console.log('Part 7: Original function execution completed');
            }, delay);
            console.log('Part 5: New timeoutId set:', timeoutId);
        };
    })();
}

// Create a debounced function
const debouncedFunction = debounce(function () {
    console.log('Debounced function executed!');
}, 1000);

// Call the debounced function
debouncedFunction('test argument');
