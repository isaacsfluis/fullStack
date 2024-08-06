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

let thisDay = new Date ("August 24, 2018");

// Write the calendar to the elemnt with the id "caldear"

document.getElementById("calendar").innerHTML = createCalendar(thisDay);

// Funtion to generate the calderar table

function createCalendar(calDate){
   let calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}

// function to write the calendar caption

function calCaption(calDate){
   let monthName = ["January", "February", "March", "April", "May","June","July","August","September","Octuber","November","Dicember"]


// Determine the current month

let thisMonth = calDate.getMonth();

// Determine the current year

let thisYear = calDate.getFullYear();

// Write the caption

return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";

}


