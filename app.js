const num1 = document.querySelector('.number1');
const num2 = document.querySelector('.number2');
const btnSumar = document.querySelector('.btn-sumar');
const btnMultiplicar = document.querySelector('.btn-multiplicar');
const btnRestar = document.querySelector('.btn-restar');
const btnDividir = document.querySelector('.btn-dividir');
const divResultado = document.querySelector('.resultado')
const btnReset = document.querySelector('.btn-reset');


btnSumar.addEventListener('click', () => {
    let resultado = num1.valueAsNumber + num2.valueAsNumber
    divResultado.innerHTML = resultado;
}) 

btnRestar.addEventListener('click', () => {
    let resultado = num1.valueAsNumber - num2.valueAsNumber
    divResultado.innerHTML = resultado;
})

btnMultiplicar.addEventListener('click', () => {
    let resultado = num1.valueAsNumber * num2.valueAsNumber
    divResultado.innerHTML = resultado;
})

btnDividir.addEventListener('click', () => {
    let resultado = num1.valueAsNumber / num2.valueAsNumber
    //divResultado.innerHTML = resultado.slice(0, 6);
    if (divResultado.innerHTML.length > 6) {
        divResultado.innerHTML = resultado.slice(0, 6);
    }
    else {
        divResultado.innerHTML = resultado;
    }
})

btnReset.addEventListener('click', () => {
    divResultado.innerHTML = '';
    num1.value = '';
    num2.value = '';
})

