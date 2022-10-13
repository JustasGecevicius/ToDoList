let clearMainDiv = (openTab) => {    
    const placementDiv = document.querySelector(".placementDiv");
    placementDiv.classList.remove(placementDiv.classList[1]);
    while(placementDiv.firstChild){
        placementDiv.firstChild.remove();
    }
    if(placementDiv.classList[1] != openTab)
    {
    switch (openTab){
        case "thisWeek":
            placementDiv.classList.add("thisWeek");
            break;
        case "allTasks":
            placementDiv.classList.add("allTasks");
            break;
        case "today":
            placementDiv.classList.add("today");
            break;
        case "project":
            placementDiv.classList.add("project");
            break;
        case "welcome":
            placementDiv.classList.add("welcome");
            break;    
    }
}
//console.log(placementDiv);
}

export {clearMainDiv};
