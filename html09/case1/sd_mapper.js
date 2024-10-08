/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Luis Isaacs
   Date:   

*/

// let thisTime = new Date("February 3,2018 3:15:28 a.m.");
//new Date(año, mes, día, hora, minutos, segundos)
// 1: El mes de la fecha. Los meses en JavaScript se indexan desde 0, por lo que:
// 0 = enero
// 1 = febrero
// 11 = diciembre Así que el número 1 corresponde a febrero.

  // Array con los nombres de los meses
  const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  // Crear la fecha
  //const thisTime = new Date(2022, 8, 3, 3, 15, 28);
  const thisTime = new Date();

  // Obtener el nombre del mes
  const monthName = meses[thisTime.getMonth()];

  // Obtener día, año, hora, minutos y segundos
  const day = thisTime.getDate();
  const mouth = thisTime.getMonth();
  const year = thisTime.getFullYear();
  const hours = thisTime.getHours();
  const minutes = thisTime.getMinutes();
  const seconds = thisTime.getSeconds();

  // Crear una cadena formateada con el nombre del mes
  const timeStr = `${monthName} ${day}, ${year} ${hours}:${minutes}:${seconds}`;

  // Modificar el contenido del div con id timeStamp
  document.getElementById('timeStamp').innerHTML = timeStr;

const mapNum = (2 * mouth + hours) % 24;

const imgStr = `<img src='sd_sky${mapNum}.png' alt='Sky Map ${mapNum}' />`;

document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);

