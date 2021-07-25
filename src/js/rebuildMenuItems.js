const { menu } = require('./globalVariables');

const menuItems = menu.querySelectorAll('.menu__item')
let itemWidth = (menuItems.length / 2) + 1;
document.body.style.setProperty('--item-count', itemWidth)
