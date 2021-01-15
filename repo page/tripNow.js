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
function popUpSubmit() {
    document.getElementById("popUpSubmit").style.display = "block";
}
function closepopup() {
    document.getElementById("popUpSubmit").style.display = "none";
}