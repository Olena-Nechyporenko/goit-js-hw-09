import Notiflix from 'notiflix'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");

form.addEventListener("submit", onSubmit);

const {delay, step, amount} = form.elements;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
   const shouldResolve = Math.random() > 0.3; 
  if (shouldResolve) {
   resolve({position, delay});
  } else {
   reject({position, delay});
  }
}, delay)
})
}

function onSubmit(evt) {
  evt.preventDefault();
  const amountOfPromise = amount.value;
  const delayStep = Number(step.value);
  let firstDelay = Number(delay.value);
  
  for (let position = 1; position <= amountOfPromise; position += 1) {
  firstDelay += delayStep;

  if (position === 1) {
    firstDelay = Number(delay.value);
  };
  createPromise(position, firstDelay)
  .then(( {position, delay} ) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {fontSize: '18px', width: "360px"})
  })
  .catch(( {position, delay} ) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {fontSize: '18px', width: "360px"})
  })
  }
  };
 



