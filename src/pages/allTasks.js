import { checkDivDate } from "../basicFunctions/checkDivDate";
import { clearMainDiv } from "../basicFunctions/clearMainDiv";
import {projects} from "../objects/projectsObject";

let allTasks = () => {
    clearMainDiv("allTasks");
    const placementDiv = document.querySelector(".placementDiv");    
    const h2 = document.createElement("h2");
    h2.innerHTML = "All Tasks";
    const tasksDiv = document.createElement("div");
    placementDiv.append(h2, tasksDiv);
    let allTasksArray = [];
    for (let project in projects){
        //console.log(projects[project]);
        for (let task of projects[project])
        {
            allTasksArray.push(task);
        }
    }
    checkDivDate(allTasksArray, tasksDiv);
 }


export {allTasks};