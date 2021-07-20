const { menu } = require('./globalVariables');

const menuItems = menu.querySelectorAll('.menu__item')
let itemWidth = (menuItems.length / 2) + 1;
console.log(itemWidth);
document.body.style.setProperty('--item-count', itemWidth)
// window.addEventListener('resize', function(){
//     if(document.documentElement.offsetWidth <= 1025){
//         document.body.style.setProperty('--item-width', itemWidth)
//     }
// })