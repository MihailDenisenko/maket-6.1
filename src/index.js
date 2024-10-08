const mult = (a, b) => a + b;
import html from './index.html'
// import "./index.css";

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import "swiper/css/navigation";
import "swiper/css/pagination";

import './index.scss'


const swiper = new Swiper(".swiper-menu", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 50,
  freeMode: true,
});



import "swiper/bundle";

// Функция проверки ширины экнрана 
window.addEventListener('DOMContentLoaded', () => {
  var wid = document.querySelector('.body').clientWidth
  
//  Проверка (320-767 => swiper)
  if (wid > 320 && wid < 768) {
    console.log(`Новые размеры: ${wid}`);
    var swiper_brand = new Swiper(".swiper-brands", {
      slidesPerView: "auto",
      freeMode: true,
      spaceBetween: 50,

      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        // dynamicBullets: true,
        clickable: true,
      },
    }); 
    
    var swiper_tech = new Swiper(".swiper-tehnics", {
      slidesPerView: "auto",
      freeMode: true,
      spaceBetween: 50,

      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        // dynamicBullets: true,
        clickable: true,
      },
    }); 

    var swiper_price = new Swiper(".swiper-price", {
      slidesPerView: "auto",
      freeMode: true,
      spaceBetween: 50,

      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        // dynamicBullets: true,
        clickable: true,
      },
    }); 
  }
});


