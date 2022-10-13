import { checkDivDate } from "../basicFunctions/checkDivDate";
import { openProject } from "../openProject";
import { Task } from "../taskObjectConstructor";
import {projects} from "./projectInputFieldControls";

let inputTask = (projectName) => {

    const addTaskButton = document.querySelector("#submissionButton");
    const taskInput = document.querySelector(".taskInput");
    const dateInput = document.querySelector(".date");
    const background = document.querySelector(".background");
    const taskInputField = document.querySelector(".addTask");

    function eventListener(event){
        console.log("button pressed");
        const addTaskButton = document.querySelector("#submissionButton");
        const taskInput = document.querySelector(".taskInput");
        const dateInput = document.querySelector(".date");
        const background = document.querySelector(".background");
        const taskInputField = document.querySelector(".addTask");
        const bigDiv = document.querySelector(".allTasksDiv");
        let newTask = new Task(dateInput.value, taskInput.value);
        projects[event.target.classList[1]].push(newTask);
        background.classList.remove("active");
        taskInputField.classList.remove("active");
        dateInput.value = "";
        taskInput.value = "";
        checkDivDate(projects[event.target.classList[1]], bigDiv);
    }
    addTaskButton.addEventListener("click", eventListener);
}


export{inputTask};