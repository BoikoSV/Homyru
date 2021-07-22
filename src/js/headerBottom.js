import{ Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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