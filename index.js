function welcome(){
    document.getElementById("welcome").style.display= "block";
}
function openForm() {
    document.getElementById("login-popup").style.display = "block";
}
function closeForm() {
    document.getElementById("login-popup").style.display = "none";
    document.getElementById("nav-signin").style.display = "none";
    
}

function openModal() {
    document.getElementById("background-modal").style.display = "flex";

    document.getElementById("box-modal").style.display = "flex";

}

function closeModal() {
    document.getElementById("background-modal").style.display = "none";
    document.getElementByIde("box-modal").style.display = "none";
}

   /*  bentar-gausa pake ini dulu */
/*     function login() {
        openModal();
        username = document.getElementById("username").value;
        password = document.getElementById("password").value;
    if (username == 'amiroh' && password== '123') {
        document.getElementsByClassName("usernameValue").style.display = "block";
        openModal();
        } 
    else {
        closeModal();
        modalHeading.innerText = `Try again, invalid username or password!`;
        openModal();
        }
    } */

