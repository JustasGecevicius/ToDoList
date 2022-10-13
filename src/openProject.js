import { clearMainDiv } from "./basicFunctions/clearMainDiv";
import {project} from "./inputFields/projectInputFieldControls";
import {inputTask} from "./inputFields/taskInputField";
import {checkDivDate} from "./basicFunctions/checkDivDate";
import {Task} from "./taskObjectConstructor"

let openProject = (clickEvent) => {
    clearMainDiv("project");
    const placementDiv = document.querySelector(".placementDiv");
    const addTaskField = document.querySelector(".addTask");
    const background = document.querySelector(".background");
    const allTasksDiv = document.createElement("div");
    const projectName = document.createElement("h2");
    const openTaskInputButton = document.createElement("button");
    const submitTaskButton = document.querySelector(".submitTask");

    allTasksDiv.classList.add("allTasksDiv");
    projectName.innerHTML = clickEvent.target.innerHTML;
    openTaskInputButton.classList.add("openTaskInputButton");
    submitTaskButton.classList.remove(submitTaskButton.classList[1]);
    submitTaskButton.classList.add(clickEvent.target.innerHTML);
    openTaskInputButton.innerHTML = "Add a Task";

    placementDiv.appendChild(projectName);
    placementDiv.appendChild(openTaskInputButton);
    placementDiv.appendChild(allTasksDiv);

   if((project[clickEvent.target.innerHTML]).length != 0)
   {
        checkDivDate(project[clickEvent.target.innerHTML], allTasksDiv);    
   }

   else {console.log("no tasks")};

    openTaskInputButton.addEventListener("click", () => {
        addTaskField.classList.add("active");
        background.classList.add("active");
})

    submitTaskButton.addEventListener("click", (event) => {
        console.log("button pressed");
        const taskInput = document.querySelector(".taskInput");
        const dateInput = document.querySelector(".date");
        const background = document.querySelector(".background");
        const taskInputField = document.querySelector(".addTask");
        const bigDiv = document.querySelector(".allTasksDiv");
        let newTask = new Task(dateInput.value, taskInput.value);
        project[event.target.classList[1]].push(newTask);
        background.classList.remove("active");
        taskInputField.classList.remove("active");
        dateInput.value = "";
        taskInput.value = "";
        checkDivDate(project[event.target.classList[1]], bigDiv);
    });
    
}

export{openProject};