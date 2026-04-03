document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper === 'undefined') return;

  const swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
      delay: 4500000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 800,
    effect: 'slide',
  });
});
