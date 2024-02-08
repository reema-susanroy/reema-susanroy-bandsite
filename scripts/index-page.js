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

function showAllComments(){
defaultComments.forEach((comment) => {
    displayComment(comment.name, comment.date, comment.comment);
}) ;
}


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

    // console.log(commentSection);
}



const commentForm = document.getElementById('commentForm');

commentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = document.getElementById('username').value;
    const userComment = document.getElementById('userComment').value;
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });

    const newComment = {
        name: userName,
        date: currentDate,
        comment: userComment
      };
      defaultComments.push(newComment);

      commentForm.reset();

      sortComments();
    //   defaultComments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      displayNewComments()

})

function displayNewComments(){
    commentSection.innerHTML = '';
    for (let i=0; i<3; i++){
        displayComment(defaultComments[i].name, defaultComments[i].date , defaultComments[i].comment);
    }
    
}











