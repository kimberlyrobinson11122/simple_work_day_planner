$(function () {

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

  //save button, event listener
  $(".saveBtn").click(function() {
      const task = $(this).siblings("textarea").val()
      const currentHour = $(this).attr("data-hour");
      console.log(currentHour);

    //local storage save task
    localStorage.setItem(`hour-${currentHour}`, task);
    console.log(`user text at ${currentHour} saved to local storage`);  
    });


  //get items from local storage to textarea val
  $(`.hourTextArea`).each(function() {
      const currentTextArea = $(this).find("textarea");
      const currentHour = $(this).attr("id").replace("hour-", "");

      if (localStorage.getItem(`hour-${currentHour}`)) {
        currentTextArea.val(localStorage.getItem(`hour-${currentHour}`));
      }
      });
});

// const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
console.log(dayjs().format());

//changes saved alert
$(function() {
  $(".saveBtn").click(function() {
    alert("Your changes have been saved successfully")
  });
});


//current date
const currentDateEl = document.getElementById("currentDay");
const currentDate = new Date();
var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    };

    currentDateEl.textContent = currentDate.toLocaleDateString('en-US', options);

  //Bad attempts
  //when saveBtn is clicked for a specific hour (id+textarea)
  // const textAreas = $('.hourTextArea');
  // console.log(textAreas);
  // const saveButtons = document.querySelectorAll('.saveBtn');
  
  // //each button needs an event listener
  // saveButtons.forEach(button => {
  //   button.addEventListener('click', function() {
    
  //   const task = $(this).siblings("textarea").val()
  //   
  //   console.log(currentHour);

  //     localStorage.setItem(`hour-${currentHour}`, task);
  //     console.log(`user text at ${currentHour} saved to local storage`);
  //   })
  // })

  // //localStorage.getItems
  // for(let i=0; i < localStorage.length; i++) {
  //   console.log(localStorage.getItem(localStorage.key(i)));
  // }

  //   textAreas.each((index, timeBlockArea) => {
  //   console.log(timeBlockArea.id);
   
  //   const currentTextArea = $(this).siblings("textarea");
  //   console.log(currentTextArea.val());
  //   //if timeBlockArea id = localStorage key then pop the text area with localStorage val
     
  //     if (localStorage.getItem(timeBlockArea.id)) {
  //         currentTextArea.val(localStorage.getItem(timeBlockArea.id))
  //     }
  // });

  // //class=hourTextArea
  //button data-hour="XX" (XX is the time/hour)
  //localStorage.getItem



// // Instead, you should rely on implicit iteration:
// $( "li" ).addClass( "bar" );
  //HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // id="hour-10"
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
