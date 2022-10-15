import { projects } from "../objects/projectsObject";
import { openProject } from "../pages/openProject";

let displayProjectsCorrect = () => 
{
    const projectsContainer = document.querySelector(".navProjectDisplay");
    while(projectsContainer.firstChild){
        projectsContainer.firstChild.remove();
    }

    for(let project in projects){
        const p = document.createElement("p");        
        p.innerHTML = project.replaceAll("-", " ");
        //console.log(project);
        p.classList.add(project.replaceAll(" ", "-"));
        projectsContainer.appendChild(p);
        p.addEventListener("click", openProject);
    }
}

export{displayProjectsCorrect};