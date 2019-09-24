import webComp from "./userComponent.js";
import allFunctions from "../factory.js";
import API from "./data.js";

// innerHTML for putting things on the DOM
const DOM = {
    renderLandingPage: () => {
        let mainContainer = document.querySelector("#container")
        mainContainer.innerHTML = allFunctions.homePage();
        //  when user clicks signup/login button forms appear on DOM
        document.querySelector("#signInButton").addEventListener("click", () => {
                mainContainer.innerHTML += allFunctions.signUpForm()
                mainContainer.innerHTML += allFunctions.logInForm()

                //  this is the sign up button "addUserButton".
                document.querySelector("#addUserButton").addEventListener("click", () => {
                    //  userObject that defines user properties.
                    let userEmail = document.querySelector("#userEmailId").value;
                    let userPass = document.querySelector("#userPassId").value;
                    let confirmPass = document.querySelector("#confirmPassId").value;
                    const userObject = {
                        userName: userName,
                        userEmail: userEmail,
                        userPassword: userPass,
                        confirmPassword: confirmPass,
                    }
                    API.saveUserInfo(userObject).then(res => res.json()).then(res => {
                        sessionStorage.setItem("user", res.id),
                            mainContainer.innerHTML += allFunctions.dashboard()
                        document.getElementById("eventPageContainer").style.visibility = "hidden";
                        alert("Welcome to the troop!")
                        document.querySelector("#navButtons").innerHTML = " ";
                        document.querySelector("#welcomeFormContainer").innerHTML = " ";
                        document.querySelector("#loginFormContainer").innerHTML = " ";
                    })
                }), document.querySelector("#logInButton").addEventListener("click", () => {
                    let email = document.querySelector("#userLoginEmail").value;
                    let password = document.querySelector("#userLoginPassword").value;
                    console.log(email, password)
                    API.getSingleUsersInfo(email, password).then(res => {
                        console.log(res);
                        sessionStorage.setItem("user", res.id)
                        mainContainer.innerHTML += allFunctions.dashboard();
                        document.getElementById("eventPageContainer").style.visibility = "hidden";
                        alert("Welcome troop member!")
                        document.querySelector("#navButtons").innerHTML = " ";
                        document.querySelector("#welcomeFormContainer").innerHTML = " ";
                        document.querySelector("#loginFormContainer").innerHTML = " ";
                    })
                })
            })
            // // stores the login and password in session storage

    }
}

// document.querySelector("#addUserButton").addEventListener("click", () => {
//     let userEmail = document.querySelector("#userEmailId").value;
//     let userPass = document.querySelector("#userPassId").value;
//     let confirmPass = document.querySelector("#confirmPassId").value;
//     const userObject = {
//         userEmail: userEmail,
//         userPassword: userPass,
//         confirmPassword: confirmPass,

//     }
//     console.log(userObject)
//         //stores the login and password in session storage
//     API.saveUserInfo(userObject).then(res => res.json()).then(res => {
//         sessionStorage.setItem("user", res.id)
//         const getUserId = sessionStorage.getItem("user")
//             //removes the entire input field
//         document.querySelector("#welcomeFormContainer").innerHTML = " ";
//         //alerts the user "welcome"
//         alert("Welcome to the troop!")
//             // console.log(getUserId)
//     })
// })


export default DOM