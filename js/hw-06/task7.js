import users from './users.js';

const calculateTotalBalance = users => {
  const sum = users.reduce((acc, obj) => acc + obj.balance, 0)
  return sum;
};

console.log(calculateTotalBalance(users)); // 20916