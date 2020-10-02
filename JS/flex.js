$('map').hover(function (){
    $('#top > img').css({
        'transform': 'scale(1.025)',
        'filter': 'drop-shadow(2px 2px 8px #111)'
    })
}, function (){
    $('#top > img').css({
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

$('a[href="#main"]').click(anchor);
$('a[href="#join"]').click(anchor);
$('a[href="#media"]').click(anchor);
$('a[href="#how_to_win"]').click(anchor);
$('a[href="#stealth"]').click(anchor);
$('a[href="#spot_the_killer"]').click(anchor);
$('a[href="#alt_act"]').click(anchor);
$('a[href="#photos"]').click(anchor);

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