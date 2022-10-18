'use strict';

alert('Bienvenido');

do {


    let operador = pedirOperador();
    let operandos;
    let operando1;
    let operando2;  


    let sacarOperando1 = function(operandos) {
        let operando1 = operandos.substring(0, operandos.indexOf(' '));
            operando1 = operando1.trim();
            operando1 = Number(operando1);
            return operando1;
    }    

    let sacarOperando2 = function(operandos) {
        let operando2 = operandos.substring(operandos.indexOf(' '), operandos.length);
        operando2 = operando2.trim();
        operando2 = Number(operando2);
            return operando2;
    }  

    let pedirOperandos = function() {
            operandos = prompt('Inserte los dos operandos separados por un espacio');
            if (!Boolean(operandos)) {
                operandos = 'invalido';
            }
            operandos = operandos.trim();

            return operandos;
    }

    do {
       
        operandos = pedirOperandos();
        
        operando1 = sacarOperando1(operandos);

        operando2 = sacarOperando2(operandos);

        if (!isFinite(operando1) || !isFinite(operando2)) {
            alert('Operandos invalidos')
        }

    } while (!isFinite(operando1) || !isFinite(operando2));  

    let sumar = (operando1, operando2) => operando1 + operando2;

    let restar = (operando1, operando2) => operando1 - operando2;

    let multiplicar = (operando1, operando2) => operando1 * operando2;

    let dividir = (operando2 !== 0) ?
    () => operando1 / operando2:
    () => 'No se puede dividir entre 0';

    switch (operador) {
        case '+': alert(sumar(operando1, operando2));
            break;

        case '-': alert(restar(operando1, operando2));
            break;

        case '*': alert(multiplicar(operando1, operando2));
            break;

        case '/': alert(dividir(operando1, operando2));
            break;
    }

} while (confirm('Quiere realizar otra operacion?'));

function pedirOperador() {
    let operador;
    do {
        operador = prompt('Inserte el operador deseado (+, -, * o /)');
        if (!Boolean(operador)) {
            operador = 'invalido';
        }
        operador = operador.trim();

        if (operador != '+' && operador != '-' && operador != '*' && operador != '/') {
            alert('Operador invalido')
        }

    } while (operador != '+' && operador != '-' && operador != '*' && operador != '/');

    return operador;
}