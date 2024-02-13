import { BandSiteApi } from "./band-site-api.js";

const apiKey = 'b0f7ef84-4f1b-41b0-b069-70d059f53b0e';
const apiClient = new BandSiteApi(apiKey);
let defaultComments = [];

const fetchComments = async () => {
    try {
        let CommentsImported = await apiClient.getComments();
        defaultComments = CommentsImported;
        //console.log(defaultComments)
        showAllComments();
    }
    catch (error) {
        console.log(error);
    }
}
fetchComments();

function showAllComments() {
    commentSection.innerHTML = '';
    sortArray();
    defaultComments.forEach((comment) => {
        displayComment(comment);
    });
}

//To create elements using DOM
const commentSection = document.querySelector(".comments");

function displayComment(comment) {
    const userCont = document.createElement("div");
    userCont.classList.add("comment__user")

    const imgCont = document.createElement("div");
    imgCont.classList.add("comment__user--image-cont")
    const imgEl = document.createElement("p");
    imgEl.classList.add("comment__user--image");
    imgCont.appendChild(imgEl);
    const nameCommentCont = document.createElement("div");
    nameCommentCont.classList.add("comment__user--comment-cont")
    const nameCont = document.createElement("div");
    nameCont.classList.add("comment__user--name-cont")
    const nameEl = document.createElement("p");
    nameEl.classList.add("comment__user--name");
    nameEl.textContent = comment.name;
    const dateEl = document.createElement("p");
    dateEl.classList.add("comment__user--date");
    

    //to convert date to dynamic style
    const dateObject = new Date(comment.timestamp);
    const dynamicTime = dynamicTimeCalc(dateObject);
    dateEl.textContent = dynamicTime;

    nameCont.appendChild(nameEl);
    nameCont.appendChild(dateEl);
    const commentCont = document.createElement("div");
    commentCont.classList.add("comment__user--comment-cont")
    const commentEl = document.createElement("p");
    commentEl.classList.add("comment__user--comment");
    commentEl.textContent = comment.comment;
    commentCont.appendChild(commentEl);
    nameCommentCont.appendChild(nameCont);
    nameCommentCont.appendChild(commentCont);
    userCont.appendChild(imgCont);
    userCont.appendChild(nameCommentCont);
    commentSection.appendChild(userCont);
}

const commentForm = document.getElementById('commentForm');
const formErrors = document.querySelector(".formError");
const nameInput = document.getElementById('username');
const commentInput = document.getElementById('userComment');

//To remove any error styling from the input fields
commentInput.classList.remove("user-error");
nameInput.classList.remove("user-error");

//EventListener for form submission
commentForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    formErrors.innerText = "";
    commentInput.classList.remove("user-error");
    nameInput.classList.remove("user-error");
    const userName = document.getElementById('username').value;
    const userComment = document.getElementById('userComment').value;
    const currentDate = Date.now();
    if (!validateUserInput(userName, userComment)) {
        return;
    }
    const newComment = {
        name: userName,
        comment: userComment,
    };

    const postResponse = await apiClient.postComments(newComment);
    console.log(postResponse);
    defaultComments.push(postResponse);

    sortArray();
    commentForm.reset();
    showAllComments();
});



//Sort comments array 
function sortArray() {
    defaultComments.sort(function (a, b) {
        let adate = a.timestamp;
        let bdate = b.timestamp;
        return bdate - adate;
    });
};

//Validate user inputs
function validateUserInput(userName, userComment) {
    if ((userName === "") || (userComment === "")) {
        if ((userName === "") && (userComment === "")) {
            formErrors.innerText = "Enter a valid username and comment";
            nameInput.classList.add("user-error");
            commentInput.classList.add("user-error");
            return false;
        }
        else if (userName === "") {
            formErrors.innerText = "Enter a valid name";
            nameInput.classList.add("user-error");
            return false;
        }
        else {
            formErrors.innerText = "Enter a valid comment";
            commentInput.classList.add("user-error");
            return false;
        }
    }
    return true;
}

//Calculate dynamic timestamp
function dynamicTimeCalc(commmetDate) {
    const currentTime = new Date();
    const commentDate = commmetDate;
    const calcTime = currentTime - commentDate;
    const seconds = Math.floor(calcTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    let time;
    if (days > 0) {
        time = days + ' day' + (days > 1 ? 's' : '') + ' ago';
    } else if (hours > 0) {
        time = hours + ' hour' + (hours > 1 ? 's' : '') + ' ago';
    } else if (minutes > 0) {
        time = minutes + ' minute' + (minutes > 1 ? 's' : '') + ' ago';
    } else {
        time = seconds + ' second' + (seconds !== 1 ? 's' : '') + ' ago';
    }
    return time;
}