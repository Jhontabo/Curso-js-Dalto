const materias = {
    Apo1:[80,4,3,'Apo1'],
    logica:[20,4,3,'logica'],
    algebra:[92,4 ,3,'algebra'],
    fisica:[50,4,3,'fisica'],
    electronica:[60,4,3,'electronica'],
    ingles:[75,4,3,'ingles']

}

const asistencia=()=>{
    for (materia in materias) {
        let asistencias=materias[materia][0];
        let promedio=materias[materia][1];
        let trabajo=materias[materia][2];

        console.log(materias[materia][3]);
        if (asistencias >=90) {
            
            console.log("%cAsistencias completas","color:green");
        }else{
            
            console.log("%cFaltan asistencias","color:red");
        }
        
        if (asistencias >=7) {
            
            console.log("%cPromedio en orden","color:green");
        }else{
            
            console.log("%cPromedio desaprobado","color:red");
        }
        if (asistencias >=3 ) {
            
            console.log("%cTrabajos Practicos en Orden","color:green");
        }else{
            
            console.log("%cFaltan trabajos practicos ","color:red");
        }
    }
}

asistencia();