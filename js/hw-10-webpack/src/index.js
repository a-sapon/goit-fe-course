import './styles.css';

import data from './menu.json';
import menuTemplate from './templates/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuList: document.querySelector('.js-menu'),
  switchBtn: document.querySelector('.js-switch-input'),
};

createMarkup(data, menuTemplate, refs.menuList);

function createMarkup(dataArray, template, refParent) {
  const markup = dataArray.reduce((acc, currentItem) => {
    return (acc += template(currentItem));
  }, '');
  return refParent.insertAdjacentHTML('beforeend', markup);
}

refs.switchBtn.addEventListener('click', changeTheme);

function changeTheme(e) {
  if (e.currentTarget.checked) {
    setDarkClass();
    localStorage.setItem('Theme', Theme.DARK);
    localStorage.removeItem(Theme.LIGHT);
  } else if (!e.currentTarget.checked) {
    setLightClass();
    localStorage.setItem('Theme', Theme.LIGHT);
    localStorage.removeItem(Theme.DARK);
  }
}

const savedTheme = localStorage.getItem('Theme');
document.addEventListener('DOMContentLoaded', storage);

function storage() {
  if (savedTheme === Theme.DARK) {
    setDarkClass();
    refs.switchBtn.setAttribute('checked', true);
  } else if (savedTheme === Theme.LIGHT) {
    setLightClass();
    refs.switchBtn.removeAttribute('checked');
  }
}

function setDarkClass() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
}

function setLightClass() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
}