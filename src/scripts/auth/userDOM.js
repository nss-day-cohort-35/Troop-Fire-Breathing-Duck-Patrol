import webComp from "./userComponent.js";
import allFunctions from "../factory.js";
import API from "./data.js";

// innerHTML for putting things on the DOM
const DOM = {
    renderLandingPage: () =>{
    let mainContainer = document.querySelector("#container")
    mainContainer.innerHTML = allFunctions.homePage();
    //  when user clicks signup/login button forms appear on DOM
    document.querySelector("#signInButton").addEventListener("click", () => {
        mainContainer.innerHTML += allFunctions.signUpForm()
        mainContainer.innerHTML += allFunctions.logInForm()

        document.querySelector("#addUserButton").addEventListener("click", () => {
            API.saveUserInfo().then(res => res.json()).then(res => {
                sessionStorage.setItem("user", res.id)
                // const getUserId = sessionStorage.getItem("user")
                mainContainer.innerHTML += allFunctions.dashboard();
                        document.querySelector("#navButtons").innerHTML = " ";
                        document.querySelector("#welcomeFormContainer").innerHTML = " ";
                        document.querySelector("#loginFormContainer").innerHTML = " ";
            })
        })
        document.querySelector("#logInButton").addEventListener("click", () => {
            API.saveUserInfo().then(res => res.json()).then(res => {
                sessionStorage.setItem("user", res.id)
                // const getUserId = sessionStorage.getItem("user")
                mainContainer.innerHTML += allFunctions.dashboard();
                document.querySelector("#navButtons").innerHTML = " ";
                document.querySelector("#welcomeFormContainer").innerHTML = " ";
                document.querySelector("#loginFormContainer").innerHTML = " ";
            })
        })
    })
    // // stores the login and password in session storage

}
}
export default DOM