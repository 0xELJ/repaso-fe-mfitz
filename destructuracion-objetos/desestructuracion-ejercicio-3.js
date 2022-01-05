const course = {
  id: 1,
  name: "React de cero a Experto",
  author: {
    name: "Fernando",
    lastname: "Herrera"
  },
  durationHours: 36,
  sections: ["Introducción", "Conceptos Generales", "Primeros pasos con React", "Pruebas"] 
};

// Desestructurar el id, name, authorName, authorLastname, duration, createdAt
const { id, name, author: { name: authorName, lastname: authorLastname }, durationHours: duration, createdAt = "Fecha no disponible" } = course;
console.log("\nInfo del curso: ");
console.log("Identificador: ", id);
console.log("Título: ", name);
console.log("Nombre completo del autor: ", authorName +" "+ authorLastname);
console.log("Duración en horas: ", duration);
console.log("Fecha de creación: ", createdAt);

// Desestructurar sections y el resto de propiedades asignarlas a un nuevo objeto llamado courseDetails
const { sections, ...courseDetails } = course;
// const courseDetails = {
//   id: course.id,
//   name: course.name,
//   author: course.author,
//   duration: course.duration
// };
console.log("Nuevo objeto courseDetails", courseDetails);