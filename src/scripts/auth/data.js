const API = {
// initial fetch call
    getUserInfo: () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())

    },
// fetch call to get user from database.
    getSingleUsersInfo: (email, password) => {
        return fetch(`http://localhost:8088/users?_userEmail=${email}&&userPassword=${password}`)
            .then(res => res.json())

    },
// fetch call to save user to database.
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

export default API;