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
