function tomainpage(event) {
    event.preventDefault()
    let username = document.getElementById("username");
    let text = username.value;
    localStorage.setItem("username",JSON.stringify(text));
    // console.log(JSON.parse(localStorage.getItem("username")));
    window.location.href="mainpage.html"
}