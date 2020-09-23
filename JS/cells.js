$('article > div:last').after('<div></div><div></div>');
$('article > div:first').before('<div></div><div></div>')
$('article').append('<div></div>').prepend('<div></div>');

/*$('article').hide(1000).show(1000);*/
$('article > div:odd').fadeOut(1000).fadeIn(1000);
$('article > div:even').fadeTo(1000, 0.5).fadeTo(1000, 1);
$('article').slideUp(1).slideDown(1000);

$('article > div').addClass('block');

$('.block').height(120);

function blockSize(el){
    let h = $(el).height();
    let w = $(el).width();
    $('article > div:eq(4)').text("Ширина: " + w + "\nВысота: " + h);
}
blockSize('article');

$('header').html('<h1 style="color: azure; text-align: center" >Hi, I\'m header</h1>');

function changeAttr(el, name, value){
    $(el).attr(name, value);
};
changeAttr('article > div:eq(1)', 'title', 'It\'s a 2-nd div-block')
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
