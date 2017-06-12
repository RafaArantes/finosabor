$(function() {
    $('.menu-icon, .menu-icon2').on('click', function() {
        $('.overlay').toggleClass('dbr');
    });

    $('.smart-header h1').addClass('fadeIn move-top');
    setTimeout(function(){
      $('.smart-header p').addClass('fadeIn move-top');
    }, 300);
    setTimeout(function(){
      $('.powerstrip').addClass('fadeIn')
    }, 900);

    $(window).scroll(function() {
        if ($(document).scrollTop() > 5) {
            $('.downarrow').fadeOut(1000);
        }
    });
})
