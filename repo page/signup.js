var backgroundModal = document.querySelector('.background-modal');
var box = document.querySelector('.box');
var buttonsubmit = document.querySelector('.submit');
var buttonclose = document.querySelector('.close');
var username = document.querySelector('.username');
var password = document.querySelector('.password');
var modalText = document.querySelector('.box h2');


function openModal() {
    document.getElementsByClassName("backgroundModal").style.display = "flex"
   /*  backgroundModal.style.display = "flex"; */
    box.style.display = "flex";
}

function closeModal() {
    backgroundModal.style.display = "none";
    box.style.display = "none";
}

function login() {
    let username = document.getElementsByClassName("username").value
    let password = document.getElementsByClassName("password").value
    if (username == 'amiroh' && password== '123') {
        document.getElementsById("username").style.display = "box"
        openModal();
    } else {
        modalHeading.innerText = `Try again, invalid username or password!`;
        openModal();
    }
}

buttonsubmit.addEventListener("click", login);
buttonclose.addEventListener("click", closeModal);
box.addEventListener("click", function(event) {
    event.stopPropagation();
})