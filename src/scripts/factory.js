const allFunctions = {
    homePage () {
return `
        <div id="navButtons">
        <button type="button id="dashboardButton">Home Page</button>
    <button type="button id="dashboardButton">Sign Up/Log In</button>
    </div>
`
    },
    signUpForm () {
          return `
<!--sign up container-->
    <div id="welcomeFormContainer">
        <h2>Sign Up To Join Your Troop:</h2>
    <form id="userId" action="">
        <h3>Username:</h3>
        <input type="userNamel" name="userName" id="userName" placeholder="Username"></h2>
        <h3>Email:</h3>
        <input type="userEmail" name="userEmail" id="userEmailId" placeholder="Email"></h2>
        <h3>Password:</h3>
        <input type="userPass" name="userPass" id="userPassId" placeholder="Password"></h2>
        <h3> Confirm Password:</h3>
        <input type="confirmPass" name="confirmPass" id="confirmPassId" placeholder="Confirm Password"></h2>
        <div>
            <button type="button" class="btn" id="addUserButton">  Sign Up
            </button>
            Sign Up
         </button>
    </form>
</div>
    </div>
    </div>

`},
logInForm () {
    return `
<!--log in container-->
<div id="welcomeFormContainer">
  <h2>Log In To Join Your Troop:</h2>
<form id="userId" action="">
  <h3>Email:</h3>
  <input type="userEmail" name="userEmail" id="userEmailId" placeholder="Email"></h2>
  <h3>Password:</h3>
  <input type="userPass" name="userPass" id="userPassId" placeholder="Password"></h2>
  <h3> Confirm Password:</h3>
  <input type="confirmPass" name="confirmPass" id="confirmPassId" placeholder="Confirm Password"></h2>
  <div>
      <button type="button" class="btn" id="addUserButton">  Log In
      </button>
      Sign Up
   </button>
</form>
</div>
</div>
</div>

`},
dashboard () {
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
        <button type="button" id="newsButton" class="btn btn-primary">Submit</button>
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
    <form>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="eventTitle">Event</label>
                <input type="title" class="eventTitleClass" id="eventTitleId" placeholder="Title">
            </div>
            <div class="form-group col-md-6">
                <label for="eventAddress">Address</label>
                <input type="address" class="eventAddressClass" id="eventAddressId" placeholder="Address">
            </div>
        </div>
        <div class="form-group">
            <label for="eventDate">Date</label>
            <input type="date" class="eventDateClass" id="eventDateId" placeholder="Date">
        </div>
        <div class="form-group">
            <label for="eventDescription">Description</label>
            <textarea id=“eventDescriptionId” rows="10" cols=“40” name="event" description”></textarea>
        </div>
        <button class="btn btn-primary" type="button">Submit</button>
    </form>

    <section class="userList"></section>
</body> `
}
}
export default allFunctions