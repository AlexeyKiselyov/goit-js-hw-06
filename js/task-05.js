const input = document.querySelector('#name-input');
// console.log(input);

const text = document.querySelector('#name-output');
// console.log(text);

input.addEventListener('input', onInputChange);

function onInputChange(event) {   

    text.textContent = event.target.value;
    // console.log(Boolean(text.textContent));
  
    if (!text.textContent) {
    text.textContent = 'Anonymous';
    // console.log(Boolean(text.textContent));
  }
}