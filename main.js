"use strict";

const date_ = document.getElementById("date");
const time_ = document.getElementById("time");

const newTime = Date.now();
const today = new Date(newTime);
console.log(today);

date_.innerText = today.toDateString();

const displayTime = function () {}; // time is displayed in the html to body
setInterval(() => {
  const today = new Date();
  time_.innerHTML = today.toLocaleTimeString();
}, 1000); // here the 1000 = 1s

// setInterval(() => {
//   const today = new Date();
//   time_.innerHTML = today.toLocaleTimeString();
// }, 1000);
