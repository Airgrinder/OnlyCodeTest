import * as text from '../text/sliderText.json';
import { handleClick } from './pagination';
import { swiper } from './slider';

interface SliderText {
    [key: string]: {
        [key: string]: string;
    };
}

const sliderText: SliderText = text;

const circleItems = document.getElementsByClassName('main-circle-point-index') as HTMLCollectionOf<HTMLElement>;
const slider = document.getElementsByClassName('main-slider-items-item') as HTMLCollectionOf<HTMLElement>;

function yearsAnimation(elem: HTMLElement, value: number) {
    console.log(+elem.innerHTML + 1 + "")
  let yearsCounter = setInterval(()=>{
      if (+elem.innerHTML === value) clearInterval(yearsCounter)
      if (+elem.innerHTML < value) {
        elem.innerHTML = +elem.innerHTML + 1 + ""
    } else if (+elem.innerHTML > value) {
          elem.innerHTML = +elem.innerHTML + -1 + ""
      }
  }, 25)
}

export function updateContent(target: string) {
  let i = 0;
  const index: string = document.getElementsByClassName(target)[0].innerHTML;
  const theme = Object.keys(sliderText)[+index - 1];
  const description = document.getElementsByClassName('main-circle-description')[0] as HTMLElement;
  const firstYear = document.getElementsByClassName('main-circle-years-first')[0] as HTMLElement;
  const lastYear = document.getElementsByClassName('main-circle-years-last')[0] as HTMLElement;

  for (const item of slider) {
    const head = item.children[0] as HTMLElement;
    const content = item.children[1] as HTMLElement;
    head.style.opacity = '0';
    content.style.opacity = '0';
    setTimeout(() => {
      swiper.slideTo(0, 0);
      head.innerHTML = Object.keys(sliderText[theme])[i];
      content.innerHTML = sliderText[theme][Object.keys(sliderText[theme])[i]];
      head.style.opacity = '1';
      content.style.opacity = '1';
      i += 1;
    }, 300);
  }

    yearsAnimation(firstYear, +Object.keys(sliderText[theme])[0])
    yearsAnimation(lastYear, +Object.keys(sliderText[theme])[5])

  description.style.opacity = '0';
  setTimeout(() => {
    description.innerHTML = Object.keys(sliderText)[+index - 1];
    description.style.opacity = '1';
  }, 150);
}

export function rotateCircle(angle: string) {
  const circle = document.getElementsByClassName('main-circle-container')[0] as HTMLElement;
  const target = document.getElementsByClassName(angle)[0];

  circle.style.transform = `rotate(${angle.split('.')[0]}deg)`;
  for (const item of circleItems) {
    item.classList.remove('active');
    item.style.transform = `rotate(${angle.split('.')[1]}deg)`;
  }
    target!.classList.add('active');
    document.getElementsByClassName('main-container-sliderPanel-index')[0].innerHTML = `0${target.innerHTML}/06`;

    const left = document.getElementsByClassName('main-container-sliderPanel-arrows-left')[0];
    const right = document.getElementsByClassName('main-container-sliderPanel-arrows-right')[0];

    if (target.classList[2] === '1') {
      left.classList.add('blocked');
      right.classList.remove('blocked');
    } else if (target.classList[2] === '6') {
      left.classList.remove('blocked');
      right.classList.add('blocked');
    } else {
      right.classList.remove('blocked');
      left.classList.remove('blocked');
    }

    handleClick(+document.getElementsByClassName(angle)[0].classList[2] - 1);

    updateContent(angle);
}

for (const item of circleItems) {
  item.addEventListener('click', () => {
    rotateCircle(item.classList[1]);
  });
}
