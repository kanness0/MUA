$(".con__menu-item").hover(
  function () {
    $(".con__menu-item_bg").addClass("active");
  },
  function () {
    $(".con__menu-item_bg").removeClass("active");
  }
);

const swiperSec1 = new Swiper('.mySwiperSec1', {
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
});

const swiperMain = new Swiper('.mySwiperMain', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  freeMode: true,
});