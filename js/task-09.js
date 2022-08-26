const buttonChangeColor = document.querySelector('.change-color');

const spanColor = document.querySelector('.color');

const body = document.querySelector('body');

buttonChangeColor.addEventListener('click', onColorChange)

function onColorChange(e) {
  const randomColor = getRandomHexColor(); 
  
  body.style.backgroundColor = randomColor;

  spanColor.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
