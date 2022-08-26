const inputEl = document.querySelector('#font-size-control');
// console.log(inputEl);

const spanEl = document.querySelector('#text');
// console.log(spanEl);

inputEl.addEventListener('input', onSizeChange);

function onSizeChange(evt) {  
  let fontSizeNumber = evt.target.value;
  console.log(fontSizeNumber);
  
  spanEl.style.fontSize = fontSizeNumber+'px'; 
}