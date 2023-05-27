const light = document.querySelector('.option');

const root = document.querySelector(':root');
const rs = getComputedStyle(root);
const container = document.querySelector('.calculator');
root.style.setProperty('--color-fondo', '#fff');

let theme = true;
light.addEventListener('click', () => {
    light.style.transform = theme ? `translateX(-100%)` : `translateX(0)`;
    theme = !theme;
})

const option = document.querySelector('.option');
let isDarkMode = true;
option.addEventListener('click', () => {
    if(isDarkMode) {
        root.style.setProperty('--color-fondo', '#e2e2e2');
        root.style.setProperty('--color-buttons', '#f6f6f6');
        root.style.setProperty('--color-calculator', '#fff');
        root.style.setProperty('--color-numbers', '#050505');
    }else {
        root.style.setProperty('--color-fondo', '#252525');
        root.style.setProperty('--color-buttons', '#151515');
        root.style.setProperty('--color-calculator', '#101010');
        root.style.setProperty('--color-numbers', '#e5e5e5');
    }
    isDarkMode = !isDarkMode;
})