const webCompNews = {

    newsMaker: (article) =>{
       return `
       <form>
        <fieldset>
           <h2>${article.newsTitle}</h2>
           <p>${article.userId}</p>
           <p>${article.newsSynopsis}</p>
           <p>${article.newsURL}</p>
        </fieldset>
           <button class="buttonNews" type="button" id="deleteNews--${article.id}">Delete</button>
           <button class="buttonNews" type="button" id="editNews--${article.id}">Edit</button>
       </form>
       `
   },


    editnews: (article) => {
    return `
    <form>
        <section id="eNewsTitle">${article.eNewsTitle}</section>
        <p>${article.eUserId}</p>
        <section id="eNewsSynopsis">${article.eNewsSynopsis}</section>
        <section id="eNewsUrl">${article.eNewsUrl}</section>
    </form>
`
    }
    }

   export default webCompNews