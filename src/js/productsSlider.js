import { Swiper, Navigation, Autoplay } from "swiper";
Swiper.use([Navigation, Autoplay]);

const productsSections = document.querySelectorAll('.products-section')


productsSections.forEach(section => {
    new Swiper(section.querySelector('.products-section__container'), {
        slidesPerView: 1,
        navigation: {
            nextEl: section.querySelector('.swiper-button-next'),
            prevEl: section.querySelector('.swiper-button-prev'),
        },
        loop: true,
        breakpoints: {
            510: {
                slidesPerView: 2,
                spaceBetween: 30
              },

            769: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1048: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }
        // autoplay: {
        //     delay: 1000,
        //   },
    })
});