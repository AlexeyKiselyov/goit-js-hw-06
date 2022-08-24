const categories = document.querySelectorAll('.item');
// console.log(categories);
console.log("Number of categories:", categories.length);

const tites = document.querySelectorAll('#categories h2');
// console.log(tites);
const firstElement = tites[0].nextElementSibling.children.length;
// console.log(firstElement);
const secondtElement = tites[1].nextElementSibling.children.length;
// console.log(secondtElement);
const thirdElement = tites[2].nextElementSibling.children.length;
// console.log(thirdElement);

console.log('Category:', tites[0].textContent);
console.log('Elements:', firstElement);

console.log('Category:', tites[1].textContent);
console.log('Elements:', secondtElement);

console.log('Category:', tites[2].textContent);
console.log('Elements:', thirdElement);