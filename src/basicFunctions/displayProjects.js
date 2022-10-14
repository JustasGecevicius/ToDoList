import { openProject } from "../pages/openProject";

let displayProjectsCorrect = (projects, projectsContainer) => 
{
    while(projectsContainer.firstChild){
        projectsContainer.firstChild.remove();
    }
    //console.log(projects);
    projects.forEach(project => {
        const p = document.createElement("p");        
        p.innerHTML = project.replaceAll("-", " ");
        //console.log(project);
        p.classList.add(project.replaceAll(" ", "-"));
        projectsContainer.appendChild(p);
        p.addEventListener("click", openProject);
    });
}

export{displayProjectsCorrect};