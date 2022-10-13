import { checkDivDate } from "../basicFunctions/checkDivDate";
import { openProject } from "../openProject";
import { Task } from "../taskObjectConstructor";
import {project} from "./projectInputFieldControls";

let inputTask = (projectName) => {

    const addTaskButton = document.querySelector(".submitTask");
    const taskInput = document.querySelector(".taskInput");
    const dateInput = document.querySelector(".date");
    const background = document.querySelector(".background");
    const taskInputField = document.querySelector(".addTask");
    addTaskButton.addEventListener("click", (e) => {
        const bigDiv = document.querySelector(".allTasksDiv");
        const divAllTasks = bigDiv.querySelectorAll("div");
        let newTask = new Task(dateInput.value, taskInput.value);
        project[e.target.classList[1]].push(newTask);
        background.classList.remove("active");
        taskInputField.classList.remove("active");
        dateInput.value = "";
        taskInput.value = "";
        checkDivDate(divAllTasks, newTask, bigDiv);
    });
}


export{inputTask};