import users from './users.js';

const getUserWithEmail = (users, email) => {
  const foundUser = users.find(obj => {
    return obj.email === email;
  });
  return foundUser;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}