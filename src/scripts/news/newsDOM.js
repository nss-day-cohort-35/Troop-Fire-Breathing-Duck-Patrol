import webCompNews from "./newsComponent.js";

const newsDOM = {

renderNewsComponent: (news) =>{
    for (let i = 0; i < news.length; i++) {
        document.querySelector("#container").innerHTML += webCompNews.newsMaker(news[i])
    }
},
};


 export default newsDOM