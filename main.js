// untuk create postingan baru

const createPost = document.querySelector("#show-add-post-modal-btn");

function getText () {
    let textArea = document.getElementById("post");
    let text = textArea.value;
    return text;
}


createPost.addEventListener("submit", function(){

    console.log(getText());



})