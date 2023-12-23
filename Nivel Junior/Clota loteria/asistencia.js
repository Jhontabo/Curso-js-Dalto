let listadoEstudiantes=prompt("cuantas personas son ?");
let listado=[];


//Primer for sirve para Nos pida la cantidad de nombres dependiendo de la cantidad 
//personas que se ingresen en el listado de estudiantes

for (let i = 0; i < listadoEstudiantes; i++) {
    
    listado[i]=[prompt("Nombre del estudiante "+(i+1)),0];

    
}

let revisarAsistencia=(nombre,p)=>{

    let  asistencia=prompt(nombre);

    if (asistencia=="p" || asistencia=="P") {
        
        listado[p][1]++;
    }

}

//pedir 30 veces la asitencia

for (let i = 0; i < 30; i++) {
    
    for (let estudiante in listado) {
        
        revisarAsistencia(listado[estudiante][0],estudiante);
    }
    
}

//
for(estudiante in listado){

    let resultado=`${listado[estudiante][0]}:<br><br>
    ________presentes:${listado[estudiante][1]}:<br>
    ________ausentes:${10-listado[estudiante][1]}<br>`;

    if(30-listado[estudiante][1]>18){

        resultado+= `Reprobado  <br> <br>`

    }else{

    resultado+= ""
    }

    document.write(resultado);  
}