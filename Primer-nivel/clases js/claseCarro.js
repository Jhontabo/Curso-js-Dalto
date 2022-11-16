

class vehiculo{

  constructor(nombre,llantas,color){

      this.nombre=nombre;
      this.llantas=llantas;
      this.color=color;
      this.info=`El vehiculo: ${nombre} ,tiene   ${llantas} llantas  
      y es de color ${color} `
}

  darInfo(params) {
    document.write(this.info +"<br>")
}

}

let carro=new vehiculo ("carro",4,"rojo");
let moto=new vehiculo ("moto",2,"negro");
let cuatrimoto=new vehiculo ("cuatrimoto",4,"verde");


carro.darInfo();
moto.darInfo();
cuatrimoto.darInfo();