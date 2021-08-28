import themes from './themes';

const { PROP, LIGHT, DARK } = themes;

setTheme((themeSwitch.checked = localStorage.getItem(PROP) === DARK));

themeSwitch.onchange = e => setTheme(e.target.checked);

function setTheme(isThemeSwitchChecked) {
  document.body.classList.add(isThemeSwitchChecked ? DARK : LIGHT);
  document.body.classList.remove(isThemeSwitchChecked ? LIGHT : DARK);
  localStorage.setItem(PROP, isThemeSwitchChecked ? DARK : LIGHT);
}
