
const webComp = {

    makeUserComponent: (user) =>{
       return `
       <div>
           <h2>${user.userEmail}</h2>
           <p>${user.userPassword}</p>
           <p>${user.confirmPassword}</p>
           <button class="button2" type="button" id="deleteUser--${user.id}">Delete</button>
       </div>
       `
   },
   newFeedsComponent: (news) => {
       return `
   <div>
   <h2>${news.newsTitleId}</h2>
   <p>${news.newsSynopsisId}</p>
   <p>${news.newsUrlId}</p>
   </div>
   `
   }
}
   export default webComp