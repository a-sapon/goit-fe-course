const refs = {
  counterValue: document.getElementById('value'),
  decreaseBtn: document.querySelector("[data-action='decrement']"),
  increaseBtn: document.querySelector("[data-action='increment']")
};

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
  refs.counterValue.textContent = counter.value;
};

refs.increaseBtn.onclick = () => {
  counter.increment();
  updateValue();
};

refs.decreaseBtn.onclick = () => {
  counter.decrement();
  updateValue();
};

// This was the first variant
// let count = 0;
// const increment = function(e) {
//   count += 1;
//   refs.counterValue.textContent = count;
// };

// refs.increaseBtn.addEventListener('click', increment);

// const decrement = function(e) {
//   count -= 1;
//   refs.counterValue.textContent = count;
// };

// refs.decreaseBtn.addEventListener('click', decrement);