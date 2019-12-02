'use strict';

const countTotalSalary = employees => {
  const values = Object.values(employees);
  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  return sum;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
);