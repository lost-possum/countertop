// CounterTop - version 0.0.1-alpha

// Author: Viihna Leraine (reach me at viihna@ViihnaTech.com / viihna.78 (Signal) / Viihna-Lehraine (Github))

// Licensed under GNU GPLv3 (https://www.gnu.org/licenses/gpl-3.0.html)

// All code herein is STRICTLY free (as in freedom). You may use this code for any purpose EXCEPT for the creation of proprietary derivatives. I encourage you to improve on my code or to include it in other projects if you find it helpful! I only ask that you show me what you did so that I can observe and learn.

// This program comes with ABSOLUTELY NO WARRANTY OR GUARANTEE OF ANY KIND


// BEGIN CODE



import { fibonacciStep, counterTop } from "./export.js";


const counterBox = document.getElementById('counter-box-number').querySelector('p');
const plusOrMinusSelect = document.getElementById('step-plus-or-minus-dropdown');


// Submit Button Event
document.getElementById('menu-submit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let timeDelay = document.getElementById('time-delay').value;
    timeDelay = parseFloat(timeDelay);

    // timeDelay validation
    if (isNaN(timeDelay) || timeDelay < 0.00001 || timeDelay > 1000000) {
        alert('Please enter a valid time delay between 0.00001 and 1000000 seconds');
        console.error('Entered invalid time delay: ', timeDelay, ' seconds', ' type: ', (typeof timeDelay));
        return;
    }

    // fibonacci ?
    counterTop(counterBox, timeDelay);
});


// Set Starting Value Button Click Event
document.getElementById('set-starting-value-button').addEventListener('submit', function(e) {
    e.preventDefault();

    let startingValue = document.getElementBydId('starting-value').value;
    startingValue = parseFloat(startingValue);

    // startingValue validation
    if (isNaN(startingValue)) {
        alert('Please enter a number for your starting value');
        console.error('Entered invalid starting value: ', startingValue, ' type: ', (typeof startingValue));
    }

    return startingValue;
});


// Set Ending Value Button Click Event
document.getElementById('set-ending-value-button').addEventListener('submit', function(e) {
    e.preventDefault();

    let endingValue = document.getElementBydId('ending-value').value;
    endingValue = parseFloat(endingValue);

    // startingValue validation
    if (isNaN(endingValue)) {
        alert('Please enter a number for your ending value or select skip');
        console.error('Entered invalid starting value: ', startingValue, ' type: ', (typeof startingValue));
    }

    return startingValue;
});


// Set Counter Step Functionality Button Click Event
document.getElementById('set-counter-step-button').addEventListener('submit', function(e) {
    e.preventDefault();

    let plusOrMinus = plusOrMinusSelect.value;

    if (plusOrMinus == '+') {
        increase == true;
    } else if (plusOrMinus = '-') {
        decrease == true;
    } else if (plusOrMinus == '') {
        alert('Please select "+" or "-" befrore setting counter step');
        return;
    } else {
        console.error('Unexpected value parsed from #step-plus-or-minus-dropdown; terminating DOM event for this button');
        return;
    }

    console.log('increase = ', increase, ' , decrease = ', decrease);
});