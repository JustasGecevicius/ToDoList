let inputProject = () => {
const projectInputDiv = document.querySelector(".addProject");
const projectSubmitButton = document.querySelector(".submitProject");
const projectNameInputField = document.querySelector(".projectName");
const background = document.querySelector(".background");

projectSubmitButton.addEventListener("click", () => {
    projectInputDiv.classList.remove("active");
    background.classList.remove("active");
    projectNameInputField.value = "";    
})
}

export {inputProject};