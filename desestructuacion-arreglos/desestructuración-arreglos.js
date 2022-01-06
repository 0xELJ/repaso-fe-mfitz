const nombres = ["Juan", "Carol", "Enrique", "Martha"];

// Desestructuración de arreglos
// Es una caracteristica de JS que permite extraer elementos de un arreglo
// y asignarlo a variables

//const [primerNombre, segundoNombre, tercerNombre, cuartoNombre, quintoNombre = "Sin nombre"] = nombres;
console.log("Desestructuración...");
// console.log("Nombres: ", primerNombre, segundoNombre, tercerNombre, cuartoNombre, quintoNombre);

//const [,,tercerNombre, cuartoNombre] = nombres;
// console.log("Nombres: ", tercerNombre, cuartoNombre);

const [nombre1,,,nombre4] = nombres;
console.log("Nombres: ", nombre1, nombre4);

const [nom1, ...rNombres] = nombres;
console.log("Resto de nombres: ",rNombres);