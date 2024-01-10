//Metodo starWith sirve para ver si una frase empieza con una palabra en ese+pecifico 
//Por ejemplo lo siguiente 


let cadena="cadena de prueba"
let cadena2="cadena"

resultado = cadena.startsWith(cadena2)

//document.write(resultado)

//Es este caso nos mostrara un true ya que la frase si comienza con cadena

//Metodo para ver si termina con cadena es el siguiente 

let cadena3="cadena de prueba"
let cadena4="cadena"

resultado = cadena3.endsWith(cadena4)

//document.write(resultado)


//Ahora nos dira falso ya que no termina con cadena para que nos muestre true debe 
//terminar con cadena osea con la palabra cadena

//Metodo para encontrar palabras o candenas de caracteres dentro de otras para ello 
//se usa includes

let cadena5="cadena de prueba"
let cadena6="cadena"

resultado = cadena5.includes(cadena6)

//esto pregunta si el contenido de la cadena 6 esta en la cadena 5  en este caso si esta
// por lo que nos va a devolver true

document.write(resultado)


