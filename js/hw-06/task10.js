import users from './users.js';

const getSortedUniqueSkills = users => {
  const newArr = [];
  const uniqueArr = [];
  users.forEach(user => {
    newArr.push(...user.skills);
  });
  newArr.forEach(elem => {
    if (!uniqueArr.includes(elem)) {
      uniqueArr.push(elem);
    }
  });
  return uniqueArr.sort();
  // return [...new Set(newArr)];
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]