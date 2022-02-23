function changePicture() {
    let profilePic = document.getElementById("profile");
    profilePic.src = "img/avatar-logo-open.svg";
    setTimeout(() => {
        profilePic.src = "img/avatar-logo.svg";
    }, 600);
}

function mobile() {
    document.getElementById("mobile").setAttribute("class", "shadow-red-background");
}

function web() {
    document.getElementById("web").setAttribute("class", "shadow-orange-background");
}