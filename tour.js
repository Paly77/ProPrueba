// Preguntar al usuario su nombre
let nombreUsuario = prompt("¿Cuál es tu nombre?");

// Preguntar al usuario su edad
let edadUsuario = prompt("¿Cuántos años tienes?");

// Mostrar un mensaje con el nombre y la edad
alert(`Hola ${nombreUsuario}, tienes ${edadUsuario} años.`);

// Listado de fechas de la gira (puedes ajustar esto según tu proyecto)
const fechas = [
  { ciudad: "Buenos Aires", fecha: "15 de Octubre, 2024" },
  { ciudad: "Rosario", fecha: "20 de Octubre, 2024" },
  { ciudad: "Córdoba", fecha: "25 de Octubre, 2024" },
  { ciudad: "Mendoza", fecha: "30 de Octubre, 2024" },
];

// Mostrar las fechas en la página
const listaFechas = document.getElementById('lista-fechas');
fechas.forEach(tour => {
  const listItem = document.createElement('li');
  listItem.textContent = `Ciudad: ${tour.ciudad}, Fecha: ${tour.fecha}`;
  listaFechas.appendChild(listItem);
});