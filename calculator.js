let value1 = 0;
let value2 = 0;
let valueChange = 0;
let operation = '';

const display = document.querySelector('.panel-num');
const displaySave = document.querySelector('.operations');

const buttons = document.querySelectorAll('.button');

const chooseOperation = (doing, auxiliar) => {
    value2=0;
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

console.log(eval(''));

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
            if(display.textContent.includes('-')) return alert('No se puede sacar raiz cuadrada a numeros negativos');
            display.textContent = Math.sqrt(+display.textContent);
            break;
        case 'pow':
            chooseOperation('^', '**');
            break;
        case 'C':
            display.textContent = 0;
            break;
        case 'CE':
            value1 = value2 = 0;
            displaySave.textContent = '';
            display.textContent = 0;
            break;
        case 'delete':
            display.textContent = display.textContent.substring(0 ,display.textContent.length-1);
            if(display.textContent.length===0) {
                display.textContent = 0;
                return;
            }
            break;
        case '1/x':
            display.textContent = 1/(+display.textContent);
            break;
        case '+/-':
            if(display.textContent.includes('-')) {
                display.textContent = display.textContent.replace('-', '');
                return;
            }
            display.textContent = '-'+display.textContent;
            break;
        case '.':
            if(display.textContent.includes('.')) return;
            display.textContent +='.';
            break;
        case '=':
            if(operation==='/' && +display.textContent===0) return alert('No se puede dividir por 0');
            if(operation==='') return;
            if(value1 === +display.textContent && value2!==0) {
                displaySave.textContent = `${value1}${operation}${value2}`;
                display.textContent = eval(`${value1}${operation}${value2}`);
                value1 = eval(`${value1}${operation}${value2}`);
                return;
            }
            valueChange = value2 = display.textContent;
            displaySave.textContent+=`${value2}=`;
            display.textContent = (Math.round((eval(`${value1}${operation}${value2}`))*1000000))/1000000;
            value1 = +display.textContent;
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

