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

function anchor(){
    let target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
}

$('a[href="#info"]').click(anchor);
$('a[href="#join"]').click(anchor);
$('a[href="#frame"]').click(anchor);
$('a[href="#objectives"]').click(anchor);
$('a[href="#second"]').click(anchor);
$('a[href="#third"]').click(anchor);
$('a[href="#fourth"]').click(anchor);
$('a[href="#media"]').click(anchor);
$('a[href="#bottom"]').click(anchor);

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