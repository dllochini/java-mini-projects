const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li"); // Create a new list item
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span"); // Create a new span for delete button
    span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
    li.appendChild(span);
  }
  inputBox.value = ""; // Clear the input box after adding the task
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    //click funtions in the list
    if (e.target.tagName === "LI") {
      //if we click on a list item
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      //if we click on the cross icon
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("todo-data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("todo-data");
}
showTask();
