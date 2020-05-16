function resize(){
    var images = $('.footer-image');

    if ($(window).width() < 566) {
        for(var a = 0; a < images.length; a++){
            $(images[a]).attr('src', 'assets/images/security64.png')
        }
    } else {
        for(var a = 0; a < images.length; a++){
            $(images[a]).attr('src', 'assets/images/security128.png')
        }
    }
}
resize();
$(window).on('resize', resize);
