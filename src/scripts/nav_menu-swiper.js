import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.scss";
import Swiper from "swiper";

export const swiper = new Swiper(".swiper-menu", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 10,
  freeMode: true,
});
