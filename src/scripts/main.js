import DOM from "./auth/userDOM.js"
import API from "./auth/data.js"
import allFunctions from "./factory.js"
import newsAPI from "./news/newsData.js"
import newsDOM from "./news/newsDOM.js"


// function that puts dashboard on the dom
const dashboardDOM = () => {
    let mainContainer = document.querySelector("#container")
    mainContainer.innerHTML = allFunctions.dashboard();
}

// checks to see if sessionStorage is empty,
// if empty takes user to sign up/log in page, else renders dashboard.
if (sessionStorage.getItem("user") === null) {
    DOM.renderLandingPage();
} else {
    dashboardDOM();
    document.querySelector("#showNewsButton").addEventListener("click", () => {
        newsAPI.getNews().then(data => {
            newsDOM.renderNewsComponent(data);
    })

    })
    }
    // hides events page
    // document.getElementById("eventPageContainer").style.visibility = "hidden";
    // document.querySelector("#createEventButton").addEventListener("click", () => {
    //     API.saveUserInfo().then(res => res.json()).then(res => {
    //         sessionStorage.setItem("user", res.id)
    //             // const getUserId = sessionStorage.getItem("user")
    //         let mainContainer = document.querySelector("#container")
    //         mainContainer.innerHTML += document.querySelector("#eventPageContainer")
    //     })
    // }

    document.querySelector("#newsButton").addEventListener("click", () => {
    let newsTitle = document.querySelector("#newsTitle").value;
        let userId = document.querySelector("#userId").value;
        let newsSynopsis = document.querySelector("#newsSynopsis").value;
        let newsURL = document.querySelector("#newsURL").value;
        const newsObject = {
            newsTitle: newsTitle,
            userId: userId,
            newsSynopsis: newsSynopsis,
            newsURL: newsURL
        }
        newsAPI.saveNews(newsObject).then(res => {
            newsAPI.getNews().then(res => {
                newsDOM.renderNewsComponent(res);
            }
            )
        })
    })


    //     sessionStorage.setItem("user", res.id),
    //         mainContainer.innerHTML += allFunctions.dashboard()
    //     document.getElementById("eventPageContainer").style.visibility = "hidden";
    //     alert("Welcome to the troop!")
    //     document.querySelector("#navButtons").innerHTML = " ";
    //     document.querySelector("#welcomeFormContainer").innerHTML = " ";
    //     document.querySelector("#loginFormContainer").innerHTML = " ";
    // })