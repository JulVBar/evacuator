
import './styles/main.scss';
import typingText from './js/typing-text';
import counter from './js/counter';
import testimonialsTabs from './js/testimonials-tabs';
import calculate from './js/calculator';
import galerySwiper from './js/galery-swiper';
import btnToTop from './js/btn-to-top';
import newsTitleLimit from './js/news-title';
import modal from './js/modal';
import burger from './js/burger';
import accordion from './js/accordion';
import navigation from './js/navigation';
import one from './js/js1';
import AOS from 'aos';



window.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    if (document.querySelector('#home-page')) {
        typingText();
        counter();
        testimonialsTabs();
        galerySwiper();
        modal();
        accordion();
    }
    if (document.querySelector('#calculating-page')) {
        calculate();
    }
    
    one();
    btnToTop();
    newsTitleLimit();
    burger();
    navigation();
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

