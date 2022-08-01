const API_URL = "https://my-json-server.typicode.com/FIMLMReactJS/M3U2TrelloAppWilliamArdila";

/* Axios requests */
axios
    .get(`${API_URL}/tasks`)
    .then((res) => showAllTask(res.data))
    .catch((err) => console.log(err));

/* Tasks creation */ 
const showAllTask = (data) => {
    data.map((task) => createTask(task));
}

const createTask = (task) => {
    let newTaskHTML = `
        <article id=${task.id} class="task">
            <h3 id="task${task.id}Title"> ${task.title} </h3>
            <p class="task-description"> ${task.description} </p>
            <p> Owner: ${task.owner} </p>
            <p> Start Date: ${dateFormat(task.startDate)} </p>
            <p> End Date: ${dateFormat(task.endDate)} </p>
            <button type="button" class="task-btnClose"> X </button>
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