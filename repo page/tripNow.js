
function welcome(){
    document.getElementById("welcome").style.display= "block";
}
function openForm() {
    document.getElementById("login-popup").style.display = "block";
}
function closeForm() {
    document.getElementById("login-popup").style.display = "none";
    document.getElementById("nav-signin").style.display = "none";
    welcome();  
}

function popUpSubmit(){
    document.getElementsByClassName("popUpSubmit").style.display = "block";
}

function close-popup(){
    document.getElementsById("submitForm").style.display = "none";
}

