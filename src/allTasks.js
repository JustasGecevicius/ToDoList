let allTasks = () => {
    console.log("zeba");
    const placementDiv = document.querySelector(".placementDiv");
    while(placementDiv.firstChild){
        placementDiv.firstChild.remove();
    }
    placementDiv.classList.remove(placementDiv.classList[1]);
    placementDiv.classList.add("allTasks");
    const h2 = document.createElement("h2");
    h2.innerHTML = "All Tasks";
    placementDiv.appendChild(h2);
}

export {allTasks};