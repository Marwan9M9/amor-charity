(function ($) {
  "use strict";
var client = $('.client_logo');
if (client.length) {
  client.owlCarousel({
    items: 6,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    nav: false,
    smartSpeed: 2000,
    margin: 20,
    responsive: {
      0: {
        items: 3
      },
      577: {
        items:3,
      },
      991: {
        items:5,
      },
      1200: {
        items: 6,
      }
    },
  });
}

$('.counter').counterUp({
  delay: 10,
  time: 2000
});

$(window).scroll(function () {
  var window_top = $(window).scrollTop() + 1;
  if (window_top > 50) {
    $('.navbar').addClass('navbar-fixed animated fadeInDown');
  } else {
    $('.navbar').removeClass('navbar-fixed animated fadeInDown');
  }
});

}(jQuery));