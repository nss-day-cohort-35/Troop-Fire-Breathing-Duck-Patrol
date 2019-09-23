

const API = {

getUserInfo: () => {
    return fetch("http://localhost:8088/users")
        .then(response => response.json())

},

// deleteUserInfo: (id) => {
//     return fetch(`http://localhost:8083/entries/${id}`, {
//         method: "DELETE"
// }).then(response => response.json())
// },

// getSingleEntry: (id) => {
//     return fetch(`http://localhost:3000/entries/${id}`)
//         .then(response => response.json())
// },

// editUserInfo: (id, updatedEntry) => {
//     console.log(id, updatedEntry);
//     return fetch(`http://localhost:8082/entries/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(updatedEntry)
//     }).then(response => response.json())
//  },

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