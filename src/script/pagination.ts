import { updateContent } from './circle';

const bullet = document.querySelectorAll('.main-container-sliderPanel-pagination-bullet');

export function handleClick(index: number): void {
  const left = document.getElementsByClassName('main-container-sliderPanel-arrows-left')[0];
  const right = document.getElementsByClassName('main-container-sliderPanel-arrows-right')[0];
  if (index === 0) {
    left.classList.add('blocked');
    right.classList.remove('blocked');
  } else if (index === 5) {
    left.classList.remove('blocked');
    right.classList.add('blocked');
  } else {
    right.classList.remove('blocked');
    left.classList.remove('blocked');
  }

  bullet.forEach((item) => {
    item.classList.remove('current');
  });
  bullet[index].classList.add('current');

  document.getElementsByClassName('main-container-sliderPanel-index')[0].innerHTML = `0${index + 1}/06`;
}

bullet.forEach((button, index) => {
  button.addEventListener('click', () => {
    handleClick(index);
    updateContent(`${index + 1}`);
  });
});
