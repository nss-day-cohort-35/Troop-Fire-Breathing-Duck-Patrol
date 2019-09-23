import DOM from "./userDOM.js"
import API from "./data.js"


document.querySelector("#addUserButton").addEventListener("click", (user) => {
    let userEmail = document.querySelector("#userEmailId").value;
    let userPass = document.querySelector("#userPassId").value;
    let confirmPass = document.querySelector("#confirmPassId").value;
        const userObject = {
            userEmail: userEmail,
            userPassword: userPass,
            confirmPassword: confirmPass,

        }
        console.log(userObject)

    API.saveUserInfo(userObject).then(user => {
        API.getUserInfo().then(user => {
            document.querySelector(".userList").innerHTML = " ";
            DOM.renderUserInfo(user);
        })
    })

document.querySelector("#showUsers").addEventListener("click", event => {
    API.getUserInfo().then(user => {
        document.querySelector(".userList").innerHTML = " ";
        DOM.renderUserInfo(user);
    })

})
})
