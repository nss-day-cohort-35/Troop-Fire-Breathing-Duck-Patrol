
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
}
   export default webComp