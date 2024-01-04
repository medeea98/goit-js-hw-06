const ulElements = document.querySelectorAll('#categories  .item');
console.log(`Number of categories: ${ulElements.length}`);

for (let i = 0; i < ulElements.length; i++) {
    const item = ulElements[i];
    const category = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('li').length;
    console.log(`Category: ${category}\nElements: ${elements}`);
}
