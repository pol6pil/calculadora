'use strict'

// Mostramos el mensaje de bienvenida al usuario
window.alert('Bienvenido')

// Creamos un objeto calculadora que tiene una propiedad lastResult que por defecto tendra de valor 0 y 4 metodos para realizar las operaciones
class Calculadora {
  lastResult = 0

  sumar (operando1, operando2) {
    // Almacenamos el resultado en la propiedad lastResult
    this.lastResult = operando1 + operando2
    return operando1 + operando2
  }

  restar (operando1, operando2) {
    // Almacenamos el resultado en la propiedad lastResult
    this.lastResult = operando1 - operando2
    return operando1 - operando2
  }

  multiplicar (operando1, operando2) {
    // Almacenamos el resultado en la propiedad lastResult
    this.lastResult = operando1 * operando2
    return operando1 * operando2
  }

  dividir (operando1, operando2) {
    // Si el segundo operador es 0 mostramos que no se puede dividir y como ultimo resultado guardamos 0
    if (operando2 !== 0) {
      this.lastResult = operando1 / operando2
      return operando1 / operando2
    } else {
      this.lastResult = 0
      return 'No se puede dividir entre 0'
    }
  }
}

const calculadora = new Calculadora()

class CalculatorError extends Error {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
  }
}

class OperatorError extends CalculatorError {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
  }
}

class InvalidOpertatorError extends OperatorError {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
  }
}

class NullOpertatorError extends OperatorError {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
  }
}

class OperarseError extends CalculatorError {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
  }
}

class InvalidOperarseError extends OperarseError {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
  }
}

class NullOperarseError extends OperarseError {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
  }
}

do {
  const operador = pedirOperador()
  if (operador === null) {
    break
  }
  let operandos
  let operando1
  let operando2

  const sacarOperando1 = function (operandos) {
    let operando1 = operandos.substring(0, operandos.indexOf(' '))
    operando1 = operando1.trim()

    if (operando1 === 'R') {
      operando1 = calculadora.lastResult
    } else {
      operando1 = Number(operando1)
    }
    if (!(isFinite(operando1))) {
      throw new InvalidOperarseError('Operando invalido!')
    }
    return operando1
  }

  const sacarOperando2 = function (operandos) {
    let operando2 = operandos.substring(operandos.indexOf(' '), operandos.length)
    operando2 = operando2.trim()

    if (operando2 === 'R') {
      operando2 = calculadora.lastResult
    } else {
      operando2 = Number(operando2)
    }
    if (!(isFinite(operando2))) {
      throw new InvalidOperarseError('Operando invalido!')
    }

    return operando2
  }

  const pedirOperandos = function () {
    operandos = window.prompt('Inserte los dos operandos separados por un espacio')
    if (operandos === null) {
      throw new NullOperarseError('NULL')
    }
    if (!operandos) {
      throw new InvalidOperarseError('Operando invalido!')
    }
    operandos = operandos.trim()

    return operandos
  }

  do {
    try {
      operandos = pedirOperandos()

      operando1 = sacarOperando1(operandos)

      operando2 = sacarOperando2(operandos)
    } catch (err) {
      if (!(err instanceof NullOperarseError)) {
        window.alert(err.message)
      } else {
        break
      }
    }
  } while (!isFinite(operando1) || !isFinite(operando2))

  if (operandos === null) {
    break
  }
  switch (operador) {
    case '+': window.alert(calculadora.sumar(operando1, operando2))
      break

    case '-': window.alert(calculadora.restar(operando1, operando2))
      break

    case '*': window.alert(calculadora.multiplicar(operando1, operando2))
      break

    case '/': window.alert(calculadora.dividir(operando1, operando2))
      break
  }
} while (window.confirm('Quiere realizar otra operacion?'))

function pedirOperador () {
  let operador
  do {
    try {
      operador = window.prompt('Inserte el operador deseado (+, -, * o /)')
      if (operador === null) {
        throw new NullOpertatorError()
      }
      operador = operador.trim()
      if (operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/') {
        throw new InvalidOpertatorError('Operador Invalido')
      }
    } catch (error) {
      if (error instanceof NullOpertatorError) {
        break
      } else if (error instanceof InvalidOpertatorError) {
        window.alert(error.message)
      }
    }
  } while (operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/')

  return operador
}
