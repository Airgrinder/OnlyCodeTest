import {rotateCircle} from './circle';

function panel(event: MouseEvent) {
    const count = document.getElementsByClassName("main-container-sliderPanel-index")[0].innerHTML;
    const left = document.getElementsByClassName("main-container-sliderPanel-arrows-left")[0];
    const right = document.getElementsByClassName("main-container-sliderPanel-arrows-right")[0];
    if (event.target instanceof HTMLElement) {
        if (event.target.classList.contains("blocked") || event.target.parentElement!.classList.contains("blocked")) return;
        if (event.target.classList.contains("main-container-sliderPanel-arrows-right") || event.target.parentElement!.classList.contains("main-container-sliderPanel-arrows-right")) {
            rotateCircle(document.getElementsByClassName(`${+count[1] + 1}`)[0].classList[1]);
        } else {
            rotateCircle(document.getElementsByClassName(`${+count[1] - 1}`)[0].classList[1]);
        }
    }
    if (count === "02/06" && event.target === left) {
        left.classList.add("blocked");
    } else if (count === "05/06" && event.target === right) {
        right.classList.add("blocked");
    } else {
        left.classList.remove("blocked");
        right.classList.remove("blocked");
    }
}

document.getElementsByClassName("main-container-sliderPanel-arrows-left")[0]
    .addEventListener("click", (event) => {
        panel(event as MouseEvent);
    });

document.getElementsByClassName("main-container-sliderPanel-arrows-right")[0]
    .addEventListener("click", (event) => {
        panel(event as MouseEvent);
    });
