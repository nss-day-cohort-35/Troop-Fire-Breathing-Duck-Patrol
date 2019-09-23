import DOM from "./auth/userDOM.js"
import API from "./auth/data.js"
import allFunctions from "./factory.js"

// checks to see if sessionStorage is empty.
if  (sessionStorage.getItem("user") === null) {
DOM.renderLandingPage();
} else {
      allFunctions.dashboard();
  }
