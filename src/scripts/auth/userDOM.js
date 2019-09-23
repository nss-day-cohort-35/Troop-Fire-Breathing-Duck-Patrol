import webComp from "./userComponent.js";
import allFunctions from "../factory.js";

const DOM = {
    renderLandingPage: () =>{
    let mainContainer = document.querySelector("#container")
    mainContainer.innerHTML = allFunctions.homePage();
}
}
export default DOM