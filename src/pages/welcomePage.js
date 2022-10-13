import {allTasks} from "./allTasks";
import {today} from "./today";
import {thisWeek} from "./thisWeek";
import { clearMainDiv } from "../basicFunctions/clearMainDiv";



let createMainPage = () => {
    const addProjectbutton = document.querySelector(".addProjectButton");
    const allTasksButton = document.querySelector("#allTasks");
    const todayButton = document.querySelector("#today");
    const thisWeekButton = document.querySelector("#thisWeek");
    const homeButton = document.querySelector(".websiteName");

    const projectInputDiv = document.querySelector(".addProject");
    const background = document.querySelector(".background");

    const placementDiv = document.querySelector(".placementDiv");
    const mainDiv = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    placementDiv.classList.add("welcome");
    h1.innerHTML = "Welcome to the ToDo List";
    p.innerHTML = "This is the place where all tasks come together";
    mainDiv.appendChild(h1);
    mainDiv.appendChild(p);
    placementDiv.appendChild(mainDiv);

    addProjectbutton.addEventListener("click", () => {
        background.classList.add("active");
        projectInputDiv.classList.add("active");
    })


    allTasksButton.addEventListener("click", () => {
        allTasks();
    })
    todayButton.addEventListener("click", () => {
        today();
    })
    thisWeekButton.addEventListener("click", () => {
        thisWeek();
    })
    homeButton.addEventListener("click", () => {
        clearMainDiv("welcome");
        const mainDiv = document.createElement("div");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        h1.innerHTML = "Welcome to the ToDo List";
        p.innerHTML = "This is the place where all tasks come together";
        mainDiv.appendChild(h1);
        mainDiv.appendChild(p);
        placementDiv.appendChild(mainDiv);        
    })
};
export {createMainPage}

