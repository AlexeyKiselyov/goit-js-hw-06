let counterValue = 0;

const btnDecrEl = document.querySelector('[data-action="decrement"]');
// console.log(btnDecrEl);

const btnIncrEl = document.querySelector('[data-action="increment"]');
// console.log(btnIncrEl);

const spanEl = document.querySelector('#value');
// console.log(spanEl);

btnDecrEl.addEventListener('click', decrCounterValue);
btnIncrEl.addEventListener('click', incrCounterValue);

function decrCounterValue(event) {
  // console.log('DecrBtn', event);
  counterValue -= 1;
  // console.log(counterValue);
  spanEl.textContent = counterValue;
};

function incrCounterValue(event) {
  // console.log('incrBtn', event);
  counterValue += 1;
  // console.log(counterValue);
  spanEl.textContent = counterValue;
};