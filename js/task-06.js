const inputEl = document.querySelector('#validation-input');
// console.log(inputEl);

inputEl.addEventListener('blur', onBlurInput);

function onBlurInput() {  

  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');    
    inputEl.classList.remove('invalid');
    return
  }

  inputEl.classList.add('invalid');
  inputEl.classList.remove('valid');
  return
}
