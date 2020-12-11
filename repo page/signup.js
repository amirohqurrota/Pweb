let backgroundModal = document.querySelector('.background-modal');
let box = document.querySelector('.box');
let buttonsubmit = document.querySelector('.submit');
let buttonclose = document.querySelector('.close');
let username = document.querySelector('.username');
let password = document.querySelector('.password');
let modalText = document.querySelector('.box h2');


function openModal() {
    backgroundModal.style.display = "flex";
    box.style.display = "flex";
}

function closeModal() {
    backgroundModal.style.display = "none";
    box.style.display = "none";
}

function login() {
    let username = document.querySelector('.username');
    let password = document.querySelector('.password');
    if (username.value == 'amiroh' && password.value == '123') {
        modalHeading.innerText = `Hi, ${username.value}. Welcome back!`;
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