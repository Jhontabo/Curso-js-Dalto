/*En javaScrip hay varias formas de declarar funciones*/

function sumar(num1,num2){

let sum=num1+num2;
document.write(sum + "<br>");

}

//Esta es la segunda forma de hacer una funcion

let suma=function(num1,num2){

    let sum=num1+num2;
    document.write(sum + "<br>");

}

// y la tercera forma es la forma en flecha 

let hacerSuma=(num1,num2)=>{

    let sum=num1+num2;
    document.write(sum + "<br>");

}
sumar(4,5);
suma(3,5);
hacerSuma(7,8);


//ademas se puede hacer mucho mas corta la funcion cuando solo es un parametro no se pone
//() parentesis y no se pone {}

let mostrarNumero=numero=>document.write(numero+ "<br>");

mostrarNumero(3131);
