let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');
let header = document.querySelector('.header');

header__burger.onclick = function(){
    if (header__burger.classList.contains('active') === false)
    {
        header__burger.classList.toggle('active');
        header_menu.classList.toggle('active');
        back.classList.toggle('lock');
    }
    else {
        header__burger.classList.remove('active');
        header_menu.classList.remove('active');
        back.classList.remove('lock');
    }
}

header__list.onclick = function () {
    back.classList.remove('lock');
}

