import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const gallery = document.querySelector('.wp-block-gallery');
const swiperContainer = document.querySelector('.swiper');
const figures = gallery.querySelectorAll('figure');

new Swiper('.swiper', {
    slidesPerView: figures.length - 2,
    centeredSlides: false,
    spaceBetween: 40,
    loop: true,
    on: {
        setTranslate: adjustPadding,
    },
    modules: [Autoplay],
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    direction: 'horizontal',
});


function adjustPadding() {
    const fastFigure = figures[0];
    const fastFigureRect = fastFigure.getBoundingClientRect().left;
    const lastFigure = figures[figures.length - 1];
    const lastFigureRect = lastFigure.getBoundingClientRect().left;

    if (fastFigureRect > 425) {
        swiperContainer.style.paddingLeft = '365px';
    } else if (fastFigureRect <= 425) {
        swiperContainer.style.paddingLeft = '';
    }

    if (lastFigureRect < 1800) {
        lastFigure.style.marginRight = '120px';
    } else if (lastFigureRect >= 1520) {
        lastFigure.style.marginRight = swiper.spaceBetween + 'px';
    }
}