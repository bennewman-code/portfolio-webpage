const targetDate = new Date('April 13, 2029 17:34:54').getTime();
const countdownElement = document.getElementById('countdown');

function updateTimer() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining < 0) {
        countdownElement.innerHTML = "Countdown complete!";
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const timerInterval = setInterval(updateTimer, 1000);
