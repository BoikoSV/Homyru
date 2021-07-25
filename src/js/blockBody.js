const checkbox = document.querySelector('.menu__input');

checkbox.addEventListener('input', function(){
    if(this.checked){
        document.documentElement.style.maxHeight = '100vh';
        document.documentElement.style.overflow = 'hidden';
    }
})