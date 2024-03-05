// DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting");
name1 = document.getElementById("name");
focus = document.getElementById("focus");

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 Hours
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;
  setTimeout(showTime, 1000);
}

// Add Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // AfterNoon
    document.body.style.backgroundImage = "url('../img/noon.jpg')";
    greeting.textContent = "Good Afteroon";
  } else {
    //Evening
    document.body.style.backgroundImage = "url('../img/night.jpg')";
    greeting.textContent = "Good Afteroon";
    document.body.style.color = "white";
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name1.textContent = "[Enter Name]";
  } else {
    name1.textContent = localStorage.getItem(name1);
  }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem("focus") === null) {
      focus.textContent = "[Enter Focus]";
    } else {
      focus.textContent = localStorage.getItem(focus);
    }
  }

showTime();
setBgGreet();
getName();
getFocus();
