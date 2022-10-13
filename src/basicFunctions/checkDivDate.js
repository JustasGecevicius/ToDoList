import {find} from "lodash";

let checkDivDate = (tasks, taskContainer) => {
    (() => {
        while(taskContainer.firstChild){
            taskContainer.firstChild.remove();
        }
    })();
    console.log("checkDivDate");
    let newArray;
    const tasksArray = [...tasks];

    tasksArray.forEach(task => {
        newArray = taskContainer.querySelectorAll("div");
        const div = find(newArray, (o) => o.classList == task.date);
        //console.log(div);
        if(div){
            const p = document.createElement("p");
            p.innerHTML = task.task;
            div.append(p);
            //console.log(task, "new");
       }
       else{
           const div = document.createElement("div");
           const h4 = document.createElement("h4");
           const p = document.createElement("p");
           //console.log(task);
           div.classList.add(task.date);            
           h4.innerHTML = task.date;
           p.innerHTML = task.task;
           div.append(h4, p);
           taskContainer.appendChild(div);
       }
     })
    return; 
}

export{checkDivDate};