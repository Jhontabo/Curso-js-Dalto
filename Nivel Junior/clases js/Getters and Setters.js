

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


  
  // vamos a usar herencia para ello usamos lo siguiente

  class carro extends vehiculo{

    constructor(nombre,llantas,color,Marca){
        super(nombre,llantas,color)
        this.Marca=Marca;
    }
    
    set setMarca(marca){
        this.Marca=marca;
    }

    get getMarca(){
        return this.Marca;
    }
  }


  //Ahora vamos a usar getters and setters 
const Car = new carro("Carro",4,"Rojo","Porche")
Car.setMarca="Ferrari";
document.write(Car.getMarca);