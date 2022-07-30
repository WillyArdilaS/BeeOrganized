const urlAPI = "https://my-json-server.typicode.com/WillyArdilaS/M3U2TrelloAppWilliamArdila";

/* Axios requests */
axios
    .get(`${urlAPI}/tasks`)
    .then((res) => showAllTask(res.data))
    .catch((err) => console.log(err));

/* Tasks creation */ 
const showAllTask = (data) => {
    data.map((task) => createTask(task));
}

const createTask = (task) => {
    let newTaskHTML = `
        <article id=${task.id} class="task">
            <h3> ${task.title} </h3>
            <p class="task-description"> ${task.description} </p>
            <p> Owner: ${task.owner} </p>
            <p> Start Date: ${task.startDate} - End Date: ${task.endDate} </p>
            <button class="task-btnClose"> X </button>
        </article> 
    `;
    
    let containerToDo = document.getElementById("toDo-tasksContainer");
    let containerDoing = document.getElementById("doing-tasksContainer");
    let containerDone = document.getElementById("done-tasksContainer");
    
    if(task.state === "to-do") {
        containerToDo.innerHTML += newTaskHTML;
    } else if(task.state === "doing") {
        containerDoing.innerHTML += newTaskHTML;
    } else if(task.state === "done") {
        containerDone.innerHTML += newTaskHTML;
    }
} 