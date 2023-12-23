

class vehiculo{

  constructor(nombre,llantas,color){

      this.nombre=nombre;  //this es el objeto y el otro es el parametro
      this.llantas=llantas;
      this.color=color;
      this.info=`El vehiculo: ${nombre} ,tiene   ${llantas} llantas  
      y es de color ${color} `
    } 
    //la razon por la cual no se usa funciones flecha es porque no se pueden usar para hacer metodos
    //Dentro de las clases , se debe usar funciones normales
    darInfo(params) {
    document.write(this.info +"<br>")
  }
}

//para constructores por lo general su usa const en vez de let 

const carro=new vehiculo ("carro",4,"rojo");  //El new sirve para decir que vamos a crear un nuevo objeto
const moto=new vehiculo ("moto",2,"negro");
const cuatrimoto=new vehiculo ("cuatrimoto",4,"verde");


carro.darInfo();
moto.darInfo();
cuatrimoto.darInfo();