'use strict';

//Mostramos el mensaje de bienvenida al usuario
alert('Bienvenido');

//Creamos un objeto calculadora que tiene una propiedad lastResult que por defecto tendra de valor 0 y 4 metodos para realizar las operaciones
let Calculadora = {
    lastResult: 0,

    sumar(operando1, operando2) {
        //Almacenamos el resultado en la propiedad lastResult
        this.lastResult = operando1 + operando2;
        return operando1 + operando2;
    },

    restar(operando1, operando2) {
        //Almacenamos el resultado en la propiedad lastResult
        this.lastResult = operando1 - operando2;
        return operando1 - operando2;
    },

    multiplicar(operando1, operando2) {
        //Almacenamos el resultado en la propiedad lastResult
        this.lastResult = operando1 * operando2;
        return operando1 * operando2;
    },

    dividir(operando1, operando2) {
        //Si el segundo operador es 0 mostramos que no se puede dividir y como ultimo resultado guardamos 0
        if (operando2 !== 0) {
            this.lastResult = operando1 / operando2;
            return operando1 / operando2;
        }
        else {
            this.lastResult = 0;
            return 'No se puede dividir entre 0';
        }
    },

}

do {


    let operador = pedirOperador();
    if (operador === null) {
        break;
    }
    let operandos;
    let operando1;
    let operando2;


    let sacarOperando1 = function (operandos) {
        let operando1 = operandos.substring(0, operandos.indexOf(' '));
        operando1 = operando1.trim();

        if (operando1 === 'R') {
            operando1 = Calculadora.lastResult;
        }
        else {
            operando1 = Number(operando1);
        }

        return operando1;
    }

    let sacarOperando2 = function (operandos) {
        let operando2 = operandos.substring(operandos.indexOf(' '), operandos.length);
        operando2 = operando2.trim();

        if (operando2 === 'R') {
            operando2 = Calculadora.lastResult;
        }
        else {
            operando2 = Number(operando2);
        }

        return operando2;
    }

    let pedirOperandos = function () {
        operandos = prompt('Inserte los dos operandos separados por un espacio');
        if (operandos === null) {
            return null;
        }

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


    switch (operador) {
        case '+': alert(Calculadora.sumar(operando1, operando2));
            break;

        case '-': alert(Calculadora.restar(operando1, operando2));
            break;

        case '*': alert(Calculadora.multiplicar(operando1, operando2));
            break;

        case '/': alert(Calculadora.dividir(operando1, operando2));
            break;
    }

} while (confirm('Quiere realizar otra operacion?'));

function pedirOperador() {
    let operador;
    do {
        operador = prompt('Inserte el operador deseado (+, -, * o /)');
        if (operador === null) {
            break;
        }

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