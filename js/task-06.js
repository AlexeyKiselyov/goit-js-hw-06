const inputEl = document.querySelector('#validation-input');
// console.log(inputEl);

inputEl.addEventListener('blur', onBlurInput);

function onBlurInput(event) {  
  console.log(event);

  if (event.target.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');    
    inputEl.classList.remove('invalid');
    return
  }

  inputEl.classList.add('invalid');
  inputEl.classList.remove('valid');
  return
}

