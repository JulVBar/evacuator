  // import Swiper JS
import Swiper, { Autoplay, Breakpoints } from 'swiper';
Swiper.use([Autoplay, Breakpoints]);

function galerySwiper() {   

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 6,
        spaceBetween: 0,
        centeredSlides: true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            700: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 6,
                }
            }
        });
}

export default galerySwiper;
