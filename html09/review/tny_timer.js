/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Luis Isaacs
   Date:   

*/
/**
 * Function to calculate the next July 4th based on the current date
 * @param {Date} currentDate - The current date
 * @returns {Date} - The date of the next July 4th
 */
function nextJuly4(currentDate) {
   let cYear = currentDate.getFullYear();
   let jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);

   // If July 4th has passed this year, move to the next year

   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);

   return jDate;
}

// Call the showClock() function to display the initial date and time
showClock();

// Set an interval to update the showClock() function every second
setInterval(showClock, 1000);

/**
 * Function to display the current date, time, and countdown to July 4th
 */
function showClock() {
   // Declare a variable named thisDay that stores the current date and time
   let thisDay = new Date();

   // Get the local date and time as strings
   let localDate = thisDay.toLocaleDateString();
   let localTime = thisDay.toLocaleTimeString();

   // Update the inner HTML of the page element with the ID currentTime
   document.getElementById("currentTime").innerHTML = `<span>${localDate}</span><span>${localTime}</span>`;

   // Get the next July 4th date and set the time to 9 p.m.
   let j4Date = nextJuly4(thisDay);
   j4Date.setHours(21, 0, 0);

   // Calculate the time remaining until the next July 4th at 9 p.m.
   let timeDifference = j4Date - thisDay;

   let secs = Math.floor(timeDifference / 1000); // Total seconds
   let mins = Math.floor(secs / 60); // Total minutes
   let hrs = Math.floor(mins / 60); // Total hours
   let days = Math.floor(hrs / 24); // Total days

   // Calculate remaining hours, minutes, and seconds
   hrs = hrs % 24;
   mins = mins % 60;
   secs = secs % 60;

   // Update the text content of the countdown elements
   document.getElementById("dLeft").textContent = days;
   document.getElementById("hLeft").textContent = hrs;
   document.getElementById("mLeft").textContent = mins;
   document.getElementById("sLeft").textContent = secs;
}



