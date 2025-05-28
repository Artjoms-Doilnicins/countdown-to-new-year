const daysEl = document.querySelector('.days-number');
const hoursEl = document.querySelector('.hours-number');
const minutesEl = document.querySelector('.minutes-number');
const secondsEl = document.querySelector('.seconds-number');
const yearEl = document.querySelector('.year');

const closestNewYear = new Date().getFullYear() + 1;
document.title = `Countdown to New Year ${closestNewYear}`;
yearEl.textContent = closestNewYear;

const updateCountdown = () => {
    const getNewYearTime = new Date(
        `Jan 1, ${closestNewYear} 00:00:00`,
    ).getTime();
    const getCurrentTime = new Date().getTime();
    const gap = getNewYearTime - getCurrentTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const daysLeft = Math.floor(gap / day);
    const hoursLeft = Math.floor((gap % day) / hour);
    const minutesLeft = Math.floor((gap % hour) / minute);
    const secondsLeft = Math.floor((gap % minute) / second);

    daysEl.textContent = daysLeft;
    hoursEl.textContent = hoursLeft;
    minutesEl.textContent = minutesLeft;
    secondsEl.textContent = secondsLeft;

    setTimeout(updateCountdown, 1000);
};
updateCountdown();
