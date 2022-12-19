import { checkDivDate } from "../basicFunctions/checkDivDate";
import { clearMainDiv } from "../basicFunctions/clearMainDiv";
import {projects} from "../objects/projectsObject";

import { getFirebaseConfig } from "./firebase-config";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = getFirebaseConfig();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let allTasks = () => {
    clearMainDiv("allTasks");
    const placementDiv = document.querySelector(".placementDiv");    
    const h2 = document.createElement("h2");
    h2.innerHTML = "All Tasks";
    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasksContainer");
    const tasks = projects.tasks;
    placementDiv.append(h2, tasksContainer);
    let allTasksArray = [];
    for (let project in projects){
        //console.log(projects[project]);
        for (let task of projects[project])
        {
            allTasksArray.push(task);
        }
    }
    checkDivDate(allTasksArray, tasksContainer);
 }


export {allTasks};