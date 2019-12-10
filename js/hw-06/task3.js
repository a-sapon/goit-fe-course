import users from './users.js';

const getUsersWithGender = (users, gender) => {
  const resultArray = users.filter(user => user.gender === gender);
  return resultArray;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]