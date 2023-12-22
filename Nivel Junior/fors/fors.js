// let animales=["perro","gato","raton"];



// // for in recorre los indices osea muestra los numeros
// for (animal in animales){

// //document.write(animal+ "<br>")
// document.write(animales[animal]+ "<br>")
// }

// document.write("<br>")
// // mientras que for of recorre todo muestra el contenido

// for (animal of animales){

// document.write(animal+ "<br>")	
// }

document.write('<br>')

//label para for

array1 = ["mariana", 'jose ','roberto','jacobo']
array2 = ['Jhon', 'juan', 'james', array1]

forRancio:
for (let array in array2) {
	if(array==3){
		for (let array of array1){
			if (array=='juan') {
				break forRancio;
			}
			document.write(array + '<br>')
		}
	}
	
}