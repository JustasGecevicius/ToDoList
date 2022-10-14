import {createMainPage} from "./pages/welcomePage";
import {inputProject, projects} from "./objects/projectsObject";
import {storageAvailable} from "./basicFunctions/checkIfStorageAvailable";
import { displayProjectsCorrect } from "./basicFunctions/displayProjects";
import { buttonListeners } from "./basicFunctions/buttonListeners";
import { updateLocalStorage } from "./basicFunctions/updateStorage";

const projectDisplayDiv = document.querySelector(".navProjectDisplay"); 

createMainPage();

if(storageAvailable("localStorage"))
{
// updateLocalStorage();
displayProjectsCorrect(Object.keys(projects), projectDisplayDiv);
buttonListeners();
}