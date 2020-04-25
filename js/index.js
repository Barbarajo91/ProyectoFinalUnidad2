$(document).ready(function(){

    $('.box-shadow-efec').mouseenter(function () {
        $(this).css({boxShadow: '0px 0px 3px 0px black'});
    });

    $('.box-shadow-efec').mouseleave(function () {
        $(this).css({boxShadow: '0px 0px 0px black'});
    });

    $('.icon-redes').mouseenter(function () {
        $(this).addClass('border border-info');
    });

    $('.icon-redes').mouseleave(function () {
        $(this).removeClass('border border-info');
    });

    $('.nav-flotante').mouseenter(function () {
        $(this).addClass('shadow-efec');
    });

    $('.nav-flotante').mouseleave(function () {
        $(this).removeClass('shadow-efec');
    });
  });