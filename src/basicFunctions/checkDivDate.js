import {find} from "lodash";

let checkDivDate = (divArray, task, taskContainer) => {
    const newArray = [...divArray];
    let dateArray = [];
    newArray.forEach(taskDiv => {
        dateArray.push(taskDiv.classList[0]);
    });
     //console.log(dateArray, task.date);
    const div = find(newArray, (o) => o.classList == task.date);
    console.log(div)
    if(div){
         const p = document.createElement("p");
         p.innerHTML = task.task;
         div.append(p);
    }
    else{
        console.log("new");
        const div = document.createElement("div");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        console.log(task.date);
        div.classList.add(task.date);            
        h4.innerHTML = task.date;
        p.innerHTML = task.task;
        div.append(h4, p);
        taskContainer.appendChild(div);
    }
    
    return; 
}

export{checkDivDate};