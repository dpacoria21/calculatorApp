const light = document.querySelector('.option');
let theme = true;
light.addEventListener('click', () => {
    light.style.transform = theme ? `translateX(-100%)` : `translateX(0)`;
    theme = !theme;
})