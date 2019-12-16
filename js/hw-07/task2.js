const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы'
];

const list = document.getElementById('ingredients');

// const addLi = function(arr) {
// let htmlToIncert = '';
//   arr.forEach(element => {
//     htmlToIncert += `<li>${element}</li>`
//   });
//   list.insertAdjacentHTML('afterbegin', htmlToIncert)
// };

// addLi(ingredients);

const addLi = function(array) {
  const htmlToInsert = array.reduce((acc, value) => {
    return (acc += `<li>${value}</li>`);
  }, '');
  list.insertAdjacentHTML('afterbegin', htmlToInsert);
};

addLi(ingredients);