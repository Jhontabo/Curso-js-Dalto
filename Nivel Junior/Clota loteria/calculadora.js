let sumar =(num1,num2)=>{
    
    return resultado=parseInt(num1) + parseInt(num2);

}

let restar =(num1,num2)=>{
    
    return resultado=parseInt(num1)-parseInt(num2);

}

let multiplicar =(num1,num2)=>{
    
    return resultado=parseInt(num1)*parseInt(num2); 

}

let dividir =(num1,num2)=>{
    
    return resultado=parseInt(num1)/parseInt(num2);

}


let opc=prompt('Que operacion quieres hacer 1:suma , 2:resta ,3:multp ,4:division');


    if (opc==1) {

    let numero1=prompt("cual es el primer numero :");
    let numero2=prompt("cual es el segundo numero :");
    resultado=sumar(numero1,numero2);
    alert(`El resultado de la suma es : ${resultado}`);
    }else if(opc==2){

    let numero1=prompt("cual es el primer numero :");
    let numero2=prompt("cual es el segundo numero :");
    resultado=restar(numero1,numero2);
    alert(`El resultado de la resta es: ${resultado}`);

    }else if(opc==3){
    let numero1=prompt("cual es el primer numero :");
    let numero2=prompt("cual es el segundo numero :");
    resultado=multiplicar(numero1,numero2);
    alert(`El resultado de la multiplicacion es ${resultado}`);

    }else if(opc==4){

    let numero1=prompt("cual es el primer numero :");
    let numero2=prompt("cual es el segundo numero :");
    resultado=dividir(numero1,numero2);
    alert(`El resultado de la division  es ${resultado}`);
    }else{

    alert('Opcion no disponible')
}