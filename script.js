console.log(Date());
const newYears = "1 jan 2023";

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');



function countdown(){
    const newYearsDate = new Date(newYears);

    const currentDate = new Date();

    const totalSeconds = new Date(newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) %60;

    // console.log(newYearsDate - currentDate);
    // console.log(days, hours, minutes, seconds);

daysEl.innerHTML = days;      
hoursEl.innerHTML = hours;
minsEl.innerHTML = minutes;
secondsEl.innerHTML = seconds;


}

countdown();

setInterval(countdown, 1000);































