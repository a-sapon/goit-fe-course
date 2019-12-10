import users from './users.js';

const getInactiveUsers = users => {
  const notActiveUsers = users.filter(user => !user.isActive);
  return notActiveUsers;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]