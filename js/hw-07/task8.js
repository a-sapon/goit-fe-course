const input = document.querySelector('input[type="number"]');
const boxesCountaiber = document.getElementById('boxes');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
let sizeIncrement = 0;

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBox() {
  const box = document.createElement('div');
  box.style.width = `${30 + sizeIncrement}px`;
  box.style.height = `${30 + sizeIncrement}px`;
  box.style.backgroundColor = colors[getRandomColor(colors.length - 1)];
  box.style.margin = '5px';
  return box;
}

function createBoxes(amount) {
  amount = Number(input.value);
  if (amount === 0) {
    return;
  }
  for (let i = 0; i < amount; i += 1) {
    const createdBox = createBox();
    boxesCountaiber.append(createdBox);
    sizeIncrement += 10;
  }
}

function destroyBoxes() {
  boxesCountaiber.innerHTML = '';
  input.value = 0;
  sizeIncrement = 0;
}

const colors = [
  'aqua',
  'aquamarine',
  'beige',
  'bisque',
  'black',
  'blanchedalmond',
  'blue',
  'blueviolet',
  'brown',
  'burlywood',
  'cadetblue',
  'chartreuse',
  'chocolate',
  'coral',
  'cornflowerblue',
  'cornsilk',
  'crimson',
  'cyan',
  'darkblue',
  'darkcyan',
  'darkgoldenrod',
  'darkgray',
  'darkgrey',
  'darkgreen',
  'darkkhaki',
  'darkmagenta',
  'darkolivegreen',
  'darkorange',
  'darkorchid',
  'darkred',
  'darksalmon',
  'darkseagreen',
  'darkslateblue',
  'darkslategray',
  'darkslategrey',
  'darkturquoise',
  'darkviolet',
  'deeppink',
  'deepskyblue',
  'dimgray',
  'dimgrey',
  'dodgerblue',
  'firebrick',
  'forestgreen',
  'fuchsia',
  'gainsboro',
  'gold',
  'goldenrod',
  'gray',
  'grey',
  'green',
  'greenyellow',
  'honeydew',
  'hotpink',
  'indianred ',
  'indigo ',
  'ivory',
  'khaki',
  'lavender',
  'lavenderblush',
  'lawngreen',
  'lemonchiffon',
  'lightblue',
  'lightcoral',
  'lightcyan',
  'lightgoldenrodyellow',
  'lightgray',
  'lightgrey',
  'lightgreen',
  'lightpink',
  'lightsalmon',
  'lightseagreen',
  'lightskyblue',
  'lightslategray',
  'lightslategrey',
  'lightsteelblue',
  'lightyellow',
  'lime',
  'limegreen',
  'linen',
  'magenta',
  'maroon',
  'mediumaquamarine',
  'mediumblue',
  'mediumorchid',
  'mediumpurple',
  'mediumseagreen',
  'mediumslateblue',
  'mediumspringgreen',
  'mediumturquoise',
  'mediumvioletred',
  'midnightblue',
  'mintcream',
  'mistyrose',
  'moccasin',
  'navy',
  'oldlace',
  'olive',
  'olivedrab',
  'orange',
  'orangered',
  'orchid',
  'palegoldenrod',
  'palegreen',
  'paleturquoise',
  'palevioletred',
  'papayawhip',
  'peachpuff',
  'peru',
  'pink',
  'plum',
  'powderblue',
  'purple',
  'rebeccapurple',
  'red',
  'rosybrown',
  'royalblue',
  'saddlebrown',
  'salmon',
  'sandybrown',
  'seagreen',
  'seashell',
  'sienna',
  'silver',
  'skyblue',
  'slateblue',
  'slategray',
  'slategrey',
  'springgreen',
  'steelblue',
  'tan',
  'teal',
  'thistle',
  'tomato',
  'turquoise',
  'violet',
  'wheat',
  'yell'
];
function getRandomColor(max) {
  return Math.round(Math.random() * max);
}