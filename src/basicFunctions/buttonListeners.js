import { checkDivDate } from "./checkDivDate";
import { displayProjectsCorrect } from "./displayProjects";
import { projects } from "../objects/projectsObject";
import { Task } from "../objects/taskObjectConstructor";
import { updateLocalStorage } from "./updateStorage";
import _ from "lodash";


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
    const removeTaskButton = document.querySelector(".removeTask");
    const highlightButton = document.querySelector(".highlight");
    const cancelRemoveTaskButton = document.querySelector(".cancelTaskRemove");
    const removeOrHighlightField = document.querySelector(".removeOrHighlightTask");


    submitTaskButton.addEventListener("click", (event) => {
       // console.log("button pressed");
        const taskInput = document.querySelector(".taskInput");
        const dateInput = document.querySelector(".date");
        const background = document.querySelector(".background");
        const taskInputField = document.querySelector(".addTask");
        const tasksContainer = document.querySelector(".tasksContainer");
        let newTask = new Task(dateInput.value, taskInput.value);
        console.log(event.target.classList);
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

    removeTaskButton.addEventListener("click",() => {
        console.log("remove");
        const tasksContainer = document.querySelector(".tasksContainer");
        let selectedProject = removeTaskButton.classList[1];
        let pText;
        const allTasks = tasksContainer.querySelectorAll("p");
        allTasks.forEach(p => {
            if(p.classList.contains("remove/highlight")){
                console.log(p, "zeba");
                pText = p.innerHTML; 
            }     
        })
        _.remove(projects[selectedProject], function(task){
            return task.task == pText;
        })
        updateLocalStorage();
        checkDivDate(projects[selectedProject], tasksContainer);
        removeOrHighlightField.classList.remove("active");
        background.classList.remove("active");
    })
    highlightButton.addEventListener("click", () => {
        const tasksContainer = document.querySelector(".tasksContainer");
        const allTasks = tasksContainer.querySelectorAll("p");
        const selectedProject = highlightButton.classList[1];
        let pText;
        let selectedElement;
        allTasks.forEach(p => {
            if(p.classList.contains("remove/highlight") && !p.classList.contains("highlighted")){
                p.classList.add("highlighted");
                pText = p.innerHTML;           
                projects[selectedProject].forEach((task) => {
                    if(task.task == pText){
                        task.highlight = true;
                    }
                })
                console.log(projects);
                p.classList.remove("remove/highlight"); 
                updateLocalStorage();
            } 
            else{
                pText = p.innerHTML;           
                projects[selectedProject].forEach((task) => {
                    if(task.task == pText){
                        task.highlight = false;
                    }
                })              
                p.classList.remove("highlighted");
                p.classList.remove("remove/highlight");
                updateLocalStorage();
                }

            }) 
            background.classList.remove("active");
            removeOrHighlightField.classList.remove("active");   
        })

    cancelRemoveTaskButton.addEventListener("click", () => {
        background.classList.remove("active");
        removeOrHighlightField.classList.remove("active");  
        const tasksContainer = document.querySelector(".tasksContainer");
        const allTasks = tasksContainer.querySelectorAll("p");
        allTasks.forEach(p => {
            if(p.classList.contains("remove/highlight")){
                p.classList.remove("remove/highlight");
            } 
                 
    })
 
})
}

export {buttonListeners};