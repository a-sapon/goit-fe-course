const categories = document.getElementById('categories');
const listItems = document.querySelectorAll('.item');

const countCategoryItems = array =>
  `Количество категорий в ul#categories: ${array.length}`;
console.log(countCategoryItems(listItems));

// const array = Array.from(categories.children);

// array.forEach(child =>
//   console.log(`Категория: ${child.children[0].innerHTML}
//   Количество элементов: ${child.children[1].children.length}`)
// );

listItems.forEach(item =>
  console.log(
    `Категория: ${item.children[0].textContent}
  Количество элементов: ${item.children[1].children.length}`
  )
);