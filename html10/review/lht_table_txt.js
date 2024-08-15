"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: 
   Date:   

	
*/


/* Set the date displayed in the calendar */
let thisDay = new Date("July 29, 2018");

/* Write the calendar to the element with the id "calendar" */

document.getElementById("eventList").innerHTML = createEventList(eventDates);

/* Function to generate the calendar table */
function createEventList(calDate) {

   let tableHTML = `<table id='eventTable'>
                  <caption>Upcoming Events</caption>
                  <tr>
                     <th>Date</th>
                     <th>Event</th>
                     <th>Price</th>
                  </tr>`;
   tableHTML += tabletd(eventDates, eventDescriptions, eventPrices, thisDay)              
   tableHTML += "</table>";
   return tableHTML;
   }

   function buscarFechaEnArray(eventDates, thisDay) {
      for (let i = 0; i < eventDates.length; i++) {
         // Crear un objeto Date a partir de la cadena en el array
         let fechaArray = new Date(eventDates[i]);
         
         // Comparar solo la fecha (sin la hora)
         if (fechaArray.toDateString() === thisDay.toDateString()) {
            return i; // Devolver la posición si la fecha coincide
         }
      }
      return -1; // Devolver -1 si no se encuentra la fecha
   }

   function tabletd(eventDates, eventDescriptions, eventPrices, thisDay) {
      let rowHTML = '';
      let startIndex = buscarFechaEnArray(eventDates, thisDay);
  
      if (startIndex === -1) {
          return "<tr><td colspan='3'>No hay eventos próximos.</td></tr>";
      }
  
      // Limitar a los próximos 14 eventos
      let endIndex = Math.min(startIndex + 14, eventDates.length);
  
      for (let i = startIndex; i < endIndex; i++) {
          rowHTML += "<tr>" +
                     "<td>" + eventDates[i] + "</td>" +
                     "<td>" + eventDescriptions[i] + "</td>" +
                     "<td>" + eventPrices[i] + "</td>" +
                     "</tr>";
      }
  
      return rowHTML;
  }
