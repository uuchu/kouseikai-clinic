var swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 3000, //3秒後にスライド
    disableOnInteraction: false,
  },
  effect: 'fade',
  speed: 1000,
  fadeEffect: {
    crossFade: true,
  },
  allowTouchMove: false,
});
