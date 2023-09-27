import * as text from '../text/sliderText.json';

interface SliderText {
    [key: string]: {
        [key: string]: string;
    };
}

const sliderText: SliderText = text;

const circleItems = document.getElementsByClassName("main-circle-point-index") as HTMLCollectionOf<HTMLElement>;
const slider = document.getElementsByClassName("main-slider-items-item") as HTMLCollectionOf<HTMLElement>;

export function rotateCircle(angle: string) {
    const circle = document.getElementsByClassName("main-circle-container")[0] as HTMLElement;
    const target = document.getElementsByClassName(angle)[0];

    circle.style.transform = `rotate(${angle.split(".")[0]}deg)`;
    for (const item of circleItems) {
        item.classList.remove("active");
        item.style.transform = `rotate(${angle.split(".")[1]}deg)`;
    }
    target!.classList.add("active");
    document.getElementsByClassName("main-container-sliderPanel-index")[0].innerHTML = `0${target.innerHTML}/06`;

    const left = document.getElementsByClassName("main-container-sliderPanel-arrows-left")[0];
    const right = document.getElementsByClassName("main-container-sliderPanel-arrows-right")[0];

    if (target.classList[2] === "1") {
        left.classList.add("blocked")
        right.classList.remove("blocked")
    } else if (target.classList[2] === "6") {
        left.classList.remove("blocked")
        right.classList.add("blocked")
    } else {
        right.classList.remove("blocked")
        left.classList.remove("blocked")
    }

    updateContent(angle);
}

function updateContent(target: string) {
    let i = 0;
    const index: string = document.getElementsByClassName(target)[0].innerHTML;
    const theme = Object.keys(sliderText)[+index - 1];
    const description = document.getElementsByClassName("main-circle-description")[0] as HTMLElement;
    const firstYear = document.getElementsByClassName("main-circle-years-first")[0] as HTMLElement;
    const lastYear = document.getElementsByClassName("main-circle-years-last")[0] as HTMLElement;

    for (const item of slider) {
        let head = item.children[0] as HTMLElement;
        let content = item.children[1] as HTMLElement;
        head.style.opacity = "0";
        content.style.opacity = "0";
        setTimeout(() => {
            head.innerHTML = Object.keys(sliderText[theme])[i];
            content.innerHTML = sliderText[theme][Object.keys(sliderText[theme])[i]];
            head.style.opacity = "1";
            content.style.opacity = "1";
            i++;
        }, 300);
    }

    description.style.opacity = "0";
    firstYear.style.opacity = "0";
    lastYear.style.opacity = "0";
    setTimeout(() => {
        description.innerHTML = Object.keys(sliderText)[+index - 1];
        firstYear.innerHTML = Object.keys(sliderText[theme])[0];
        lastYear.innerHTML = Object.keys(sliderText[theme])[5];
        description.style.opacity = "1";
        firstYear.style.opacity = "1";
        lastYear.style.opacity = "1";
    }, 150);
}

for (const item of circleItems) {
    item.addEventListener("click", () => {
        rotateCircle(item.classList[1]);
    });
}
