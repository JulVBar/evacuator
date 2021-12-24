
import './styles/main.scss';
import preloader from './js/preloader';
import typingText from './js/typing-text';
import counter from './js/counter';
import parallaxBGBlock from './js/parallax-bg';
import testimonialsTabs from './js/testimonials-tabs';
import calculate from './js/calculator';
import galerySwiper from './js/galery-swiper';
import one from './js/js1';




console.log('Это файл APP.JS');

window.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('#home-page')) {
        typingText();
        counter();
        parallaxBGBlock();
        testimonialsTabs();
        galerySwiper();
    }
    if (document.querySelector('#calculating-page')) {
        calculate();
    }
    
    one();
    preloader();
});

// load all images
//каждую подпапку импортируем отдельно (иконки просто копируются в конфиге)
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));
const background = importAll(require.context('./images/background', false, /\.(png|jpe?g|svg|gif)$/));
const galery = importAll(require.context('./images/galery', false, /\.(png|jpe?g|svg|gif)$/));
const testimonials = importAll(require.context('./images/testimonials', false, /\.(png|jpe?g|svg|gif)$/));
const caclulator = importAll(require.context('./images/calculator', false, /\.(png|jpe?g|svg|gif)$/));
const postImages = importAll(require.context('./images/post-images', false, /\.(png|jpe?g|svg|gif)$/));




function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

