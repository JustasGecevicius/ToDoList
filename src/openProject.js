import { clearMainDiv } from "./basicFunctions/clearMainDiv";
import {project} from "./inputFields/projectInputFieldControls";
import {inputTask} from "./inputFields/taskInputField";
import {checkDivDate} from "./basicFunctions/checkDivDate";

let openProject = (clickEvent) => {
    clearMainDiv("project");
    const placementDiv = document.querySelector(".placementDiv");
    const addTaskField = document.querySelector(".addTask");
    const background = document.querySelector(".background");
    const allTasksDiv = document.createElement("div");
    const projectName = document.createElement("h2");
    const addTaskButton = document.createElement("button");
    const submitTaskButton = document.querySelector(".submitTask");
    let taskHolderDivs;

    allTasksDiv.classList.add("allTasksDiv");
    projectName.innerHTML = clickEvent.target.innerHTML;
    addTaskButton.classList.add("addTaskButton");
    submitTaskButton.classList.add(clickEvent.target.innerHTML);
    addTaskButton.innerHTML = "Add a Task";

    placementDiv.appendChild(projectName);
    placementDiv.appendChild(addTaskButton);
    placementDiv.appendChild(allTasksDiv);

   if((project[clickEvent.target.innerHTML]).length != 0)
   {
    for (let task of project[clickEvent.target.innerHTML]){

        taskHolderDivs = allTasksDiv.querySelectorAll("div");
        checkDivDate(taskHolderDivs, task, allTasksDiv);
    }
   }
   else {console.log("no tasks")};

    addTaskButton.addEventListener("click", () => {
        addTaskField.classList.add("active");
        background.classList.add("active");
        inputTask(clickEvent.target.innerHTML);
})
    
}

export{openProject};