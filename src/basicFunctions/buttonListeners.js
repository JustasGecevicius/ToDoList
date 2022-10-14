import { checkDivDate } from "./checkDivDate";
import { displayProjectsCorrect } from "./displayProjects";
import { projects } from "../objects/projectsObject";
import { Task } from "../objects/taskObjectConstructor";
import { updateLocalStorage } from "./updateStorage";


let buttonListeners = () => {
    const submitTaskButton = document.querySelector(".submitTask");
    const projectInputField = document.querySelector(".addProject");
    const projectSubmitButton = document.querySelector(".submitProject");
    const projectNameInputField = document.querySelector(".projectName");
    const background = document.querySelector(".background");
    const projectsContainer = document.querySelector(".navProjectDisplay");
    const cancelTaskSubmit = document.querySelector(".cancelTaskSubmit");
    const cancelProjectSubmit = document.querySelector(".cancelProjectSubmit");
    const taskInputField = document.querySelector(".addTask");

    submitTaskButton.addEventListener("click", (event) => {
       // console.log("button pressed");
        const taskInput = document.querySelector(".taskInput");
        const dateInput = document.querySelector(".date");
        const background = document.querySelector(".background");
        const taskInputField = document.querySelector(".addTask");
        const tasksContainer = document.querySelector(".tasksContainer");
        let newTask = new Task(dateInput.value, taskInput.value);
        projects[event.target.classList[1]].push(newTask);
        updateLocalStorage(projects);
        background.classList.remove("active");
        taskInputField.classList.remove("active");
        dateInput.value = "";
        taskInput.value = "";
        checkDivDate(projects[event.target.classList[1]], tasksContainer);
    });
  
    projectSubmitButton.addEventListener("click", () => {
      projectInputField.classList.remove("active");
      background.classList.remove("active");
      projects[projectNameInputField.value.replaceAll(" ", "-")] = [];
      updateLocalStorage(projects);
      projectNameInputField.value = "";
      displayProjectsCorrect(Object.keys(projects), projectsContainer);
    });

    cancelProjectSubmit.addEventListener("click", () => {
        background.classList.remove("active");
        projectInputField.classList.remove("active");
    })

    cancelTaskSubmit.addEventListener("click", () => {
        background.classList.remove("active");
        taskInputField.classList.remove("active");
    })


 
}

export{buttonListeners};