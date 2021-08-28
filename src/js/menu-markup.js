import menuItemsTemplate from '../templates/menu-items';
import menu from '../db/menu';

menuList.innerHTML = menuItemsTemplate(menu);
