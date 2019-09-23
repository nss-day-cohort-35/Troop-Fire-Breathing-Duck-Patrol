// import DOM from "./auth/userDOM.js"
import API from "./auth/data.js"
//event listener saves the login and user from the input field
document.querySelector("#addUserButton").addEventListener("click", () => {

    let userEmail = document.querySelector("#userEmailId").value;
    let userPass = document.querySelector("#userPassId").value;
    let confirmPass = document.querySelector("#confirmPassId").value;
        const userObject = {
            userEmail: userEmail,
            userPassword: userPass,
            confirmPassword: confirmPass,

        }
        console.log(userObject)
//stores the login and password in session storage
    API.saveUserInfo(userObject).then(res => res.json()).then(res => {
        sessionStorage.setItem("user", res.id)
        const getUserId = sessionStorage.getItem("user")
        //removes the entire input field
        document.querySelector("#welcomeFormContainer").innerHTML = " ";
        //alerts the user "welcome"
        alert("Welcome to the troop!")
        // console.log(getUserId)
    })
})

//event listener for newsfeed button
document.querySelector("#newsButton").addEventListener("click", () => {

    let newsTitle = document.querySelector("#newsTitleId").value;
    let newsSynopsis = document.querySelector("#newsSynopsisId").value;
    let newsUrl = document.querySelector("#newsUrlId").value;
        const newsObject = {
            newsTitleId: newsTitle,
            newsSynopsisId: newsSynopsis,
            newsUrlId:  newsUrl,

        }
        console.log(newsObject)
//stores the login and password in session storage
    API.saveUserInfo(Object).then(res => res.json()).then(res => {
        sessionStorage.setItem("user", res.id)
        const getUserId = sessionStorage.getItem("user")
        //removes the entire input field
        document.querySelector("#newsFeedContainer").innerHTML = " ";
        //alerts the user "welcome"
        alert("News Article Added!")
        // console.log(getUserId)
    })
})