/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Target date: October 2, 2025, in GMT+1 (e.g., Central European Time)
const targetDate = new Date('2025-10-02T00:00:00+01:00').getTime();

if (!hoursEl || !minutesEl || !secondsEl) {
  console.error("Timer elements not found in the DOM.");
} else {
  const updateTimer = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      if (timerInterval) clearInterval(timerInterval);
      return;
    }

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24;
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  };

  // Update the timer every second
  const timerInterval = setInterval(updateTimer, 1000);

  // Initial call to display the timer immediately
  updateTimer();
}
