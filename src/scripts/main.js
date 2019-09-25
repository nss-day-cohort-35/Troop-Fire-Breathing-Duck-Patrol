import DOM from "./auth/userDOM.js"
import API from "./auth/data.js"
import allFunctions from "./factory.js"
import newsAPI from "./news/newsData.js"
import newsDOM from "./news/newsDOM.js"

const newsSubmit = () => {document.querySelector("#newsButton").addEventListener("click", () => {
    console.log("newsSubmitTrigger")
   let newsTitle = document.querySelector("#newsTitleId").value;
       let userId = parseInt(sessionStorage.getItem("user"))
       let newsSynopsis = document.querySelector("#newsSynopsisId").value;
       let newsURL = document.querySelector("#newsUrlId").value;
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
   })}
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
    newsSubmit()
    document.querySelector("#showNewsButton").addEventListener("click", () => {
        newsAPI.getNews().then(data => {
            newsDOM.renderNewsComponent(data);
    })

    })
    }

document.querySelector("#container").addEventListener("click", (event) => {
// document.getElementById("editNewsContainer").style.visibility = "hidden";
    if (event.target.id.startsWith("deleteNews--")) {
        document.querySelector("#container").innerHTML = "";
        newsAPI.deleteNews(event.target.id.split("--")[1])
        .then(() => {
            newsAPI.getNews().then(data => newsDOM.renderNewsComponent(data));
        })
    } else if (event.target.id.startsWith("editNews")) {
        let editId = event.target.id.split("--")[1];

        newsAPI.getSingleNews(editId).then(data => {
            document.querySelector("#eNewsTitleId").value = data.newsTitle
            document.querySelector("#eNewsSynopsisId").value = data.newsSynopsis
            document.querySelector("#eNewsUrlId").value = data.newsURL
            document.querySelector("#newsHiddenId").value = data.id

        })
    }
    }
)
document.querySelector("#hey").addEventListener("click", (event) => {
console.log(event.target);
    // let newsTitle = document.querySelector("#eNewsTitleId").value;
    // let newsSynopsis = document.querySelector("#eNewsSynopsisId").value;
    // let newsURL = document.querySelector("#eNewsUrlId").value;
    // const editNewsObject = {
    //     newsTitle: newsTitle,
    //     newsSynopsis: newsSynopsis,
    //     newsURL: newsURL
    // }
const hiddenNews = document.querySelector("#newsHiddenId").value;
console.log(hiddenNews);
        newsAPI.editNews(hiddenNews).then(() => {
        newsAPI.getNews().then(data => {
            document.querySelector("#container").innerHTML = " ";
            newsDOM.renderNewsComponent(data);
        })
    })
})
// document.querySelector("#updateNews").addEventListener("click", (event) => {
//     console.log("editNewsObject")
//     newsAPI.saveNews(editNewsObject).then(res => {
//         newsAPI.getNews().then(res => {
//             newsDOM.renderNewsComponent(res);
//

