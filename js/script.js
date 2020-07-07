
$(document).ready(function(){
    $('.banner_bg').slick({
        prevArrow : '<i class="fas fa-chevron-left left_arrow"></i>',
        nextArrow : '<i class="fas fa-chevron-right right_arrow"></i>',
        dots: true,
        dotsClass: 'banner_dots',
        infinite: false,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
    });

    AOS.init({
        delay: 0,
        duration: 900,
        mirror: true,
    });
  });


