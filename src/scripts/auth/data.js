const API = {

    getUserInfo: () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())

    },

    getSingleUsersInfo: (email, password) => {
        return fetch(`http://localhost:8088/users?_userEmail=${email}&&userPassword=${password}`)
            .then(res => res.json())

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