'use strict';

// Напиши скрипт со следующим функционалом:
// - При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// - Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
// пока пользователь не нажмет Cancel в prompt.
// - После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
// необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.

const task6 = () => {
  let input;
  const numbers = [];
  let total = 0;

  do {
    input = prompt('Please enter a number.');
    numbers.push(Number(input));
  } while (input !== null);

  if (numbers.length !== 0) {
    for (let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
    console.log(`Общая сумма чисел равна ${total}`);
  }
};