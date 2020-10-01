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