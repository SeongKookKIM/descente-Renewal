$(function () {
  $(".toggle-menu")
    .stop()
    .click(function () {
      $(".menu").stop().css({ left: 0 });
      $(".swiper-button-prev,.swiper-button-next").css({ opacity: "0" });
    });

  $(".close")
    .stop()
    .click(function () {
      $(".menu").stop().css({ left: "100%" });
      $(".swiper-button-prev,.swiper-button-next").css({ opacity: "1" });
    });
});
