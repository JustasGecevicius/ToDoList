import {createMainPage} from "./pages/welcomePage";
import {inputProject} from "./inputFields/projectInputFieldControls";
import {storageAvailable} from "./basicFunctions/checkIfStorageAvailable";
import { inputTask } from "./inputFields/taskInputField";

createMainPage();

if(storageAvailable("localStorage"))
{
inputProject();
}