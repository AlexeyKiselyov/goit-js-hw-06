const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstItem = document.createElement('li');
firstItem.textContent = ingredients[0];
firstItem.classList.add('item');
// console.log(firstItem);

const secondItem = document.createElement('li');
secondItem.textContent = ingredients[1];
secondItem.classList.add('item');
// console.log(secondItem);

const thirdItem = document.createElement('li');
thirdItem.textContent = ingredients[2];
thirdItem.classList.add('item');
// console.log(thirdItem);

const fourItem = document.createElement('li');
fourItem.textContent = ingredients[3];
fourItem.classList.add('item');
// console.log(fourItem);

const fiveItem = document.createElement('li');
fiveItem.textContent = ingredients[4];
fiveItem.classList.add('item');
// console.log(fiveItem);

const sixItem = document.createElement('li');
sixItem.textContent = ingredients[5];
sixItem.classList.add('item');
// console.log(sixItem);

const list = document.querySelector('#ingredients');

list.append(firstItem, secondItem, thirdItem, fourItem, fiveItem, sixItem);

console.log(list);






