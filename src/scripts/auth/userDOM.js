import webComp from "./userComponent.js";

const DOM = {

    renderUserInfo: (users) =>{
        for (let i = 0; i < users.length; i++) {
            document.querySelector(".userList").innerHTML += webComp.makeUserComponent(users[i])
        }
    },
    renderNewsInfo:  (users) =>{
        for (let i = 0; i < users.length; i++) {
            document.querySelector(".userList").innerHTML += webComp.newsFeedComponent(users[i])
        }
    }
}

export default DOM