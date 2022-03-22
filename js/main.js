function changePicture() {
    let profilePic = document.getElementById("profile");
    profilePic.src = "img/avatar-logo-open.svg";
    setTimeout(() => {
        profilePic.src = "img/avatar-logo.svg";
    }, 600);
}

function mobile() {
    document.getElementById("mobile").setAttribute("class", "shadow-red-background");
    document.getElementById("design").setAttribute("class", "shadow-red-background");
}

function web() {
    document.getElementById("web").setAttribute("class", "shadow-orange-background");
    document.getElementById("design").setAttribute("class", "shadow-orange-background");
}

function openModal(id) {
    document.getElementById(id).classList.add('is-active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('is-active');
}