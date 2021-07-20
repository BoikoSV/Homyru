/**
 * Переключение пунктов меню
 */

const { menu } = require('./globalVariables');

menu.addEventListener('click', function(event){
    if(event.target.closest('.menu__item')){
        menu.querySelector('.menu__item--active').classList.remove('menu__item--active');
        event.target.closest('.menu__item').classList.add('menu__item--active');
    }
})