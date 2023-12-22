let cantidad=prompt("cuantas personas son ?");
let listado=[];

for (let i = 0; i < cantidad; i++) {
    
    listado[i]=[prompt("Nombre del estudiante "+(i+1)),0];

    
}

let revisarAsistencia=(nombre,p)=>{

    let  presencia=prompt(nombre);

    if (presencia=="p" || presencia=="P") {
        
        listado[p][1]++;
    }

}



for (let i = 0; i < 10; i++) {
    
    for (let estudiante in listado) {
        
        revisarAsistencia(listado[estudiante][0],estudiante);
    }
    
}

for(estudiante in listado){

    let resultado=`${listado[estudiante][0]}:<br><br>
    ________presentes:${listado[estudiante][1]}:<br>
    ________ausentes:${30-listado[estudiante][1]}<br>`;

    if(30-listado[estudiante][1]>18){

        resultado+= `Reprobado  <br> <br>`

    }else{

    resultado+= ""
    }

    document.write(resultado);  
}