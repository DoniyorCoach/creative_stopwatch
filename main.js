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
        startBtn.style.fontSize = "20px";
        startBtn.style.fontWeight = "bolder";
        startBtn.textContent = '| |';
        resetBtn.style.opacity = "100%";
        stopBtn.style.opacity = "100%";
        resetBtn.removeAttribute('disabled');
        stopBtn.removeAttribute('disabled');

        // millisecond and second interval
        intervalMillisecond = setInterval(function () { 
            millisecond.textContent = Number(millisecond.textContent) + 1;

            document.querySelector('title').textContent = `${hour.textContent}:${minute.textContent}:${second.textContent}`;

            switch (millisecond.textContent) {
                case "1": millisecond.textContent = "01"; break;
                case "2": millisecond.textContent = "02"; break;
                case "3": millisecond.textContent = "03"; break;
                case "4": millisecond.textContent = "04"; break;
                case "5": millisecond.textContent = "05"; break;
                case "6": millisecond.textContent = "06"; break;
                case "7": millisecond.textContent = "07"; break;
                case "8": millisecond.textContent = "08"; break;
                case "9": millisecond.textContent = "09"; break;
                case "100": 
                    second.textContent = Number(second.textContent) + 1;
                    millisecond.textContent = "00";
                    switch (second.textContent) {
                        case "1": second.textContent = "01"; break;
                        case "2": second.textContent = "02"; break;
                        case "3": second.textContent = "03"; break;
                        case "4": second.textContent = "04"; break;
                        case "5": second.textContent = "05"; break;
                        case "6": second.textContent = "06"; break;
                        case "7": second.textContent = "07"; break;
                        case "8": second.textContent = "08"; break;
                        case "9": second.textContent = "09"; break;
                        case "60": second.textContent = "00"; break;
                    }
                break;
            }
        }, 10);

        // minute interval
        intervalminute = setInterval(function () {
            minute.textContent = Number(minute.textContent) + 1;
            switch (minute.textContent) {
                case "1": minute.textContent = "01"; break;
                case "2": minute.textContent = "02"; break;
                case "3": minute.textContent = "03"; break;
                case "4": minute.textContent = "04"; break;
                case "5": minute.textContent = "05"; break;
                case "6": minute.textContent = "06"; break;
                case "7": minute.textContent = "07"; break;
                case "8": minute.textContent = "08"; break;
                case "9": minute.textContent = "09"; break;
                case "60": minute.textContent = "00"; break;
            }
        }, 1000 * 60);

        // hour interval
        intervalhour = setInterval(function () {
            hour.textContent = Number(hour.textContent) + 1;

            switch (hour.textContent) {
                case "1": hour.textContent = "01"; break;
                case "2": hour.textContent = "02"; break;
                case "3": hour.textContent = "03"; break;
                case "4": hour.textContent = "04"; break;
                case "5": hour.textContent = "05"; break;
                case "6": hour.textContent = "06"; break;
                case "7": hour.textContent = "07"; break;
                case "8": hour.textContent = "08"; break;
                case "9": hour.textContent = "09"; break;
            } 
        }, 1000 * 60 * 60);

        clickCounter += 1;
    } else if (clickCounter == 1) {
        startBtn.style.backgroundColor = "greenyellow";
        startBtn.textContent = '►';
        startBtn.style.fontSize = "32px";
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
