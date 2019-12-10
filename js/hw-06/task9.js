import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  const sorted = users.sort((a, b) => a.friends.length < b.friends.length ? -1 : 1);
  return sorted;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]