'use strict';

alert('Bienvenido');

do {
    let operador;
    do {
        operador = prompt('Inserte el operador deseado (+, -, * o /)');
        if(!Boolean(operador)){
            operador = 'invalido';
        }
        operador = operador.trim();

        if (operador != '+' && operador != '-' && operador != '*' && operador != '/') {
            alert('Operador invalido')
        }

    } while (operador != '+' && operador != '-' && operador != '*' && operador != '/' && operador == null && operador == undefined);

    let operandos;
    let operando1;
    let operando2;

    do {
        operandos = prompt('Inserte los dos operandos separados por un espacio');
        if(!Boolean(operandos)){
            operandos = 'invalido';
        }
        operandos = operandos.trim();

        operando1 = operandos.substring(0, operandos.indexOf(' '));
        operando1 = operando1.trim();
        operando1 = Number(operando1);

        operando2 = operandos.substring(operandos.indexOf(' '), operandos.length);
        operando2 = operando2.trim();
        operando2 = Number(operando2);

        if (!Boolean(operando1) || !Boolean(operando2)) {
            alert('Operandos invalidos')
        }

    } while (!operando1 || !operando2 );

    switch (operador) {
        case '+': alert(operando1 + operando2);
            break;

        case '-': alert(operando1 - operando2);
            break;

        case '*': alert(operando1 * operando2);
            break;

        case '/': alert(operando1 / operando2);
            break;
    }

} while (confirm('Quiere realizar otra operacion?'));

