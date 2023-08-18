import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// HTML ELEMENTS
const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");


startBtn.setAttribute("disabled", true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0] < options.defaultDate) {
        Notiflix.Notify.warning('Please choose a date in the future', {position: "center-top", fontSize: '18px', width: "360px"});
      }
      if(selectedDates[0] > options.defaultDate) {
        startBtn.removeAttribute("disabled");
      }
    },
  };

  flatpickr(input, options);

  // TIMER

  startBtn.addEventListener("click", onStart);
 
  function onStart () {
  startBtn.setAttribute("disabled", true);
  
  const date = new Date (input.value);
  let timer = date.getTime() - options.defaultDate.getTime();
 
  
  const id = setInterval(() => {
    timer -= 1000;
    const timerConverter = convertMs(timer);
    
    days.textContent = addLeadingZero(timerConverter.days);
    hours.textContent = addLeadingZero(timerConverter.hours);
    minutes.textContent =  addLeadingZero(timerConverter.minutes);
    seconds.textContent = addLeadingZero(timerConverter.seconds);

    if (timer < 1000) {
     clearInterval(id);
    }
  }, 1000)
 }

  // CONVERTER

 function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
  }
  
 