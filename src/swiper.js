import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Autoplay],
  direction: "horizontal",
  loop: true,
  autoplay: {
    pauseOnMouseEnter: true,
    delay: 5000,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
