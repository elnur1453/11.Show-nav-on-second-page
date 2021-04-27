$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 300 && $(window).scrollTop() < 1400) {
            $('.nav').addClass('active');
        }
        else{
            $('.nav').removeClass('active');
        }
    })
})