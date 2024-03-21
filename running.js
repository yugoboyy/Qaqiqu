// untuk sign up
const tnc = document.querySelector("#terms-and-conditions")
const signUp = document.querySelector(".sign-up")


tnc.addEventListener("change", function() {
    if (this.checked) {
        signUp.disabled = false;
    }
})

// untuk ngambil value username

// Get a reference to the form element
const signUpForm = document.querySelector("form");

// Add event listener to the form for the "submit" event
signUpForm.addEventListener("submit", function() {


    // Get the value of the username input field
    const username = document.getElementById("username").value;

    // Log the username to the console
    console.log("Username:", username);

    // Move to another HTML file
    window.location.href = "Sign in.html";
});

let result = [];
function getUsername(event) {
    event.preventDefault()
    let username = document.getElementById("username");
    let text = username.value;
    result.push(text)
    localStorage.setItem("username",JSON.stringify(result));
    console.log(JSON.parse(localStorage.getItem("username")));
    if(result.length > 0){
        // window.open(`Sign in.html`,"_blank");
        window.location.href=`Sign in.html`
    }
}