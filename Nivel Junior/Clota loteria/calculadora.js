class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    sumar(num1, num2) {
        this.resultado = parseInt(num1) + parseInt(num2);
        return this.resultado;
    }

    restar(num1, num2) {
        this.resultado = parseInt(num1) - parseInt(num2);
        return this.resultado;
    }

    multiplicar(num1, num2) {
        this.resultado = parseInt(num1) * parseInt(num2);
        return this.resultado;
    }

    dividir(num1, num2) {
        this.resultado = parseInt(num1) / parseInt(num2);
        return this.resultado;
    }

    potencia(num, pot) {
        this.resultado = parseInt(num ** pot);
        return this.resultado;
    }

    raizCuadrada(num) {
        this.resultado = parseInt(Math.sqrt(num));
        return this.resultado;
    }

    raizCubica(num) {
        this.resultado = parseInt(Math.cbrt(num));
        return this.resultado;
    }
}

const calculadora = new Calculadora();

let opc = prompt('Que operacion quieres hacer 1: suma, 2: resta, 3: mult, 4: division , 5: potencia ,6: raizCuadrada ,7: RaizCubica');

// Función para obtener un número del usuario
function obtenerNumero(mensaje) {
    return prompt(mensaje);
}

let numero1 = obtenerNumero("Cual es el primer numero:");
let numero2;  
let resultado;

// Solicitar numero2 solo si la opción es de 1 a 5
if (opc >= 1 && opc <= 5) {
    numero2 = obtenerNumero("Cual es el segundo numero:");
}

switch (opc) {
    case '1':
        resultado = calculadora.sumar(numero1, numero2);
        break;
    case '2':
        resultado = calculadora.restar(numero1, numero2);
        break;
    case '3':
        resultado = calculadora.multiplicar(numero1, numero2);
        break;
    case '4':
        resultado = calculadora.dividir(numero1, numero2);
        break;
    case '5':
        resultado = calculadora.potencia(numero1, numero2);
        break;
    case '6':
        resultado = calculadora.raizCuadrada(numero1);
        break;
    case '7':
        resultado = calculadora.raizCubica(numero1);
        break;
    default:
        alert('Opcion no disponible');
        break;
}

if (resultado !== undefined) {
    alert(`El resultado es : ${resultado}`);
}
