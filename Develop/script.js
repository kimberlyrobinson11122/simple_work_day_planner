// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add a listener for click events on the save button. This code should use the ID in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? 
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
    
  //$( "li" ).each(function( index ) {
//   console.log( index + ": " + $( this ).text() );
// });
  //function scope, lexical scope (function(index) - scoped to a function
  $(".time-block").each(function(index) {
    const currentHour = $(this).attr("id").replace("hour-", "");
    if (dayjs().hour() < currentHour) {
      $(this).addClass("future");
    }
    if (dayjs().hour() > currentHour) {
      $(this).addClass("past");
    }
    if (dayjs().hour() === parseInt (currentHour)) {
      $(this).addClass("present");
    }
  });

  dayjs().hour() // gets current hour
  //console.log(dayjs().hour());




  //$( this ).addClass( "foo" );
// });
 
// // Instead, you should rely on implicit iteration:
// $( "li" ).addClass( "bar" );
  //HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
console.log(dayjs().format());



//current date
var currentDateEl = document.getElementById("currentDay");
var currentDate = new Date();
var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    };

    currentDateEl.textContent = currentDate.toLocaleDateString('en-US', options);