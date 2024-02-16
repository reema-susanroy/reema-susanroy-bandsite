import { apiKey, BandSiteApi } from "./band-site-api.js";

const apiClient = new BandSiteApi(apiKey);
let defaultComments = [];

//To make an apicall to get the comments from the api
const fetchComments = async () => {
    try {
        defaultComments = await apiClient.getComments();
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

//To create all the elements using DOM manipulation
const commentSection = document.querySelector(".comments");
function displayComment(comment) {
    const userCont = document.createElement("div");
    userCont.classList.add("comment__user")
    userCont.setAttribute("data-userid", comment.id);

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

    //Convert timestamp to dynamic time
    const dateObject = new Date(comment.timestamp);
    const dynamicTime = dynamicTimeCalc(dateObject);
    dateEl.textContent = dynamicTime;

    nameCont.appendChild(nameEl);
    nameCont.appendChild(dateEl);
    const commentCont = document.createElement("div");
    commentCont.classList.add("comment__user--comment-cont")

    const commentEl = document.createElement("p");
    commentEl.classList.add("comment__user--comment");

    const likeCont = document.createElement("div");
    likeCont.classList.add("comment__user--like-cont")
    const likeEl = document.createElement("img");
    likeEl.classList.add("comment__user--icon");
    likeEl.setAttribute("src", "./assets/icons/SVG/icon-like.svg");
    likeEl.setAttribute("alt", "like-button");
    likeEl.setAttribute("id", "actionComment");

    const likeCountEL = document.createElement("span");
    likeCountEL.textContent = comment.likes;
    likeCont.append(likeCountEL);

    //Add an event listener for like button clicks, that calls the async likeComment() and passes userid as parameter
    likeEl.addEventListener("click", async () => {
        try {
            const likes = await likeComment(comment.id);
            likeCountEL.textContent = "";
            likeCountEL.innerHTML = likes;
        }
        catch (error) {
            console.log(error);
        }
    });

    const deleteEl = document.createElement("img");
    deleteEl.classList.add("comment__user--icon");
    deleteEl.setAttribute("src", "./assets/icons/SVG/icon-delete.svg");
    deleteEl.setAttribute("alt", "delete-button");

    //Add an event listener for delete button, that calls async deleteComment() and passes userid as parameter
    deleteEl.addEventListener("click", async () => {
        try {
            const deletedComment = await deleteComment(comment.id);
            const removeFromUI = document.querySelector(`[data-userid="${comment.id}"]`);
            removeFromUI.remove();
        }
        catch (error) {

            //To disply user understandable error message in UI
            const fetchEl = document.querySelector(".comments");
            const errorStor = document.createElement("p");
            errorStor.classList.add("comments__error");
            errorStor.textContent = error
            errorStor.textContent = "Comment not found. Please check again!";
            setTimeout(function () {
                errorStor.classList.add('comments__error--hide', 'comments__error--hide-fadeout');
            }, 2000);
            commentSection.prepend(errorStor);
        }
    });

    commentEl.textContent = comment.comment;
    commentCont.appendChild(commentEl);
    likeCont.append(likeEl);
    likeCont.append(deleteEl);
    nameCommentCont.appendChild(nameCont);
    nameCommentCont.appendChild(commentCont);
    nameCommentCont.append(likeCont);
    userCont.appendChild(imgCont);
    userCont.appendChild(nameCommentCont);
    commentSection.appendChild(userCont);
}

//Async function to make a likeComment API call
async function likeComment(comment) {
    const response = await apiClient.likeComment(comment);
    const count = response.likes;
    return count;
}

//Async function to make a deleteComment API call
async function deleteComment(comment) {
    const response = await apiClient.deleteComment(comment);
    const delData = response.id;
    return delData;
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

    //APICall postComment() after validation, to display comments
    const postResponse = await apiClient.postComments(newComment);
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

//To Calculate dynamic timestamp
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
        time = '< 1 min ago';
    }
    return time;
}