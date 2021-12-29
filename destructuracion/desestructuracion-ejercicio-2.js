const certificate = {
  id: "1234",
  batch: "L1",
  startDate: "28 de diciembre de 2021",
  endDate: "27 de enero de 2022",
  model: "Tsuru",
  manufacturer: "Nissan",
  owner: {
    name: "Juan",
    lastname: "Perez",
  },
  // serial: undefined,
  serial: "HF423423"
};

// Desestructuración de propiedades: id, batch, startDate, endDate, model, manufacturer, ownerName, ownerLastname
const {
  id: certificateId,
  batch,
  startDate,
  endDate,
  model,
  manufacturer,
  owner: { name: ownerName, lastname: ownerLastname, age = 20 },
  serial = "Sin serie",
} = certificate;

// Imprimir en consola el id, batch, startDate, endDate, model, manufacturer
console.log("Datos del folio");
console.log("Número de folio: " + certificateId);
console.log("Lote: " + batch);
console.log("Fecha de inicio: " + startDate);
console.log("Fecha de expiración: " + endDate);
console.log("Modelo: " + model);
console.log("Fabricante: " + manufacturer);
// console.log("Nombre completo del propietario: " + ownerName + " " + ownerLastname);
console.log(`Nombre completo del propietario: ${ownerName} ${ownerLastname}`);
console.log(`Número de serie: ${serial}`)
console.log(`Edad de prop: ${age}`)
