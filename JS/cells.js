/*
$('article > div:last').after('<div></div><div></div>');
$('article > div:first').before('<div></div><div></div>') //добавить перед/после этой секции
$('article').append('<div></div>').prepend('<div></div>'); //добавить именно в этой секции
*/

/*$('article').hide(1000).show(1000);*/
$('article > div:odd').fadeOut(1000).fadeIn(1000);
$('article > div:even').fadeTo(1000, 0.5).fadeTo(1000, 1);
$('article').slideUp(1).slideDown(1000);

$('article > div').addClass('block');

$('.block').height(120);

/*function blockSize(el){
    let h = $(el).height();
    let w = $(el).width();
    $('article > div:eq(4)').text("Ширина: " + w + "\nВысота: " + h);
}
blockSize('article');*/

$('header').html('<h1 style="color: azure; text-align: center" >Hi, I\'m header</h1>');

function changeAttr(el, name, value){
    $(el).attr(name, value);
}

changeAttr('article > div:eq(1)', 'title', 'It\'s a 2-nd div-block');
/*$('article > div:eq(1)').removeAttr('title');*/

$('footer').text('Hi, I\'m footer').css({
    'color': 'azure',
    'font-size': '2em',
    'font-weight': 'bold',
    'text-align': 'center'
}).animate({
    'font-size': '3em',
    'font-weight': 'bolder',
}, 1000);

/*
$('article > div').each(function (){
    if($(this).attr('title') === 'It\'s a 2-nd div-block'){
        $(this).css('background', 'lightskyblue');
    }
});*/

/*================================================================*/

let l = $('div').length;
console.log("Кол-во div = " + l);

/*let clone = $('article').clone().remove();
$('article').after(clone);*/

/*$('div[title]').text("У меня есть описание!");*/

/*$('header h1').mouseover(function (){
    alert("Убери мышку!")
});*/
/*mouseout //убрали мышь
* click //нажали
* mouseup //нажали и отпустили
* submit //только с кнопками типа submit
* focus //для input, когда на нём курсор
* blur //противоположно focus
* change //когда меняем input
* reset //только с кнопками типа reset*/

/*keypress // == click
* keydown // == clickdown
* keyup // == mouseup*/

/*load //все файлы подгружены
* resize //изменяется ли размер браузера
* scroll //прокрутка страницы*/

/*===== устаревшая модель событий =====
var elem = document.getElementById('el');
function show(){
    alert("JS ivent model");
};
elem.onclick = show;
===== устаревшая модель событий=====*/

/*$(window).scroll(function (){
    console.log("Круть...");
});*/
/*$('div').click(function (){
    let clone = $(this).clone();
    $(this).after(clone);
})*/

$('footer').hover(function (){
    $(this).text("Nice to meet you :)");
}, function (){
    $(this).text("Oh, see you later!");
});

/*$('html').click(function (e){
    console.log('X screen = ' + e.screenX + " Y screen = " + e.screenY);
    console.log('X page = ' + e.pageX + " Y page = " + e.pageY);
    console.log('Alt зажата => ' + e.altKey);
    console.log('Ctrl зажата => ' + e.ctrlKey);
    console.log('Shift зажата => ' + e.shiftKey);
    console.log('Вы нажали на элемент => ' + e.target);
});*/

/*$('a').click(function (e){
    let a = confirm("Вы действительно хотите перейтин на новую страницу?");
    if(!a){
        e.preventDefault(); //отмена стандартного поведения
        //or return false;
    }
});*/

$('article > div > img').click(function (){
    $('#img').height(500).slideDown(500).css('display', 'block');
    let src = $(this).attr('src');
    if(src !== $('#img img').attr('src')) {
        $('#img img').hide().attr('src', src).fadeIn(500);
    }
});
$('header h1').click(function (){
    $('#img').slideUp(500);
});