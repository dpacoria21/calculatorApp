import './calculator.js'

const light = document.querySelector('.option');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');


const root = document.querySelector(':root');
const rs = getComputedStyle(root);


let theme = true;
light.addEventListener('click', () => {
    light.style.transform = theme ? `translateX(-100%)` : `translateX(0)`;
    theme = !theme;
});


const option = document.querySelector('.option');
let isDarkMode = false;
const changeModTheme = () => {
    if(isDarkMode) {
        sun.style.opacity = '1';
        moon.style.opacity = '0';
        root.style.setProperty('--color-fondo', '#e2e2e2');
        root.style.setProperty('--color-buttons', '#f6f6f6');
        root.style.setProperty('--color-calculator', '#fff');
        root.style.setProperty('--color-numbers', '#050505');
    }else {
        root.style.setProperty('--color-fondo', '#252525');
        root.style.setProperty('--color-buttons', '#151515');
        root.style.setProperty('--color-calculator', '#101010');
        root.style.setProperty('--color-numbers', '#d2d2d2');
        sun.style.opacity = '0';
        moon.style.opacity = '1';
    }
    isDarkMode = !isDarkMode;
}

option.addEventListener('click', () => {
    changeModTheme();
});