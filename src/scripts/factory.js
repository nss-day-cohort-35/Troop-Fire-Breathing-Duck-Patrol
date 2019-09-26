const allFunctions = {
    homePage() {
        return `
        <div id="navButtons">
    <button type="button" id="signInButton">Sign Up/Log In</button>
    </div>
`
    },
    signUpForm() {
        return `
<!--sign up container-->
    <div id="welcomeFormContainer">
        <h2>Sign Up To Join Your Troop:</h2>
    <form id="userId" action="">
        <h3>Email:</h3>
        <input type="userEmail" name="userEmail" id="userEmailId" placeholder="Email"></h2>
        <h3>Password:</h3>
        <input type="userPass" name="userPass" id="userPassId" placeholder="Password"></h2>
        <h3> Confirm Password:</h3>
        <input type="confirmPass" name="confirmPass" id="confirmPassId" placeholder="Confirm Password"></h2>
        <div>
            <button type="button" class="btn" id="addUserButton">  Sign Up
            </button>
    </form>
</div>
    </div>
    </div>

`
    },
    logInForm() {
        return `
<!--log in container-->
<div id="loginFormContainer">
  <h2>Log In Troop Member:</h2>
<form id="userId" action="">
  <h3>Email:</h3>
  <input type="userEmail" name="userEmail" id="userLoginEmail" placeholder="Email"></h2>
  <h3>Password:</h3>
  <input type="userPass" name="userPass" id="userLoginPassword" placeholder="Password"></h2>
  <div>
      <button type="button" class="btn" id="logInButton">  Log In
      </button>
</form>
</div>
</div>
</div>

`
    },
    dashboard() {
        return `
    <div id="friendsListContainter">
        <!-- display all the user's friends -->
        <h2 class="friendsHeader">Troop Members</h2>
        <article id="friendsDisplay">
        </article>
    </div>

    <div id="chatRoomContainer">
        <!-- display all the user's messages -->
        <h2 class="messagesHeader">Smoke Signals</h2>
        <article id="messagesDisplay">
        </article>
    </div>

    <div id="newsFeedContainer">
        <!-- display all the user's newsfeed-->
        <h2 class="newsHeader">Scout's Bulletin Board</h2>
        <button type="button" id="showNewsButton">Get News</button>
        <article id="newsDisplay">
        </article>
    <!-- newsfeed page starts -->
    <form>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="newsTitle">Title</label>
                <input type="title" class="newsTitleClass" id="newsTitleId" placeholder="Title">
            </div>
            <div class="form-group col-md-6">
                <label for="newsSynopsis">Synopsis</label>
                <input type="synopsis" class="newsSynopsis" id="newsSynopsisId" placeholder="Synopsis">
            </div>
        </div>
        <div class="form-group">
            <label for="newsUrl">Url</label>
            <input type="url" class="newsUrl" id="newsUrlId" placeholder="url">
        </div>
        <button type="button" id="newsButton">Submit</button>
    </form>



    <form id="editNewsContainer">
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="newsTitle">Title</label>
            <input type="title" id="eNewsTitleId" placeholder="Title">
            <input type="hidden" id="newsHiddenId">
        </div>
        <div class="form-group col-md-6">
            <label for="newsSynopsis">Synopsis</label>
            <input type="synopsis" id="eNewsSynopsisId" placeholder="Synopsis">
        </div>
    </div>
    <div class="form-group">
        <label for="newsUrl">Url</label>
        <input type="url" id="eNewsUrlId" placeholder="url">
    </div>
    <button type="button" id="updateNews">Update</button>
</form>
</div>






    <div id="tasksContainer">
        <!-- display all the user's tasks -->
        <h2 class="tasksHeader">Earn A Badge</h2>
        <article id="tasksDisplay">
        </article>
    </div>
    <!-- tasks page starts -->

    <div id="eventsContainer">
        <!-- display all the user's events -->
        <h2 class="eventsHeader">Happenings Around The Campground</h2>
        <article id="eventsDisplay">
        </article>
    </div>

    <!-- event page starts -->


    <section class="userList"></section>
</body> `
    }
}
export default allFunctions