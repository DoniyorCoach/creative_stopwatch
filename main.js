//Time
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let millisecond = document.querySelector('.millisecond');

//Btns
let startBtn = document.querySelector('.start');
let resetBtn = document.querySelector('.reset');
let stopBtn = document.querySelector('.stop');

// Interval Variable
let clickCounter = 0;
let intervalSecond;
let intervalMillisecond;
let intervalminute;
let intervalhour;

// BTNS EVENTS
startBtn.addEventListener('click', startSekundomer);
resetBtn.addEventListener('click', restartSekundomer);
stopBtn.addEventListener('click', stopSekundomer);

function startSekundomer() {
    if (clickCounter == 0) {
        startBtn.style.backgroundColor = "orange";

        startBtn.style.fontWeight = "bolder";
        startBtn.textContent = '| |';
        resetBtn.style.opacity = "100%";
        stopBtn.style.opacity = "100%";
        resetBtn.removeAttribute('disabled');
        stopBtn.removeAttribute('disabled');

        // millisecond and second interval
        intervalMillisecond = setInterval(function () {
            millisecond.textContent = addZero(Number(millisecond.textContent) + 1);

            if (this.outerWidth > 1700 && this.outerWidth < 2500) startBtn.style.fontSize = "26px";
            else if (this.outerWidth > 1200 && this.outerWidth <= 1700) startBtn.style.fontSize = "22px";
            else if (this.outerWidth > 1000 && this.outerWidth <= 1200) startBtn.style.fontSize = "19px";
            else if (this.outerWidth > 700 && this.outerWidth <= 1000) startBtn.style.fontSize = "17px";
            else if (this.outerWidth > 400 && this.outerWidth <= 700) startBtn.style.fontSize = "15px";
            else if (this.outerWidth > 200 && this.outerWidth <= 400) startBtn.style.fontSize = "14px";

            //head tag "title" description
            document.querySelector('title').textContent = `${hour.textContent}:${minute.textContent}:${second.textContent}`;

            if (millisecond.textContent == "100") {
                second.textContent = addZero(Number(second.textContent) + 1);
                millisecond.textContent = "00";
            }
            if (second.textContent == 60) {
                second.textContent = "00";
            }
        }, 10);

        // minute interval
        intervalminute = setInterval(function () {
            minute.textContent = addZero(Number(minute.textContent) + 1);
            if (minute.textContent == "60") {
                minute.textContent = "00";
            }
        }, 1000 * 60);

        // hour interval
        intervalhour = setInterval(function () {
            hour.textContent = addZero(Number(hour.textContent) + 1);
            if (hour.textContent == "100") {
                zeroing();
            }
            
        }, 1000 * 60 * 60);

        clickCounter += 1;
    } else if (clickCounter == 1) {
        startBtn.style.backgroundColor = "greenyellow";
        startBtn.textContent = '►';
        startBtn.style.fontWeight = 500;

        clearIntervalValues();
        clickCounter -= 1;
    }
}

function restartSekundomer() {
    if (clickCounter == 1) clickCounter -= 1;
    zeroing();
    clearIntervalValues();
    startSekundomer();
}

function stopSekundomer() {
    zeroing();
    stopBtn.style.opacity = "30%";
    document.querySelector('title').textContent = `${hour.textContent}:${minute.textContent}:${second.textContent}`;
    if (clickCounter == 0) clickCounter += 1;
    startSekundomer();
}

function clearIntervalValues() {
    clearInterval(intervalSecond);
    clearInterval(intervalMillisecond);
    clearInterval(intervalminute);
    clearInterval(intervalhour);
}

function zeroing() {
    millisecond.textContent = "00";
    second.textContent = "00";
    minute.textContent = "00";
    hour.textContent = "00";
}

function addZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`
    } else return num;
}