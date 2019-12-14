const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы'
];

const addLi = function(arr) {
  arr.forEach(element => {
    const list = document.getElementById('ingredients');
    const listItem = document.createElement('li');
    listItem.innerText = element;
    list.appendChild(listItem);
  });
};

addLi(ingredients);