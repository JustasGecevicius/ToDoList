import { clearMainDiv } from "../basicFunctions/clearMainDiv";
import { projects } from "../objects/projectsObject";
import { checkDivDate } from "../basicFunctions/checkDivDate";
import { Task } from "../objects/taskObjectConstructor";
import { createMainPage } from "./welcomePage";
import { updateLocalStorage } from "../basicFunctions/updateStorage";
import { displayProjectsCorrect } from "../basicFunctions/displayProjects";

let openProject = (clickEvent) => {
  clearMainDiv("project");
  const placementDiv = document.querySelector(".placementDiv");
  const tasksInputDiv = document.querySelector(".addTask");
  const background = document.querySelector(".background");
  const submitTaskButton = document.querySelector(".submitTask");

  const tasksContainer = document.createElement("div");
  const projectName = document.createElement("h2");
  const openTaskInputButton = document.createElement("button");
  const deleteProjectButton = document.createElement("button");

  const removeTaskButton = document.querySelector(".removeTask");
  const highlightButton = document.querySelector(".highlight");
  const cancelRemoveTaskButton = document.querySelector(".cancelTaskRemove");

  deleteProjectButton.classList.add("deleteProject");
  deleteProjectButton.classList.add(clickEvent.target.classList[0]);
  tasksContainer.classList.add("tasksContainer");
  openTaskInputButton.classList.add("openTaskInputButton");

  if(submitTaskButton.classList.length == 2)
  {
    submitTaskButton.classList.remove(submitTaskButton.classList[1]);
    submitTaskButton.classList.add(clickEvent.target.classList[0]); 
  }
  else{submitTaskButton.classList.add(clickEvent.target.classList[0]); }

  if(removeTaskButton.classList.length == 2)
  {
    removeTaskButton.classList.remove(removeTaskButton.classList[1]);
    removeTaskButton.classList.add(clickEvent.target.classList[0]);
  }
  else{  removeTaskButton.classList.add(clickEvent.target.classList[0]);}

  if(highlightButton.classList.length == 2)
  {
    highlightButton.classList.remove(highlightButton.classList[1]);
    highlightButton.classList.add(clickEvent.target.classList[0]);
  }
  else{  highlightButton.classList.add(clickEvent.target.classList[0]);}

  if(cancelRemoveTaskButton.classList.length == 2)
  {
    cancelRemoveTaskButton.classList.remove(cancelRemoveTaskButton.classList[1]);
    cancelRemoveTaskButton.classList.add(clickEvent.target.classList[0]);
  }
  else{  cancelRemoveTaskButton.classList.add(clickEvent.target.classList[0]);}
  

  openTaskInputButton.innerHTML = "Add a Task";
  projectName.innerHTML = clickEvent.target.innerHTML;
  deleteProjectButton.innerHTML = "Delete Project";

  placementDiv.append(projectName, openTaskInputButton, deleteProjectButton, tasksContainer);

  if (projects[clickEvent.target.classList[0]].length != 0) {
    checkDivDate(projects[clickEvent.target.classList[0]], tasksContainer);
  }

  openTaskInputButton.addEventListener("click", () => {
    tasksInputDiv.classList.add("active");
    background.classList.add("active");
  });

  deleteProjectButton.addEventListener("click", (e) => {
    createMainPage();
    delete projects[clickEvent.target.classList[0]];
    if(Object.keys(projects).length == 0){
      localStorage["projects"] = JSON.stringify(projects);
    }
    updateLocalStorage();
    displayProjectsCorrect();
  })
};

export { openProject };
