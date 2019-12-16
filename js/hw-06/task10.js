import users from './users.js';

//======================== Variant 1 =========================================
// const getSortedUniqueSkills = users => {
//   const newArr = [];
//   const uniqueArr = [];
//   users.forEach(user => {
//     newArr.push(...user.skills);
//   });
//   newArr.forEach(elem => {
//     if (!uniqueArr.includes(elem)) {
//       uniqueArr.push(elem);
//     }
//   });
//   return uniqueArr.sort();
//   // return [...new Set(newArr)];
// };

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

//====================== Variant 2 ===========================================
// const skillsArr = users.map(user => user.skills);
// const newArr = [];
// skillsArr.forEach(arr => newArr.push(...arr));
// const getSortedUniqueSkills = newArr
//   .filter((value, idx, arr) => arr.indexOf(value) === idx)
//   .sort();

// console.log(getSortedUniqueSkills);

//====================== Variant 3 ===========================================
const getSortedUniqueSkills = users.reduce( (acc, currentItem) => {
  acc.push(...currentItem.skills);
  return acc;
}, [] ).filter( (item, idx, arr) => arr.indexOf(item) === idx ).sort()

console.log(getSortedUniqueSkills);