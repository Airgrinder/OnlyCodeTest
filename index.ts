import {rotateCircle} from "./src/script/circle";
import './src/script/slider';
import './src/script/circle';
import './src/script/sliderPanel';


import './styles.scss';

rotateCircle("240.120");

// Запрещаем дергаться при загрузке или обновлению страницы
window.addEventListener('load', function () {
    document.body.classList.remove('preload');
});
