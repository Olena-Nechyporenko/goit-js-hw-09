const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener("click", onStart);
stopBtn.addEventListener("click", onStop);

stopBtn.setAttribute("disabled", true);

let timeInterval = null;

function onStart () {
timeInterval = setInterval(() => {
body.style.backgroundColor = getRandomHexColor();
}, 1000);
startBtn.setAttribute("disabled", true);
stopBtn.removeAttribute("disabled");
}

function onStop () {
    clearInterval(timeInterval);
    startBtn.removeAttribute("disabled");
    stopBtn.setAttribute("disabled", true);
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }