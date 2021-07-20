const { menu } = require('./globalVariables');
const cleseBtn = menu.querySelector('.menu__close-btn');
const checkbox = menu.querySelector('.menu__input');

cleseBtn.addEventListener('click', function(){
    checkbox.checked = false;
})