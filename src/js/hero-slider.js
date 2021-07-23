import { Swiper, Navigation, Pagination, Autoplay } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay]);
const slider = document.querySelector('.hero-slider__container');
const swiper = new Swiper(slider, {
    slidesPerView: 1,
    speed: 2000,
    navigation: {
        nextEl: '.hero-slider__next',
        prevEl: '.hero-slider__prev',
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true,
    autoplay: {
      delay: 7000,
    },
});