const mult = (a, b) => a + b;
import html from './index.html'
// import "./index.css";
import './index.scss'
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: "auto",
    spaceBetween: 30,
  freeMode: true
});