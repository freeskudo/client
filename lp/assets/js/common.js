// $(function(){
//   $(".md-btn").each(function(){
//     $(this).on('click',function(e){
//       e.preventDefault();
//       var target = $(this).data('target');
//       var modal = document.getElementById(target);
//       $(modal).find('.md-overlay,.md-contents').fadeIn();
//     });
//   });
//   $('.md-close').on('click',function(){
//     $('.md-overlay,.md-contents').fadeOut();
//   });
// });

// $(function () {
//   $(".js-accordion-title").on("click", function () {
//     $(".js-accordion-title").not(this).removeClass("open");
//     $(".js-accordion-title").not(this).next().slideUp(300);
//     $(this).toggleClass("open");
//     $(this).next().slideToggle(300);
//   });
// });

// $(function() {
//   $(window).scroll(function () {
//     var banner = $('.header');
//     var off = $('#not_followup').offset();
//     if ($(this).scrollTop() > off.top -600) {
//         banner.fadeOut();
//     } else {
//         banner.fadeIn();
//     }
//   })
// });

// SP用
var swiper = new Swiper('.swiper', {
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination"
  },

  // PC用
  // スライドの表示枚数：1025px以上の場合
  breakpoints: {
    1025: {
      slidesPerView: 2,
      centeredSlides: true,
      initialSlide: 1,
    }
  }
});
