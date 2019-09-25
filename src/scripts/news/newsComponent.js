const webCompNews = {

    newsMaker: (article) =>{
       return `
       <form>
        <fieldset>
           <h2>${article.newsTitle}</h2>
           <p>${article.newsSynopsis}</p>
           <p>${article.newsURL}</p>
        </fieldset>
            <button id="saveNews">Save News</button>
           <button class="buttonNews" type="button" id="deleteNews--${article.id}">Delete</button>
           <button class="buttonNews" type="button" id="editNews--${article.id}">Edit</button>
       </form>
       `
   },


    editnews: (article) => {
    return `
    <form>
        <section id="eNewsTitle">${article.eNewsTitle}</section>
        <section id="eNewsSynopsis">${article.eNewsSynopsis}</section>
        <section id="eNewsUrl">${article.eNewsUrl}</section>
        <button id="eSaveNews">Save News</button>
    </form>
`
    }
    }

   export default webCompNews