import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
  const arr = users.filter(user => user.eyeColor === color);
  return arr;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]