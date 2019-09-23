const API = {

getUserInfo: () => {
    return fetch("http://localhost:8088/users")
        .then(response => response.json())

},

saveUserInfo: user => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
}
}




//use fetch to create journal entry



export default API;