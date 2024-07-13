// CounterTop - version 0.0

// Author: Viihna Leraine (reach me at viihna@voidfucker.com / viihna.78 (Signal) / Lost-Possum (Github))

// Licensed under GNU GPLv3 (https://www.gnu.org/licenses/gpl-3.0.html)

// All code herein is STRICTLY free (as in freedom). You may use this code for any purpose EXCEPT for the creation of proprietary derivatives. I encourage you to improve on my code or to include it in other projects if you find it helpful! I only ask that you show me what you did so that I can observe and learn.

// This program comes with ABSOLUTELY NO WARRANTY OR GUARANTEE OF ANY KIND


// BEGIN CODE



// Initialize app once DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    infiniteCounter();
});


// Infinite Counter Function
function infiniteCounter() {
    let counterBox = document.getElementById('counter-box-number').querySelector('p');
    let counter = parseInt(counterBox.textContent);

    setInterval(() => {
        counter++;
        counterBox.textContent = counter;
    }, 1000); // Update every second
}