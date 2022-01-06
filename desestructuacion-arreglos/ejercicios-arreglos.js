// 1.- Declarar un arreglo const que contenga el nombre de 6 colores diferentes
const colores = ["Amarillo", "Verde", "Rojo", "Morado", "Azul", "Lila"];

// 2.- Usando la desestructuracion de arreglos se debe de asignar los primeros dos elementos a primerColor y segundoColor.
//el resto de elementos se debe asignar a otrosColores
const [primerColor, segundoColor, ...otrosColores]= colores;

// 3.- Imprimir primerColor, segundoColor y otrosColores.
console.log("Primer Color: ", primerColor);
console.log("Segundo Color: ", segundoColor);
console.log("Resto de los colores del arreglo: ", otrosColores);


// 1.- Considera el siguiente arreglo: 
const calificaciones = [7, 9 ,5, 8, 5, 10];

// 2.- Usando la desestructuracion de arreglos se debe extraer los elementos mayores a 5 (aprobatorios)
// en distintas variables.
const [cal1, cal2, , cal3, , cal4] = calificaciones;

// 3.- Imprimir las variables que se destructuraron.
console.log("Aprobadas: ", cal1, cal2, cal3, cal4);


// 1.- Considerar el siguiente arreglo: 
const apellidos = ["Ruiz", undefined, "Lopez", "Bahena"];

// 2.- Usando la desestructuracion de arreglos se debe extraer el primerElemento y segundoElemento 
//con un valor predeterminado. El resto de los elementos se debe extraer a un nuevoArreglo.
const [primerElemento, segundoElemento = "Sin Apellido", ...nuevoArreglo] = apellidos;

// 3.- Imprimir el primerElemento, segundoElemento y nuevoArreglo
console.log("Apellido 1: ", primerElemento);
console.log("Apellido 2: ", segundoElemento);
console.log("Arreglo Nuevo: ", nuevoArreglo);

// SE PUEDE DECLARAR Y DESESTRUCTURAR UN ARREGLO EN UNA SOLA INSTRUCCION (LINEA DE CÓDIGO)
const [ape1, ,ape2, ape3] = ["Ruiz", undefined, "Lopez", "Bahena"];
console.log("Apellidos: ", ape1, ape2, ape3);


// 1.- Considerar el siguiente arreglo: 
let [ a = 1, b = 2, c = 3 ] = [ 'cat', null ];

// 2.- Colocar del lado derecho de cada linea el valor esperado en consola. 
console.log( a ); // cat
console.log( b ); // null
console.log( c ); // 3