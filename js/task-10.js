const createBtn = document.querySelector('[data-create]');

const destroyBtn = document.querySelector('[data-destroy]');

const box = document.querySelector('#boxes');

const input = document.querySelector('input');

createBtn.addEventListener('click', onCreateBoxes);

destroyBtn.addEventListener('click', onDestroy);

function onCreateBoxes() {
  let amount = Number(input.value);
  createBoxes(amount);
}

function onDestroy() {
  box.innerHTML = '';
  input.value = '';
}

function createBoxes(amount) {
  let size = 30;
  let arr = [];
  for (let i = 1; i <= amount; i += 1) {
    const randomColor = getRandomHexColor();
    let string = `<div style= "width: ${size}px; height: ${size}px; background-color: ${randomColor};" ></div> `;
    size += 10;
    arr.push(string);
  }
  const stringFinal = arr.join('');
  box.insertAdjacentHTML('beforeend', stringFinal);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
