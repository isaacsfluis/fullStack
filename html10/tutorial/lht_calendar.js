"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Luis Isaacs
   Date:  08/06/2024

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

// set the date displayed in the calendar

// let thisDay = new Date("August 24, 2018");
let thisDay = new Date();

// Write the calendar to the elemnt with the id "caldear"

document.getElementById("calendar").innerHTML = createCalendar(thisDay);

// Funtion to generate the calderar table

function createCalendar(calDate){
   let calendarHTML = "<table id='calendar_table'>";
      calendarHTML += calCaption(calDate); // August 24, 2018
      calendarHTML += calWeekdayRow();
      calendarHTML += calDays(calDate); // August 24, 2018
      calendarHTML += "</table>";
   return calendarHTML;
}

// function to write the calendar caption

function calCaption(calDate){
   let monthName = ["January", "February", "March", "April", 
                     "May","June","July","August","September",
                     "Octuber","November","Dicember"];

// Determine the current month
   let thisMonth = calDate.getMonth(); // August 24, 2018

// Determine the current year
   let thisYear = calDate.getFullYear(); // August 24, 2018

// Write the caption
   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";

}

// Function to write a table row of weekday abbreviations

function calWeekdayRow(){
   // Array of weekday abbreviations

   let dayName = ['Sun','Mon','Tus','Wed','Thr','Fri','Sat'];
   let rowHTML = '<tr>';
   // Loop through the dayName array

   for (let i = 0; i < dayName.length; i++) {
   rowHTML += '<th class="calendar_weekdays">' + dayName[i] + "</th>";
   }

   rowHTML += "</tr>";
   return rowHTML;
}

// * Function to calculate the number of days in the month */
function daysInMonth(calDate) {

// Array of days in each month
   let dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

// Extract the four digit year and month value
   let thisYear = calDate.getFullYear();
   let thisMonth = calDate.getMonth();

// Revise the days in February for leap years
   if (thisYear % 4 === 0) {
      if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
         dayCount[1] = 29;
      }
   } 
// Return the number of days for the current month
   return dayCount[thisMonth];
}

/* Function to write table rows for each day of the month */
function calDays(calDate) {

   // Determine the starting day of the month
   let day = new Date(calDate.getFullYear(), calDate.getMonth(), 1); // August 24, 2018
   let weekDay = day.getDay();
   
   // Write blank cells preceding the starting day
   let htmlCode = "<tr>";
   for (let i = 0; i < weekDay; i++) {
      htmlCode += "<td></td>";
   }
   
      // Write cells for each day of the month
   let totalDays = daysInMonth(calDate);
   
   let highlightDay = calDate.getDate();
   for (let i = 1; i <= totalDays; i++) {
      day.setDate(i);
      weekDay = day.getDay();

      if (weekDay === 0) htmlCode += "<tr>";
      if (i === highlightDay) {
         htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>";
      } else {
         htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
      }
      if (weekDay === 6) htmlCode += "</tr>";
   }

   return htmlCode
}