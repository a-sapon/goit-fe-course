import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  const friend = users.filter(user => user.friends.includes(friendName));
  return friend;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]