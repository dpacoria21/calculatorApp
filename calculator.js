let value1 = 0;
let value2 = 0;
let operation = '';
let isFirstValue = false;

const display = document.querySelector('.panel-num');
const displaySave = document.querySelector('.operations');

const buttons = document.querySelectorAll('.button');

const chooseOperation = (doing, auxiliar) => {
    if(value1!==undefined && display.textContent==='0') {
        displaySave.textContent = `${value1}${doing}`;
        operation = auxiliar ?? doing;
        return;
    }
    value1 = +display.textContent;
    displaySave.textContent = `${value1}${doing}`;
    operation = auxiliar ?? doing;
    display.textContent = '0';
}

console.log(8**(1/2));

const chooseOption = (option) => {
    if(!option) return;
    switch(option) {
        case '+':
            chooseOperation('+');
            break;
        case '-':
            chooseOperation('-');
            break;
        case 'X':
            chooseOperation('x', '*');
            break;
        case '/':
            chooseOperation('/');
            break;
        case '%':
            chooseOperation('%');
            break;
        case 'sqrt':
            break;
        case 'pow':
            chooseOperation('^', '**');
            break;
        case '=':
            if(operation==='/' && +display.textContent===0) return alert('No se puede dividir por 0');
            value2 = display.textContent;
            displaySave.textContent+=value2;
            display.textContent = eval(`${value1}${operation}${value2}`);
            value1 = eval(`${value1}${operation}${value2}`);
            value2 = 0;
            break;

        }
}

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

          
            display.textContent+=option;
            
        }else {
            chooseOption(option);
        }
    })
});

