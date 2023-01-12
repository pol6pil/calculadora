'use strict'

// Mostramos el mensaje de bienvenida al usuario
window.alert('Bienvenido')

// Creamos un objeto calculadora que tiene una propiedad lastResult que por defecto tendra de valor 0 y 4 metodos para realizar las operaciones
class Calculadora {
  lastResult = 0

  sumar (operando1, operando2) {
    // Almacenamos el resultado en la propiedad lastResult
    this.lastResult = operando1 + operando2
    return this.lastResult
  }

  restar (operando1, operando2) {
    // Almacenamos el resultado en la propiedad lastResult
    this.lastResult = operando1 - operando2
    return this.lastResult
  }

  multiplicar (operando1, operando2) {
    // Almacenamos el resultado en la propiedad lastResult
    this.lastResult = operando1 * operando2
    return this.lastResult
  }

  dividir (operando1, operando2) {
    // Si el segundo operador es 0 mostramos que no se puede dividir y como ultimo resultado guardamos 0
    if (operando2 !== 0) {
      this.lastResult = operando1 / operando2
      return this.lastResult
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

class Boton {
  constructor (text, className) {
    this.text = text
    this.className = className
  }

  get text () {
    return this._text
  }

  set text (value) {
    this._text = value
  }

  get className () {
    return this._className
  }

  set className (value) {
    if (typeof value === 'string') {
      this._className = value
    } else {
      this._className = null
    }
  }
}

class BotonNum extends Boton {
  get text () {
    return Number(this._text)
  }

  // Preguntar x2 porque me obliga a poner un set y porque no me deja hacer solo lectura
  set text (value) {
    this._text = value
  }
}

class BotonList {
  _botons = []

  get botons () {
    return this._botons
  }

  set botons (value) {
    this._botons = value
  }

  addBoton (boton) {
    if (boton instanceof Boton) {
      this._botons.push(boton)
    } else {
      return false
    }
  }

  // Preguntar
  [Symbol.iterator] = function () {
    // ... devuelve el objeto iterador:
    // 2. En adelante, for..of trabaja solo con el objeto iterador debajo, pidiéndole los siguientes valores
    return {
      current: this._botons[0],
      last: this._botons[this._botons.length - 1],

      // 3. next() es llamado en cada iteración por el bucle for..of
      next () {
        // 4. debe devolver el valor como un objeto {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true }
        }
      }
    }
  }
}

class Printer {
  _div = null
  printCalc (btnList) {
    if (btnList instanceof BotonList) {
      this.#printBg()
      for (const boton of btnList.botons) {
        if (boton.className === 'display') {
          this.#printDisplay(boton)
        } else {
          this.#printButton(boton)
        }
      }
    }
  }

  #printBg () {
    this._div = document.createElement('div')
    this._div.className = 'calculadora'
    document.body.append(this._div)
  }

  #printDisplay (dis) {
    const display = document.createElement('div')
    display.className = dis.className
    display.append(dis.text)
    this._div.append(display)
  }

  #printButton (btn) {
    const button = document.createElement('button')
    if (btn.className != null) {
      button.className = btn.className
    }
    button.append(btn.text)
    this._div.append(button)
  }
}

const btns = new BotonList()

const btnDis = new Boton('0', 'display')
btns.addBoton(btnDis)
const btnR = new Boton('R')
btns.addBoton(btnR)
const btnPlus = new Boton('+')
btns.addBoton(btnPlus)

const btn7 = new BotonNum('7')
btns.addBoton(btn7)
const btn8 = new BotonNum('8')
btns.addBoton(btn8)
const btn9 = new BotonNum(9)
btns.addBoton(btn9)
const btnMinus = new Boton('-')
btns.addBoton(btnMinus)

const btn4 = new BotonNum('4')
btns.addBoton(btn4)
const btn5 = new BotonNum(5)
btns.addBoton(btn5)
const btn6 = new BotonNum('6')
btns.addBoton(btn6)
const btnMul = new Boton('*')
btns.addBoton(btnMul)

const btn1 = new BotonNum('1')
btns.addBoton(btn1)
const btn2 = new BotonNum(2)
btns.addBoton(btn2)
const btn3 = new BotonNum('3')
btns.addBoton(btn3)
const btnDiv = new Boton('/')
btns.addBoton(btnDiv)

const btn0 = new BotonNum('0')
btns.addBoton(btn0)
const btnComma = new Boton(',')
btns.addBoton(btnComma)
const btnC = new Boton('C')
btns.addBoton(btnC)
const btnEq = new Boton('=', 'amarillo')
btns.addBoton(btnEq)

const printerCalc = new Printer()
printerCalc.printCalc(btns)
