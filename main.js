"use strict";

const date_ = document.getElementById("date");
const time_ = document.getElementById("time");
const todoField = document.getElementById("todo-field");
const addBtn = document.getElementById("add-btn");
const todoNumber = document.getElementById("todo-number");
const listContainer = document.getElementById("todo-list-container");

const newTime = Date.now();
const today = new Date(newTime);
console.log(today);

date_.innerText = today.toDateString();

const displayTime = function () {}; // time is displayed in the html to body
setInterval(() => {
  const today = new Date();
  time_.innerHTML = today.toLocaleTimeString();
}, 1000); // here the 1000 = 1s

// TASK COUNT
let todoListCount = 0;

const displayTaskCount = function (todoListCount) {
  todoNumber.innerText = todoListCount;
};

// add to do list
addBtn.addEventListener("click", function () {
  const todoName = todoField.value;

  if (!todoName) {
    alert("Input field cannot be empty! Please write a task.");
  } else {
    const task = `
    <div class="list">
      <input type="checkbox" class="list-check checked" />
      <span class="list-name">${todoName}</span>
      <button class="edit">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button class="delete"><i class="fa-solid fa-trash"></i></button>
     </div>
    `;
    listContainer.insertAdjacentHTML("beforeend", task);
  }

  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((editBtn) => {
    editBtn.addEventListener("click", function (e) {
      let targetElement = e.target;

      // console.log(targetElement); // i (icon)
      // console.log(e.target.parentElement); // button
      // console.log(e.target.className === "edit"); // false

      if (!(e.target.className === "edit")) {
        targetElement = e.target.parentElement;
      }

      // console.log(targetElement.previousElementSibling);
      // console.log(targetElement.parentNode);

      todoField.value = targetElement.previousElementSibling.innerText;
      targetElement.parentNode.remove();

      todoListCount = todoListCount - 1;
      displayTaskCount(todoListCount);
    });
  });

  todoField.value = "";

  //
});
