import webComp from "./userComponent.js";
import allFunctions from "../factory.js";
// innerHTML for putting things on the DOM
const DOM = {
    renderLandingPage: () =>{
    let mainContainer = document.querySelector("#container")
    mainContainer.innerHTML = allFunctions.homePage();
    //  when user clicks signup/login button forms appear on DOM
    document.querySelector("#signInButton").addEventListener("click", () => {
        mainContainer.innerHTML += allFunctions.signUpForm()
        mainContainer.innerHTML += allFunctions.logInForm()
    })
}
}
export default DOM