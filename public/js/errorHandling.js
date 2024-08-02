// CounterTop - version 0.0.1-alpha
// Author: Viihna Leraine (reach me at viihna@ViihnaTech.com / viihna.78 (Signal) / Viihna-Lehraine (Github))
// Licensed under GNU GPLv3 (https://www.gnu.org/licenses/gpl-3.0.html)

// BEGIN CODE



function fibonacciErrorHandling() {
    if (decrease) {
        alert('Cannot use Fibonacci step with decreasing values');
        console.error('fibonacciStep() - cannot use Fibonacci step with decreasing values');
        return;
    }

    if (!increase && !decrease) {
        console.error('fibonaccStep() - unknown error; increase and decrease are both false. This should not occur. Please debug');
    }
};


export { fibonacciErrorHandling };