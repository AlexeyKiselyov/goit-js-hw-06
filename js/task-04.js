let counterValue = 0;

const btnDecrEl = document.querySelector('[data-action="decrement"]');

const btnIncrEl = document.querySelector('[data-action="increment"]');

const spanEl = document.querySelector('#value');

btnDecrEl.addEventListener('click', decrCounterValue);
btnIncrEl.addEventListener('click', incrCounterValue);

function decrCounterValue() {;
  counterValue -= 1;  
  spanEl.textContent = counterValue;
};

function incrCounterValue() {  
  counterValue += 1;  
  spanEl.textContent = counterValue;
};