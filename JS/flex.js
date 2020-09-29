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

$('a[href="#mainTop"]').click(function (){
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
});
