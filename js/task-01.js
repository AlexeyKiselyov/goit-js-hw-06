const categories = document.querySelectorAll('.item');
console.log("Number of categories:", categories.length);

function massageCreator(arr) {
  arr.forEach(elm => { 
    const categoriTitle = elm.querySelector('h2');
    const category = categoriTitle.textContent;

    const items = elm.querySelectorAll('li');
    const elements = items.length;

    console.log(`Category: ${category}`);
    console.log(`Elements: ${elements}`);    
  });
}

massageCreator(categories);