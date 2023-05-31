let value1 = 0;
let value2 = 0;
let valueChange = 0;
let operation = '';

const display = document.querySelector('.panel-num');
display.textContent = 0;
const displaySave = document.querySelector('.operations');

const buttons = document.querySelectorAll('.button');

const chooseOperation = (doing, auxiliar) => {
    if (value1 !== undefined && display.textContent === '0') {
        displaySave.textContent = `${value1}${doing}`;
        operation = auxiliar ?? doing;
        return;
        
    }else if(operation === doing || operation === auxiliar) {
        display.textContent = eval(`${value1}${operation}${display.textContent}`);
        console.log(`${value1}${operation}${display.textContent}`);
        displaySave.textContent = display.textContent;
        value1 = +display.textContent;
        operation = '';
        return;
    }
    value1 = +display.textContent;
    displaySave.textContent = `${value1}${doing}`;
    operation = auxiliar ?? doing;
    display.textContent = '0';
    value2 = 0;
}

const doOperation = () => {
    if(operation === '%' && +display.textContent <= 0) return alert('Introducir un valor mayor a 0');
    if (operation === '/' && +display.textContent === 0) return alert('No se puede dividir por 0');
    if(operation === '**' && value1 === 0 && +display.textContent===0) return alert('No se puede 0 elevado a 0');
    if (operation === '') return;
    if (value1 === +display.textContent && value2 !== 0) {
        displaySave.textContent = `${value1}${operation}${value2}`;
        display.textContent = eval(`${value1}${operation}${value2}`);
        value1 = eval(`${value1}${operation}${value2}`);
        operation = '';
        return;
    }
    valueChange = value2 = display.textContent;
    displaySave.textContent += `${value2}=`;
    display.textContent = (Math.round((eval(`${value1}${operation}${value2}`)) * 1000000)) / 1000000;
    value1 = +display.textContent;
    operation = '';
}

const chooseOption = (option) => {
    if (!option) return;
    switch (option) {
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
            if (display.textContent.includes('-')) return alert('No se puede sacar raiz cuadrada a numeros negativos');
            display.textContent = Math.round(Math.sqrt(+display.textContent) * 1000000) / 1000000;
            displaySave.textContent = display.textContent;
            break;
        case 'pow':
            chooseOperation('^', '**');
            break;
        case 'C':
            value1 = value2 = 0;
            displaySave.textContent = '';
            display.textContent = 0;
            operation = '';
            break;
        case 'CE':
            value1 = value2 = 0;
            displaySave.textContent = '';
            display.textContent = 0;
            operation = '';
            break;
        case 'delete':
            display.textContent = display.textContent.substring(0, display.textContent.length - 1);
            if (display.textContent.length === 0) {
                display.textContent = 0;
                return;
            }
            break;
        case '1/x':
            if(display.textContent === '0') return alert('No se puede dividir entre 0');
            display.textContent = (Math.round((1 / (+display.textContent)) * 1000000)) / 1000000;
            break;
        case '+/-':
            if (display.textContent.includes('-')) {
                display.textContent = display.textContent.replace('-', '');
                return;
            }
            display.textContent = '-' + display.textContent;
            break;
        case '.':
            if (display.textContent.includes('.')) return;
            display.textContent += '.';
            break;
        case '=':
            doOperation();
            break;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let option;
        if (button.dataset.operation) {
            option = button.getAttribute('data-operation');
        } else {
            option = button.textContent;
        }
        if (!isNaN(+option)) {

            if (+display.textContent === 0) {
                display.textContent = '';
            }

            display.textContent += option;

        } else {
            chooseOption(option);
        }
    })
});

