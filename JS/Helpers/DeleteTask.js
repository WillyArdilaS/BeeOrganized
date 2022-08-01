const container = document.getElementById("container-cards");

container.addEventListener("click", (event) => {
    if(event.target.className === "task-btnClose") {
        deleteTask(event.target.parentElement.id);    
    }
})

function deleteTask(id) {
    const taskTitle = document.getElementById(`task${id}Title`)

    if(confirm(`¿Seguro que quiere eliminar la tarea "${taskTitle.textContent}" ?`)) {
        axios.delete(`${API_URL}/tasks/${id}`)
        .then()
        .catch((err) => console.log(err));

        const taskDeleted = document.getElementById(id); 
        taskDeleted.remove();
    }
}   

export {container}