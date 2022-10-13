import {project} from "./inputFields/projectInputFieldControls";
import {openProject} from "./openProject";

let displayProjects = () => {
    const navProjectDisplay = document.querySelector(".navProjectDisplay");
    while(navProjectDisplay.firstChild){
        navProjectDisplay.firstChild.remove();
    }
    for (let keys in project) {        
        const p = document.createElement("p");
        p.innerHTML = keys;
        navProjectDisplay.appendChild(p);
        p.addEventListener("click", (e)=>{
           // console.log(e);
            openProject(e);

        })
    }  
   // console.log(project); 
}

export {displayProjects};