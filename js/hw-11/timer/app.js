class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.selector = document.querySelector(selector);
    this.refs = {
      days: this.selector.querySelector('[data-value="days"]'),
      hrs: this.selector.querySelector('[data-value="hours"]'),
      mins: this.selector.querySelector('[data-value="mins"]'),
      secs: this.selector.querySelector('[data-value="secs"]')
    };
    setInterval(this.calc.bind(this), 1000);
  }
  calc() {
    const currentDate = new Date();
    const time = this.targetDate - currentDate;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.refs.days.textContent = this.pad(days);
    this.refs.hrs.textContent = this.pad(hours);
    this.refs.mins.textContent = this.pad(mins);
    this.refs.secs.textContent = this.pad(secs);

    this.check(this.refs.days);
    this.check(this.refs.hrs);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  check(value) {
    if (Number(value.textContent) < 1) {
      value.parentElement.remove();
    }
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31 2019 23:59:00')
});

//=====================================================
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.5;
//     if (success) {
//       resolve('promise resolved');
//     } else {
//       reject('promise rejected');
//     }
//   }, 1000);
// });

// console.log(promise);

// promise.then(resolve, reject);

// function resolve(message) {
//   console.log(message);
// }
// function reject(error) {
//   console.log(`Our error: ${error}`);
// }

//================================================
// const cart = {
//   items: [
//     {id: 123456, name: 'Corn'},
//     {id: 652947, name: 'Snow'}
//   ],
//   add(itemName) {
//     return new Promise( (resolve, reject) => {
//       setTimeout(() => {
//         const item = {
//           id: Date.now(),
//           name: itemName
//         }
//         this.items.push(item);
//         resolve(item);
//       }, 1000);
//     } );
//   },
//   remove(id) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         cart.items = cart.items.filter(item => item.id !== id);
//         resolve(id);
//       }, 3000);
//     });
//   }
// };

// cart.add('Milk').then( addedItem => {
//   updateItem(addedItem);
// }).catch(error => {
//   console.log(error);
// })

// cart.remove(123456).then(id => {
//   updateAfterRemove(id);
// }).catch(error => {
//   console.log(error);
// })

// function updateItem(item) {
//   console.log(`Updating item ${item.name}, id: ${item.id}`)
// }

// function updateAfterRemove(id) {
//   console.log(`Removing item with id: ${id}`)
// }
//=================================================================

// const randomInteger = (min, max) => {
//   return Math.round(Math.random() * (max - min) + min);
// };

// const horses = ['Mango', 'Poly', 'Kiwi', 'Ajax'].map(name => ({
//   name,
//   raceTime: randomInteger(2000, 5000)
// }));

// const horse = {
//   name: 'Mango',
//   raceTime: randomInteger(1000, 5000)
// };

// const race = objHouse => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const crashed = Math.random() > 0.5;
//       if (crashed) {
//         reject({
//           objHouse,
//           errorMessage: 'crashed'
//         });
//       } else {
//         resolve(objHouse);
//       }
//     }, objHouse.raceTime);
//     resolve(objHouse);
//   });
// };

// race(horse)
//   .then(notifyWhenFinished)
//   .catch(error => {
//     console.log(`Oh no! ${error.objHouse.name} ${error.errorMessage}`);
//   });

// function notifyWhenFinished({ name, raceTime }) {
//   console.log(`House ${name} finished in ${raceTime} miliseconds!`);
// }
//========================================================================
