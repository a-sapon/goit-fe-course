import users from './users.js';

const getUserNames = users => {
  const user = users.map(elem => elem.name);
  return user;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]