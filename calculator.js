let value1 = 0;
let value2 = 0;
let operation = '';
let isFirstValue = false;

const display = document.querySelector('.panel-num');
const displaySave = document.querySelector('.operations');

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let option;
        if(button.dataset.operation) {
            option = button.getAttribute('data-operation');
        }else {
            option = button.textContent;
        }
        console.log(+option);
        if(!isNaN(+option)) {

            if(+display.textContent === 0) {
                display.textContent = '';
            }

            if(isFirstValue) {
                display.textContent+=+option;
            }else {
                display.textContent+=+option;
            }
        }else {
            if(!option) return;
            switch(option) {
                case '+':
                    if(!value1) {
                        displaySave.textContent = `${value1}+`;
                        operation = '+';
                        display.textContent = '0';
                    }
                    value1 = +display.textContent;
                    displaySave.textContent = `${value1}+`;
                    operation = '+';
                    display.textContent = '0';
                    break;
                case '-':
                    value1 = +display.textContent;
                    displaySave.textContent = `${value1}-`;
                    operation = '-';
                    display.textContent = '0';
                    break;
                case 'X':
                    value1 = +display.textContent;
                    displaySave.textContent = `${value1}x`;
                    operation = '*';
                    display.textContent = '0';
                    break;
                case '/':
                    value1 = +display.textContent;
                    displaySave.textContent = `${value1}/`;
                    operation = '/';
                    display.textContent = '0';
                    break;
                case '%':
                    break;
                case 'sqrt':
                    break;
                case 'pow':
                    break;
                case '=':
                    if(operation==='/' && +display.textContent===0) return;
                    value2 = display.textContent;
                    displaySave.textContent+=value2;
                    console.log(`${value1}${operation}${value2}`);

                    display.textContent = eval(`${value1}${operation}${value2}`);
                    value1 = eval(displaySave.textContent);

                    value2 = 0;

                    break;

            }
        }
    })
});