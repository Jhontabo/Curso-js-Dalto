let animales=["perro","gato","raton"];



// for in recorre los indices osea muestra los numeros
for (animal in animales){

	//document.write(animal+ "<br>")
	document.write(animales[animal]+ "<br>")
}

document.write("<br>")
// mientras que for of recorre todo muestra el contenido

for (animal of animales){
	
	document.write(animal+ "<br>")	
}