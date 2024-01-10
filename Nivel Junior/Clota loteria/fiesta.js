let free = false;

let validarEdad = (hora) => {

    let edad = prompt("Cual es tu edad?")

    if (edad >= 18) {

        if (hora >= 2 && hora < 7 && free == false) {
            alert("podes pasar por que sos la primera persona en entrar despues de las 2 am");
            free = true;
        } else {
            alert(`son las ${hora}:00 hrs , pero tenes que pagar `)
        }

    } else {

        alert("Sos menor de edad no puedes pasar")
    }

}

validarEdad(2);
validarEdad(23);
validarEdad(8);
