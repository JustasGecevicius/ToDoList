import { clearMainDiv } from "../basicFunctions/clearMainDiv";
import {projects} from "../objects/projectsObject";
import {checkDivDate} from "../basicFunctions/checkDivDate";
import {Task} from "../objects/taskObjectConstructor"

let openProject = (clickEvent) => {
    clearMainDiv("project");
    const placementDiv = document.querySelector(".placementDiv");
    const tasksInputDiv = document.querySelector(".addTask");
    const background = document.querySelector(".background");
    const tasksContainer = document.createElement("div");
    const projectName = document.createElement("h2");
    const openTaskInputButton = document.createElement("button");
    const submitTaskButton = document.querySelector(".submitTask");

  
    tasksContainer.classList.add("tasksContainer");
    projectName.innerHTML = clickEvent.target.innerHTML;
    openTaskInputButton.classList.add("openTaskInputButton");
    submitTaskButton.classList.remove(submitTaskButton.classList[1]);
    //console.log(clickEvent.target.innerHTML);
    submitTaskButton.classList.add(clickEvent.target.classList[0]);
    openTaskInputButton.innerHTML = "Add a Task";

    placementDiv.appendChild(projectName);
    placementDiv.appendChild(openTaskInputButton);
    placementDiv.appendChild(tasksContainer);
    //console.log(projects);
   if((projects[clickEvent.target.classList[0]]).length != 0)
   {
        checkDivDate(projects[clickEvent.target.classList[0]], tasksContainer);    
   }

  // else {console.log("no tasks")};

    openTaskInputButton.addEventListener("click", () => {
        tasksInputDiv.classList.add("active");
        background.classList.add("active");
})
    
}

export{openProject};