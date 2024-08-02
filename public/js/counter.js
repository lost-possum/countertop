// CounterTop - version 0.0.1-alpha
// Author: Viihna Leraine (reach me at viihna@ViihnaTech.com / viihna.78 (Signal) / Viihna-Lehraine (Github))
// Licensed under GNU GPLv3 (https://www.gnu.org/licenses/gpl-3.0.html)

// BEGIN CODE



import { fibonacciErrorHandling } from "./export.js";


// Fibonacci Counter
function fibonacciStep(counterBox, startingValue, endingValue, increase, decrease) {
    if (increase) {
        let fibStart = startingValue;
        let fibSequence = [ fibStart, (fibStart + 1) ];
        let index = 0;

        updateFibonacci(counterBox);

        // Initialize the counterBox with the starting value
        counterBox.textContent = fibStart;

        // Set an interval to update the Fibonacci sequence
        const intervalId = setInterval(updateFibonacci, timeDelay);
    }

    fibonacciErrorHandling();
};


// Update Fibonacci counter
function updateFibonacci(counterBox) {
    if (index < fibSequence.length) {
        counterBox.textContent = fibSequence[index];
        index++;
    } else {
        let nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length -2];

        // stops the counter if next Fib output would be higher than endingValue
        if (nextFib > endingValue) {
            clearInterval(intervalId);
            return;
        }

        fibSequence.push(nextFib);

        counterBox.textContent = nextFib;
        index++;
    }
};


// Main Counter Function
function counterTop(counterBox, timeDelay) {
    let counter = parseFloat(counterBox.textContent);

    setInterval(() => {
        counter++;
        counterBox.textContent = counter;
    }, timeDelay);
};


export { fibonacciStep, updateFibonacci, counterTop };