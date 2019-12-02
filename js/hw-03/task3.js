'use strict';

// VARIANT WITH Object.keys()
// const findBestEmployee = employees => {
//   const keys = Object.keys(employees);
//   let max = 0;
//   let name;
//   for (const key of keys) {
//     if (employees[key] > max) {
//       max = employees[key];
//       name = key;
//     }
//   }
//   return `[${name}] is the most productive employee, who completed [${max}] tasks`;
// };

// ПОЧЕМУ ЕСЛИ Я УБИРАЮ ПЕРЕМЕННУЮ МАКС, ТО НЕ ЗАПИСЫВАЕТСЯ ПРАВИЛЬНОЕ ИМЯ
// VARIANT WITH Object.entries()
const findBestEmployee = employees => {
  const entries = Object.entries(employees);
  let max = 0;
  let name;
  for (const [key, value] of entries) {
    if (value > max) {
      max = value;
      name = key;
    }
  }
  return `[${name}] is the most productive employee, who completed [${max}] tasks`;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
);