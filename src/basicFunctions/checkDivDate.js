import { isBefore, parseISO, toDate } from "date-fns";
import {find} from "lodash";

let checkDivDate = (tasks, tasksContainer) => {
    const background = document.querySelector(".background");
    const removeOrHighlightField = document.querySelector(".removeOrHighlightTask");
    const removeTaskButton = document.querySelector(".removeTask");
    const highlightButton = document.querySelector(".highlight");

    while(tasksContainer.firstChild){
        tasksContainer.firstChild.remove();
    }
    //console.log("checkDivDate");
    let displayedTaskDivs;
    const tasksArray = [...tasks];

    tasksArray.sort((task1, task2) => {
        let task1Correct = toDate(parseISO(task1.date));
        let task2Correct = toDate(parseISO(task2.date));
        return isBefore(task2Correct, task1Correct) ? 1 : -1 ;
    });
    tasksArray.forEach(task => {
        //console.log(task);
        displayedTaskDivs = tasksContainer.querySelectorAll("div");
        const div = find(displayedTaskDivs, (o) => o.classList == task.date);
        if(div){
            const p = document.createElement("p");
            p.addEventListener("click", () => {
                background.classList.add("active");
                removeOrHighlightField.classList.add("active");
                p.classList.add("remove/highlight");
            })
            p.innerHTML = task.task;
            div.append(p);
       }
       else{
            //console.log(task);
           const div = document.createElement("div");
           const h4 = document.createElement("h4");
           const p = document.createElement("p");
           p.addEventListener("click", () => {
            background.classList.add("active");
            removeOrHighlightField.classList.add("active");
            p.classList.add("remove/highlight");
        })
           div.classList.add(task.date);            
           h4.innerHTML = task.date;
           p.innerHTML = task.task;
           div.append(h4, p);
           tasksContainer.appendChild(div);
       }
     })
    return; 
}

export{checkDivDate};