const countProps = obj => {
  let keys = Object.keys(obj);
  let total = 0;
  for (let i = 0; i < keys.length; i += 1) {
    total += 1;
  }
  return total;
};

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3