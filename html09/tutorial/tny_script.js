"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Luis Isaacs
   Date:   07/30/2024

*/

// window.alert("Welcome to Tulsa");
// Window.Alert("Welcome to Tulsa");

/* Display the current date and time */
document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";
// document.getElementById("dateNow").innerHTML = "hola";


/* Display the time left until New Year's Eve */
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";


/* Execute the function to run and display the countdown clock */
runClock();

setInterval("runClock()", 1000);


/* Function to create and run the countdown clock */

function runClock() {

/* Store the current date and time */
// var currentDay = new Date("May 23, 2018 14:35:05");
var currentDay = new Date();

var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

/* Calculate the days until January 1st */
var newYear = new Date("January 1, 2024");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDay)/(1000*60*60*24);

// Documentation by DAY in the part down 

// document.getElementById("days").textContent = Math.floor(daysLeft);

// Documentation by de hour
/* Calculate the hours left in the current day */

var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

// document.getElementById("hrs").textContent = hrsLeft;
// document.getElementById("hrs").textContent = Math.floor(hrsLeft);


// In the end

/* Calculate the minutes and seconds left in the current hour
*/
var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);
}

var currentDay = new Date();

