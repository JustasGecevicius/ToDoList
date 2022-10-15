import { projects } from "../objects/projectsObject";

 function updateLocalStorage (projectsObject) {

    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    } 
    if(storageAvailable("localStorage")){

    if(localStorage["projects"] === undefined && Object.keys(projects).length == 0)
    {   
        localStorage["projects"] = JSON.stringify(projects);
        console.log(localStorage, "create localStorage");
        return;
    }

    else if(Object.keys(localStorage["projects"]).length != 0 && Object.keys(projects).length == 0) 
    {
        console.log("update Object", projects);
        let projectsFromStorage = JSON.parse(localStorage["projects"]);
        console.log(projectsFromStorage);
        for (let project in projectsFromStorage){
            console.log(project);
            projects[project] = projectsFromStorage[project];
        }   
        console.log(projects);
        return;
    }

    else if(localStorage["projects"] !== undefined &&  Object.keys(projects).length !== 0)
    {   
        //console.log(localStorage, "update storage");
        let newObject = {};
        for (let project in projects){
            newObject[project] = projects[project];            
        }
        localStorage["projects"] = JSON.stringify(newObject);
        console.log(localStorage);
        return;
    }

    }
 }

 export{updateLocalStorage};