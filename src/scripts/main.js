import DOM from "./auth/userDOM.js"
import API from "./auth/data.js"
import allFunctions from "./factory.js"
import newsAPI from "./newsData.js"

const dashboardDOM = ()=> {
    let mainContainer = document.querySelector("#container")
    mainContainer.innerHTML = allFunctions.dashboard();
}
// checks to see if sessionStorage is empty.
if  (sessionStorage.getItem("user") === null) {
DOM.renderLandingPage();
} else {
     dashboardDOM();
  }


