import { rotateCircle } from './src/script/circle';
import './src/script/slider';
import './src/script/sliderPanel';
import './src/script/pagination';

import './styles.scss';

rotateCircle('240.120');

// Запрещаем дергаться при загрузке или обновлению страницы
window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});
