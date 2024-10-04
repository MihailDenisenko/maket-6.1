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
  spaceBetween: 10,
  freeMode: true,
});