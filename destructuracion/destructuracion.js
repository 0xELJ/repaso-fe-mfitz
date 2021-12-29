// Simula el registro de un usuario en una BD
const user = {
  name: "Martha",
  lastname: "Fitz",
  age: 25,
  address: "Miguel Hidalgo 11, Juliantla, Gro.",
  genre: "Femenino",
  active: true,
};

// Asignando propiedades de un objeto a nuevas variables
// const myName = user.name;
// const age = user.age;
// const lastname = user.lastname;
// const address = user.address;
// const genre = user.genre;
// console.log("Forma tradicional: ", myName, lastname, address, age, genre);

// Usando desctructuración
// La destructuración es una caracteristica de JS que permite
// extraer múltiples propiedades de un objeto y asignarlas
// a variables
// const { name: myName, lastname, address, age, genre } = user;
// console.log("Con Destructuración: ", myName, lastname, address, age, genre);

const button = document.getElementById("btn");
button.addEventListener("click", function() {
  const p = document.querySelector("p");
  const { name, lastname, genre, age } = user;
  p.innerText = "Nombre completo: " + name + " " + lastname + "\n" + "Género: " + genre + "\n" + "Edad: " + age;
  // const name = user.name;
  // const lastname = user.lastname;
  // const genre = user.genre;
  // const age = user.age;
  // p.innerText = "Nombre completo: " + name + " " + lastname + "\n" + "Género: " + genre + "\n" + "Edad: " + age;
});