const commentSection = document.querySelector(".comments");

const defaultComments = [
    {
        name: "Victor Pinto",
        date: "11/02/2023",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Christina Cabrera",
        date: "10/28/2023",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Isaac Tadesse",
        date: "10/20/2023",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
]

showAllComments();

function showAllComments() {
    commentSection.innerHTML = '';
    defaultComments.forEach((comment) => {

        //To convert date from string to Date() to perform sorting of comments in array
        const dateObject = new Date(comment.date);
        const dateString = dateObject.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        displayComment(comment.name, dateString, comment.comment);
    });
}

//create elements using DOM

function displayComment(userName, date, userComment) {

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
    nameEl.textContent = userName;
    const dateEl = document.createElement("p");
    dateEl.classList.add("comment__user--date");
    dateEl.textContent = date;
    nameCont.appendChild(nameEl);
    nameCont.appendChild(dateEl);

    const commentCont = document.createElement("div");
    commentCont.classList.add("comment__user--comment-cont")
    const commentEl = document.createElement("p");
    commentEl.classList.add("comment__user--comment");
    commentEl.textContent = userComment;
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

commentInput.classList.remove("error");
nameInput.classList.remove("error");

//EventListener for form submission

commentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    formErrors.innerText = "";
    commentInput.classList.remove("error");
    nameInput.classList.remove("error");

    const userName = document.getElementById('username').value;
    const userComment = document.getElementById('userComment').value;
    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    //Form input validation
    if ((userName === "") || (userComment === "")) {
        if ((userName === "") && (userComment === "")) {

            formErrors.innerText = "Enter a valid username and comment";
            nameInput.classList.add("error");
            commentInput.classList.add("error");
            return;
        }
        else if (userName === "") {
            formErrors.innerText = "Enter a valid name";
            nameInput.classList.add("error");
            return;
        }
        else {
            formErrors.innerText = "Enter a valid comment";
            commentInput.classList.add("error");
            return;
        }
    }

    const newComment = {
        name: userName,
        date: timestamp,
        comment: userComment
    };

    defaultComments.push(newComment);
    sortingArray();

    // defaultComments.unshift(newComment); 

    commentForm.reset();

    showAllComments();

});

//Sort comments array 
function sortingArray() {
    defaultComments.sort(function (a, b) {
        let adate = new Date(a.date);
        let bdate = new Date(b.date);

        let aTime = adate.getTime();
        let bTime = bdate.getTime();

        console.log(aTime);
        console.log(bTime);
        return bTime - aTime;
    });
};

/*
function validateUserInput(userName, userComment) {

    if ((userName === "") || (userComment === "")) {
        if ((userName === "") && (userComment === "")) {

            formErrors.innerText = "Enter a valid username and comment";
            nameInput.classList.add("error");
            commentInput.classList.add("error");
            return;
        }
        else if (userName === "") {
            formErrors.innerText = "Enter a valid name";
            nameInput.classList.add("error");
            return;
        }
        else {
            formErrors.innerText = "Enter a valid comment";
            commentInput.classList.add("error");
            return;
        }
    }
}*/