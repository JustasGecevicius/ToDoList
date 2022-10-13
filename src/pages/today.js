import { clearMainDiv } from "../basicFunctions/clearMainDiv";
import {project} from "../inputFields/projectInputFieldControls";

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
    let currentDate = `${year}-${month}-0${day}`;

    console.log(currentDate);

    for (let x in project){
        for(let y of project[x]){
            if(y.date == currentDate)
            {
            const div = document.createElement("div");
            div.classList.add(y.date);
            const h4 = document.createElement("h4");
            const p = document.createElement("p");
            h4.innerHTML = y.date;
            p.innerHTML = y.task;
            div.append(h4, p);
            placementDiv.appendChild(div);
            }
        }
    }
}
export {today};