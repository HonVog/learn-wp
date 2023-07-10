import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


const swiper = new Swiper('.swiper', {
   //loop: true,
   freeMode: true,
   spaceBetween: 34,
   grabCursor: true,

   autoplay: {
     delay: 1,
     disableOnInteraction: true
   },
   freeMode: true,
   speed: 5000,
   freeModeMomentum: false,
   pagination: {
         el: '.swiper-pagination',
         clickable: true,
   },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },

   breakpoints: {
      320: {
         slidesPerView: 1.2,
         grid: {
            rows: 1,
        },
     },
     768: {
         slidesPerView: 3.5,
         grid: {
            rows: 2,
      },
      },
    1440: {
        slidesPerView: 4,
        grid: {
                rows: 2,
            },
     },


   },

   observer: true,
   observeParents:true,
   observeSlideChildren:true,
   modules: [Navigation, Pagination],
});

const svTabel = new Swiper('.m-blok-s__prise--tabel--body', {
   freeMode: true,
   grabCursor: true,

   autoplay: {
     delay: 1,
     disableOnInteraction: true
   },
   freeMode: true,
   speed: 5000,
   freeModeMomentum: false,
   pagination: {
         el: '.swiper-pagination',
         clickable: true,
   },

   breakpoints: {
      480: { 
         direction: 'vertical',
         slidesPerView: 5, 
      }, 
      320: { 
         direction:'horizontal',
         slidesPerView: 1.5,
      }
   }
})


export default swiper;
