import menuItemsTemplate from '../templates/menu-items';
import menu from '../db/menu';
import refs from './refs';

refs.menuList.insertAdjacentHTML('beforeend', menuItemsTemplate(menu));
