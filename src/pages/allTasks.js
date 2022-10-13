import { checkDivDate } from "../basicFunctions/checkDivDate";
import { clearMainDiv } from "../basicFunctions/clearMainDiv";
import {projects} from "../inputFields/projectInputFieldControls";

let allTasks = () => {
    clearMainDiv("allTasks");
    const placementDiv = document.querySelector(".placementDiv");    
    const h2 = document.createElement("h2");
    h2.innerHTML = "All Tasks";
    const tasksDiv = document.createElement("div");
    placementDiv.append(h2, tasksDiv);

    for (let project in projects){

        checkDivDate(projects[project], tasksDiv, false)
        //console.log(specificProject);
        // for(let task of projects[specificProject]){
        //     taskHolderDivs = tasksDiv.querySelectorAll("div");
        //     let divWithTheSameDate = checkDivDate(taskHolderDivs, task.date);
        //     console.log(divWithTheSameDate);
        //     if(divWithTheSameDate != 0){
        //     let div = divWithTheSameDate;
        //     const p = document.createElement("p");
        //     p.innerHTML = task.task;
        //     div.append(p);
        //     }
        //     else {
        //     const div = document.createElement("div");
        //     const h4 = document.createElement("h4");
        //     const p = document.createElement("p");
        //     div.classList.add(task.date);            
        //     h4.innerHTML = task.date;
        //     p.innerHTML = task.task;
        //     div.append(h4, p);
        //     tasksDiv.appendChild(div);
        //     }
            
        }
    }


export {allTasks};