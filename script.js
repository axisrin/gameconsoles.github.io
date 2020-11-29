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

let color = '#00d2d2';
let times = setTimeout( function () {
    $('.content__header h1').css('box-shadow', '0px 2px 0px 0px' + color);
}, 0)

let timer = setInterval(function () {
    if (color === '#00d2d2') {
            color = '#ff6e91';
        } else if (color === '#ff6e91') {
            color = '#00d2d2';
        }
        $('.content__header h1').css('box-shadow', '0px 2px 0px 0px' + color);
    }, 3100);


