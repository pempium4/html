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