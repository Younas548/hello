const countdownElement = document.getElementById('countdown');
const messageElement = document.getElementById('message');

// Set the target time to midnight
const targetTime = new Date();
targetTime.setHours(24, 0, 0, 0); // Midnight of the current day

function updateCountdown() {
    const currentTime = new Date();
    const difference = targetTime - currentTime;

    if (difference <= 0) {
        clearInterval(timerInterval);
        countdownElement.style.display = 'none';
        messageElement.style.display = 'block';
        return;
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initialize immediately
