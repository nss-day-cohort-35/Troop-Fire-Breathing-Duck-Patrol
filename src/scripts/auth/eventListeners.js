// import DOM from "./userDOM.js"
// import API from "./data.js"


// // // Save data to sessionStorage
// // sessionStorage.setItem('key', 'value');

// // // Get saved data from sessionStorage
// // let data = sessionStorage.getItem('key');

// // // Remove saved data from sessionStorage
// // sessionStorage.removeItem('key');

// // // Remove all saved data from sessionStorage
// // sessionStorage.clear();


// // //store
// // sessionStorage.setItem("lastname", " ");
// // // Retrieve
// // document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");





// document.querySelector("#addUserButton").addEventListener("click", () => {
//     console.log("button press")
//     let userEmail = document.querySelector("#userEmailId").value;
//     let userPass = document.querySelector("#userPassId").value;
//     let confirmPass = document.querySelector("#confirmPassId").value;
//         const userObject = {
//             userEmail: userEmail,
//             userPassword: userPass,
//             confirmPassword: confirmPass,

//         }
//         console.log(userObject)
//     })

//     API.saveUserInfo(userObject).then(res => res.json()).then(res => console.log("hi"))

// document.querySelector("#addUserButton").addEventListener("click", event => {
//     API.getUserInfo().then(user => {
//         document.querySelector(".userId").innerHTML = " ";
//         DOM.renderUserInfo(user);
//     })

// })

