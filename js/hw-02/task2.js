'use strict';

// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию 
// calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) 
// и цену гравировки одного слова, и возвращающую цену гравировки.

const task2 = () => {
  // ===== Variant 1 =====
  const calculateEngravingPrice = (message, pricePerWord) => {
    const words = message.split(' ');
    const result = pricePerWord * words.length;
    console.log(result);
  };

  // ===== Variant 2 =====
  // const calculateEngravingPrice = function(message, pricePerWord) {
  //   const words = message.split(' ');
  //   let wordsNumber = 0;
  //   for (let i = 0; i < words.length; i += 1) {
  //     wordsNumber += 1;
  //   }
  //   let result = wordsNumber * pricePerWord;
  //   console.log(result);
  // }

  calculateEngravingPrice('Donec orci lectus aliquam est', 40);
  calculateEngravingPrice('Donec orci lectus aliquam est', 20);
};