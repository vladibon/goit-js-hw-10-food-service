import menuItemsTemplate from '../templates/menu-items.hbs';
import menu from '../db/menu.json';
import refs from './refs.js';
import Theme from './themes.js';

refs.menuList.insertAdjacentHTML('beforeend', menuItemsTemplate(menu));

fetchTheme();

refs.themeSwitch.addEventListener('change', toggleTheme);

function fetchTheme() {
  const currnetTheme = localStorage.getItem('theme');

  switch (currnetTheme) {
    case Theme.DARK:
      document.body.classList.add(currnetTheme);
      refs.themeSwitch.checked = true;
      break;

    default:
      document.body.classList.add(Theme.LIGHT);
  }
}

function toggleTheme(e) {
  const isThemeSwitchChecked = e.target.checked;

  setStyles(isThemeSwitchChecked);
  saveTheme(isThemeSwitchChecked);
}

function setStyles(isThemeSwitchChecked) {
  document.body.classList.add(isThemeSwitchChecked ? Theme.DARK : Theme.LIGHT);
  document.body.classList.remove(isThemeSwitchChecked ? Theme.LIGHT : Theme.DARK);
}

function saveTheme(isThemeSwitchChecked) {
  localStorage.setItem('theme', isThemeSwitchChecked ? Theme.DARK : Theme.LIGHT);
}
