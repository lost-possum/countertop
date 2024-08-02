// CounterTop - version 0.0.1-alpha

// Author: Viihna Leraine (reach me at viihna@ViihnaTech.com / viihna.78 (Signal) / Viihna-Lehraine (Github))

// Licensed under GNU GPLv3 (https://www.gnu.org/licenses/gpl-3.0.html)

// All code herein is STRICTLY free (as in freedom). You may use this code for any purpose EXCEPT for the creation of proprietary derivatives. I encourage you to improve on my code or to include it in other projects if you find it helpful! I only ask that you show me what you did so that I can observe and learn.

// This program comes with ABSOLUTELY NO WARRANTY OR GUARANTEE OF ANY KIND


// BEGIN CODE


// Submit Button Event
document.getElementById('menu-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let timeDelay = document.getElementById('time-delay').value;
    timeDelay = parseInt(timeDelay, 10);
});


// Main Counter Function
function counterTop(timeDelay) {
    let counterBox = document.getElementById('counter-box-number').querySelector('p');
    let counter = parseInt(counterBox.textContent);

    setInterval(() => {
        counter++;
        counterBox.textContent = counter;
    }, timeDelay);
}