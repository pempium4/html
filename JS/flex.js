$('map').hover(function (){
    $('nav > img').css({
        'transform': 'scale(1.025)',
        'filter': 'drop-shadow(2px 2px 8px #111)'
    })
}, function (){
    $('nav > img').css({
        'transform': 'scale(1)',
        'filter': 'drop-shadow(2px 2px 4px #211)'
    });
});

$('a[href^="#"]').click(function(){
    let target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
});

var anchor = $('a[href="#top"]');

$(window).scroll(function (){
    if($(window).scrollTop() >= $('header').height()){
        anchor.fadeIn(500).css('display', 'block');
    }else{
        anchor.fadeOut(500);
    }
});

/*
$(window).scrollTop(); //Dist between axis Y=0 (doc) to current Y
$(window).height(); //Height of current window
$('footer').offset().top; //Elem offset from axis Y=0 (doc)
*/

////////////////////////////////////////////////////////

$('#all').click(function (){
    $('.container_photos > div').show(500).css('display', 'block');
});
$('#et').click(function (){
    $('.container_photos > div:not([class="et"])').hide(500);
    $('.container_photos > .et').show(500).css('display', 'block');
});
$('#st').click(function (){
    $('.container_photos > div:not([class="st"])').hide(500);
    $('.container_photos > .st').show(500).css('display', 'block');
});
$('#bg').click(function (){
    $('.container_photos > div:not([class="bg"])').hide(500);
    $('.container_photos > .bg').show(500).css('display', 'block');
});
$('#bs').click(function (){
    $('.container_photos > div:not([class="bs"])').hide(500);
    $('.container_photos > .bs').show(500).css('display', 'block');
});