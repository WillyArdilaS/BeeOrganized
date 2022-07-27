// Variables
const panel = document.getElementById("newTask");
const btnShow = document.getElementById("container-btnNewTask");
const btnHide = document.getElementById("newTask-btnClose");

// Button actions
btnShow.addEventListener("click", function(event) {
    event.preventDefault();

    panel.style.visibility = "visible";
})

btnHide.addEventListener("click", function(event) {
    event.preventDefault();

    panel.style.visibility = "hidden";
})