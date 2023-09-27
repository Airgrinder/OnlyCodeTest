import { Swiper } from "swiper";

const slider = document.querySelector(".main-slider-wrapper") as HTMLElement;

let swiper = new Swiper(slider, {
    slidesPerView: 3,
});

const arrowLeft = document.getElementsByClassName('main-slider-arrow-left')[0];
const arrowRight = document.getElementsByClassName('main-slider-arrow-right')[0];

swiper.on('slideChangeTransitionEnd', function () {
    if (swiper.isBeginning) {
        arrowLeft.classList.add("hidden");
    } else {
        arrowLeft.classList.remove("hidden");
    }

    if (swiper.isEnd) {
        arrowRight.classList.add("hidden");
    } else {
        arrowRight.classList.remove("hidden");
    }
});

function slide(event: Event) {
    const button = event.currentTarget as HTMLButtonElement;
    if (button.classList[0] === "main-slider-arrow-right") {
        swiper.slideNext(500);
    } else {
        swiper.slidePrev(500);
    }
}

arrowLeft.addEventListener("click", (event: Event) => slide(event));
arrowRight.addEventListener("click", (event: Event) => slide(event));
