import { checkDivDate } from "../basicFunctions/checkDivDate";
import { clearMainDiv } from "../basicFunctions/clearMainDiv";
import {projects} from "../objects/projectsObject";

let today = () => {
    clearMainDiv("today");
    const placementDiv = document.querySelector(".placementDiv");
    const h2 = document.createElement("h2");
    h2.innerHTML = "Todays tasks";
    const tasksDiv = document.createElement("div");
    placementDiv.append(h2, tasksDiv);
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${year}-${month}-${day}`;
    let arrayOfTodaysTasks = [];

    //console.log(currentDate);

    for (let project in projects){
        for(let task of projects[project]){
            if(task.date == currentDate)
            {
                arrayOfTodaysTasks.push(task);            
            }
        }
    }
    //console.log(arrayOfTodaysTasks);
    checkDivDate(arrayOfTodaysTasks, tasksDiv);
}
export {today};