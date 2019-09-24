import DOM from "./auth/userDOM.js"
import API from "./auth/data.js"
import allFunctions from "./factory.js"

const dashboardDOM = () => {
    let mainContainer = document.querySelector("#container")
    mainContainer.innerHTML = allFunctions.dashboard();
}

// checks to see if sessionStorage is empty.
if (sessionStorage.getItem("user") === null) {
    DOM.renderLandingPage();
} else {
    dashboardDOM();
    document.getElementById("eventPageContainer").style.visibility = "hidden";
    document.querySelector("#createEventButton").addEventListener("click", () => {
        API.saveUserInfo().then(res => res.json()).then(res => {
            sessionStorage.setItem("user", res.id)
                // const getUserId = sessionStorage.getItem("user")
            let mainContainer = document.querySelector("#container")
            mainContainer.innerHTML += document.querySelector("#eventPageContainer")
        })
    })
}