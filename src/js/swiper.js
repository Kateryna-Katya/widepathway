import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

let signatureSwiper = null;
let gallerySwiper = null;

function initSignatureSwiper() {
  if (window.innerWidth < 1440) {
    if (!signatureSwiper) {
      signatureSwiper = new Swiper('.signature-swiper', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,

        navigation: {
          nextEl: '.signature-next',
        },
      });
    }
  } else if (signatureSwiper) {
    signatureSwiper.destroy(true, true);
    signatureSwiper = null;
  }
}

function initGallerySwiper() {
  if (window.innerWidth < 1440) {
    if (!gallerySwiper) {
      gallerySwiper = new Swiper('.gallery-swiper', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,

        navigation: {
          nextEl: '.gallery-next',
        },
      });
    }
  } else if (gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }
}

initSignatureSwiper();
initGallerySwiper();

window.addEventListener('resize', () => {
  initSignatureSwiper();
  initGallerySwiper();
});