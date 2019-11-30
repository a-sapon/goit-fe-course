'use strict';

function task6() {
  let input;
  let total = 0;

  // do {
  //   input = Number(prompt('Please enter a number.'));
  //   if (!isNaN(input)) {
  //     total += input;
  //   } else {
  //     alert('Wrong input! Please enter a NUMBER');
  //   }
  // } while (input !== 0);

  // alert(`Total amount of your inputs is ${total}`);

  do {
    input = prompt('Please enter a number.');
    if(input === null) {
      break;
    } else if(!isNaN(input)) {
      input = Number(input);
      total += input;
    }
  } while (true);
  
  alert(`Total amount of your inputs is ${total}`);
}