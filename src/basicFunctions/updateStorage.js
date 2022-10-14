import { projects } from "../objects/projectsObject";

// function updateLocalStorage (projectsObject) {
//     function storageAvailable(type) {
//         let storage;
//         try {
//             storage = window[type];
//             const x = '__storage_test__';
//             storage.setItem(x, x);
//             storage.removeItem(x);
//             return true;
//         }
//         catch (e) {
//             return e instanceof DOMException && (
//                 // everything except Firefox
//                 e.code === 22 ||
//                 // Firefox
//                 e.code === 1014 ||
//                 // test name field too, because code might not be present
//                 // everything except Firefox
//                 e.name === 'QuotaExceededError' ||
//                 // Firefox
//                 e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//                 // acknowledge QuotaExceededError only if there's something already stored
//                 (storage && storage.length !== 0);
//         }
//     } if(storageAvailable("localStorage")){

//     }
//     console.log(Object.getPrototypeOf(projects));
//     if(localStorage["projects"] === undefined && Object.keys(projects).length == 0)
//     {
//        //projects = 2;       
//         localStorage["projects"] = JSON.stringify(projects);
//        // console.log(localStorage);
//     }

//     else if(Object.keys(localStorage["projects"]).length != 0 && Object.keys(projects).length == 0) 
//     {
//         //console.log(JSON.parse(localStorage["projects"]));
//         // projects[] = JSON.parse(localStorage["projects"]);
//        // console.log(projects);
//     }

    // else if(localStorage["projects"] !== undefined && projects !== 1)
    // {   
    //     console.log("updating");
    //     localStorage["projects"] = JSON.stringify(projectsObject);
    // }
    //console.log(localStorage["projects"]);
// }

// export{updateLocalStorage};