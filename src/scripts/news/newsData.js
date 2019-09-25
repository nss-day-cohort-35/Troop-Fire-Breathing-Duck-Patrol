const newsAPI = {

    getNews: () => {
        return fetch("http://localhost:8088/news")
            .then(response => response.json())
    },

    deleteNews: (id) => {
        return fetch(`http://localhost:8088/news/${id}`, {
            method: "DELETE"
    }).then(response => response.json())
    },

    getSingleNews: (id) => {
        return fetch(`http://localhost:8088/news/${id}`)
            .then(response => response.json())
    },

    editNews: (id, updatedNews) => {
        console.log(id, updatedNews);
        return fetch(`http://localhost:8088/news/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedNews)
        }).then(response => response.json())
     },

    saveNews: article => {
        return fetch("http://localhost:8088/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        });
    }
}

export default newsAPI