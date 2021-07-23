import{ Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiperContainer = document.querySelector('.header__bottom-box');
const swiper = new Swiper(swiperContainer.querySelector('.header-bottom__swiper-container'), {
    navigation: {
        nextEl: swiperContainer.querySelector('.swiper-button-next'),//'.swiper-button-next',
        prevEl: swiperContainer.querySelector('.swiper-button-prev'),//'.swiper-button-prev',
      },
      breakpoints: {
        320: {
            slidesPerView: 'auto',
        },
        400: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 3,
        },
        650: {
            slidesPerView: 4,
        },
        769: {
            slidesPerView: 5,
          },
        1000: {
            slidesPerView: 7,
        },
      },
      
});