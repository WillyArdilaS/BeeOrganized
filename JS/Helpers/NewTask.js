import {validateOwner, validateDates} from "./Validations.js";

const form = document.getElementById("panel-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(!validateOwner()) {
        alert("Por favor seleccione al responsable de la tarea");
    } else if(!validateDates()) {
        alert("Por favor seleccione la fecha de inicio y fin de la tarea");
    } else {
        validateDates();
        const formData = event.target;
        const data = {
            state: "to-do",
            title: formData.taskTitle.value,
            description: formData.taskDescription.value,
            owner: formData.taskOwner.value,
            startDate: formData.startDate.value,
            endDate: formData.endDate.value
        }

        /* Axios post */
        axios.post(`${API_URL}/tasks`, data)
        .then((res) => {
            createTask(res.data);
            formData.reset();
        })
        .catch((err) => console.log(err));
    }
})

export{form}