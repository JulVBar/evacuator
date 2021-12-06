
import './styles/main.scss';
import typingText from './js/typing-text';
import counter from './js/counter';
import parallaxBGBlock from './js/parallax-bg';
import testimonialsTabs from './js/testimonials-tabs';
import galerySwiper from './js/galery-swiper';
import one from './js/js1';
import two from './js/js2';



console.log('Это файл APP.JS');

window.addEventListener('DOMContentLoaded', function() {
    one();
    two();
    typingText();
    counter();
    parallaxBGBlock();
    testimonialsTabs();
    galerySwiper();
});

// load all images
//каждую подпапку импортируем отдельно (иконки просто копируются в конфиге)
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));
const dalery = importAll(require.context('./images/galery', false, /\.(png|jpe?g|svg|gif)$/));
const testimonials = importAll(require.context('./images/testimonials', false, /\.(png|jpe?g|svg|gif)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

