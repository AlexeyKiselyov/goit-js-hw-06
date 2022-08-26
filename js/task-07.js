const inputEl = document.querySelector('#font-size-control');

const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onSizeChange);

function onSizeChange(e) {  
  let fontSizeNumber = e.target.value;  
  
  spanEl.style.fontSize = fontSizeNumber+'px'; 
}