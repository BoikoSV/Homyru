import { Swiper, Navigation, Pagination, Autoplay } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay]);
const slider = document.querySelector('.hero-slider__container');
const swiper = new Swiper(slider, {
    slidesPerView: 1,
    speed: 2000,
    navigation: {
        nextEl: slider.querySelector('.hero-slider__next'),//'.hero-slider__next',
        prevEl:  slider.querySelector('.hero-slider__prev'),//'.hero-slider__prev',
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