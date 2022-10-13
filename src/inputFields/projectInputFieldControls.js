import {displayProjects} from "../displayProjects";

let project = 
{ projectName1: [{date: "2022-10-09", task: "task"},{date: "2022-10-09", task: "task5"}, {date: "2022-09-10", task: "task2"}], 
projectName2: [{date: "date3", task: "task3"}, {date: "date4", task: "task4"}]
};

let inputProject = () => {
const projectInputDiv = document.querySelector(".addProject");
const projectSubmitButton = document.querySelector(".submitProject");
const projectNameInputField = document.querySelector(".projectName");
const background = document.querySelector(".background");

projectSubmitButton.addEventListener("click", () => {
    projectInputDiv.classList.remove("active");
    background.classList.remove("active"); 
    createProjectArray(projectNameInputField.value);  
    projectNameInputField.value = ""; 
    displayProjects();
})
}

let createProjectArray = (projectName) => {
    project[projectName] = [];
}

export {inputProject, createProjectArray, project};