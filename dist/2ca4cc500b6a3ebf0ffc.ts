"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./src/script/circle");
require("./src/script/slider");
require("./src/script/sliderPanel");
require("./src/script/pagination");
require("./styles.scss");
(0, circle_1.rotateCircle)('240.120');
// Запрещаем дергаться при загрузке или обновлению страницы
window.addEventListener('load', () => {
    document.body.classList.remove('preload');
});
