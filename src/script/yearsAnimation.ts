export function yearsAnimation(elem: HTMLElement, value: number) {
  const currentValue = +elem.innerHTML;
  const difference = value - currentValue;
  const step = difference > 0 ? Math.ceil(difference / 10) : Math.floor(difference / 10);

  let animationTimer = setInterval(() => {
    if ((step > 0 && +elem.innerHTML >= value) || (step < 0 && +elem.innerHTML <= value)) {
      elem.innerHTML = value + "";
      clearInterval(animationTimer);
    } else {
      elem.innerHTML = (+elem.innerHTML + step) + "";
    }
  }, 25);
}