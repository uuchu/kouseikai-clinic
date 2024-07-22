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

const endlessSwiper = new Swiper('.endlessSwiper', {
  loop: true, // ループ有効
  slidesPerView: 6, // 一度に表示する枚数
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
  },
});

const btn = document.getElementById('nav-switch');
const menu = document.getElementById('nav-menu');
const links = document.querySelectorAll('#nav-menu a');

btn.addEventListener('click', () => {
  btn.classList.toggle('on');
  menu.classList.toggle('on');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    btn.classList.toggle('on');
    menu.classList.toggle('on');
  });
});
