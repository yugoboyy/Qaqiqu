// untuk create postingan baru

const createPost = document.querySelector("#show-add-post-modal-btn");


let username = JSON.parse(localStorage.getItem("username"));

function deletePost() {
    let feed = document.getElementById("feed");
    let userPost = document.getElementById("user-post"); // Corrected from getElementsById to getElementById

    if (userPost) { // Check if the element exists before trying to remove it
        feed.removeChild(userPost);
    }
}
function createNewPost(){

    let textArea = document.getElementById("post");
    let text = textArea.value;

    // console.log(text);

    let feed = document.getElementById("feed");
    let div = document.createElement("div");
    div.classList.add("profile")
    div.id = "user-post";

    let img = document.createElement("img");
    img.src = "https://i.pinimg.com/564x/5e/a5/24/5ea524be1d230dc27809d6942a0a2947.jpg"

    let p = document.createElement("p");
    p.textContent = text;

    let span = document.createElement("span");
    span.textContent = username;

    let btn = document.createElement("button");
    btn.textContent = "delete";
    btn.id = "del-btn"
    btn.onclick = deletePost;
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    div.appendChild(btn);
    feed.appendChild(div);

}


document.getElementById("user").innerHTML = username

// let delBtn = document.getElementsById("del-btn")

// delBtn.addEventListener("click", function(){

//     // let feed = document.getElementById("feed");
//     let userPost = document.getElementsById("user-post")

//     feed.removeChild(userPost);
//     feed.removeChild(delBtn);

// })
//     <div class="profile">
//     <img src="https://i.pinimg.com/564x/5e/a5/24/5ea524be1d230dc27809d6942a0a2947.jpg">
//     <p>Wow kakinya ada 1000 #hewan</p>
//     <span>Fajrin Noor Rachman</span>
   
// </div>
    
