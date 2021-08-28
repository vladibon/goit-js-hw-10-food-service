import refs from './refs';
import themes from './themes';
import setTheme from './set-theme';

refs.themeSwitch.checked = localStorage.getItem('theme') === themes.DARK;

setTheme(refs.themeSwitch.checked);

refs.themeSwitch.addEventListener('change', e => setTheme(e.target.checked));
