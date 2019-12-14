const counterValue = document.getElementById('value');
const decreaseBtn = document.querySelector("[data-action='decrement']");
const increaseBtn = document.querySelector("[data-action='increment']");

class Counter {
  constructor(initValue = 0, step = 1) {
    this.value = initValue;
    this.step = step;
  }
  increment() {
    this.value += this.step;
  }
  decrement() {
    this.value -= this.step;
  }
}

const counter = new Counter();
const updateValue = () => {
  counterValue.textContent = counter.value;
};

increaseBtn.onclick = () => {
  counter.increment();
  updateValue();
};

decreaseBtn.onclick = () => {
  counter.decrement();
  updateValue();
};

// This was the first variant
// let count = 0;
// const increment = function(e) {
//   count += 1;
//   counterValue.textContent = count;
// };

// increaseBtn.addEventListener('click', increment);

// const decrement = function(e) {
//   count -= 1;
//   counterValue.textContent = count;
// };

// decreaseBtn.addEventListener('click', decrement);