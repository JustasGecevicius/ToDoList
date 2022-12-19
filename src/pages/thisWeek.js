import { isThisWeek, parseISO, toDate } from "date-fns";
import { checkDivDate } from "../basicFunctions/checkDivDate";
import { clearMainDiv } from "../basicFunctions/clearMainDiv";
import {projects} from "../objects/projectsObject";

let thisWeek = () => {
    clearMainDiv("thisWeek");
    let thisWeeksTasks = [];

    for (let project in projects){
        for(let task of projects[project]){
            let correctDateFormat = toDate(parseISO(task.date));
            if((isThisWeek(correctDateFormat, { weekStartsOn: 1 }))){
                thisWeeksTasks.push(task);
            }
        }
    }
    
    const placementDiv = document.querySelector(".placementDiv");
    const h2 = document.createElement("h2");
    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasksContainer");
    h2.innerHTML = "This Weeks tasks";
    placementDiv.append(h2, tasksContainer);
    checkDivDate(thisWeeksTasks, tasksContainer);
}

export {thisWeek};