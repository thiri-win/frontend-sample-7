const navbar = document.querySelector(".navbar");
const up = document.querySelector("#up");

window.onscroll = () => {
    if(window.scrollY >= 800) {
        navbar.classList.add("fixed");
        navbar.classList.add("animate__fadeInDown")
    } else {
        navbar.classList.remove("fixed");
    }

    if(window.scrollY >= 500) {
        up.style.opacity = 1;
    } else {
        up.style.opacity = 0;
    }
}

const toggle = document.querySelector(".toggle");
const navbarmenu = document.querySelector(".navbar-menu");

toggle.onclick = () => {
    navbarmenu.classList.toggle("active");
}