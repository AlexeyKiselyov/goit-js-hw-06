const input = document.querySelector('#name-input');

const text = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {   

    text.textContent = event.target.value;
      
    if (!text.textContent) {
    text.textContent = 'Anonymous';   
  }
}