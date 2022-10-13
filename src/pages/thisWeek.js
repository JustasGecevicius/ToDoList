import { clearMainDiv } from "../basicFunctions/clearMainDiv";

let thisWeek = () => {
    clearMainDiv("thisWeek");
    const placementDiv = document.querySelector(".placementDiv");
    const h2 = document.createElement("h2");
    h2.innerHTML = "This Weeks tasks";
    placementDiv.appendChild(h2);
}

export {thisWeek};