const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]')
};

const colorChanger = {
  isActive: false,
  start() {
    if (!this.isActive) {
      this.isActive = true;
      this.timerId = setInterval(() => {
        document.body.style.backgroundColor =
          colors[getRandomColor(colors.length)];
      }, 1000);
    }
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
    document.body.style.backgroundColor = '';
  }
};

refs.startBtn.addEventListener('click', colorChanger.start.bind(colorChanger));
refs.stopBtn.addEventListener('click', colorChanger.stop.bind(colorChanger));

function getRandomColor(max) {
  return Math.round(Math.random() * max);
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548'
];