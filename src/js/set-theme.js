import themes from './themes';

const { LIGHT, DARK } = themes;

export default function setTheme(isThemeSwitchChecked) {
  document.body.classList.add(isThemeSwitchChecked ? DARK : LIGHT);
  document.body.classList.remove(isThemeSwitchChecked ? LIGHT : DARK);

  localStorage.setItem('theme', isThemeSwitchChecked ? DARK : LIGHT);
}
