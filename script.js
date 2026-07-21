// =========================
// AUTO BANNER SLIDER
// =========================

const banners = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg",
    "images/banner4.jpg",
    "images/banner5.jpg"
];

let currentBanner = 0;

const bannerImage = document.querySelector(".banner img");

function changeBanner() {

    currentBanner++;

    if (currentBanner >= banners.length) {
        currentBanner = 0;
    }

    bannerImage.src = banners[currentBanner];

}

setInterval(changeBanner, 4000);
// ==========================
// DOWNLOAD QUALITY BUTTONS
// ==========================

const qualityButtons = document.querySelectorAll(".download-quality button");

qualityButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("You selected: " + button.innerText);

    });

});
// ==========================
// LOGIN PAGE
// ==========================

const googleLogin = document.querySelector(".google-login");
const skipLogin = document.querySelector(".skip-login");

if (googleLogin) {

    googleLogin.addEventListener("click", () => {

        alert("Google Login will be connected later.");

    });

}

if (skipLogin) {

    skipLogin.addEventListener("click", () => {

        window.location.href = "index.html";

    });

}
// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.display = "none";

    }

});
// ==========================
// SHARE MOVIE
// ==========================

document.querySelectorAll(".share-btn").forEach(button=>{

button.addEventListener("click",()=>{

if(navigator.share){

navigator.share({

title:"FilmyZone",

text:"Watch this movie on FilmyZone",

url:window.location.href

});

}else{

alert("Share is not supported on this device.");

}

});

});
// ==========================
// COPY MOVIE LINK
// ==========================

document.querySelectorAll(".copy-btn").forEach(button => {

    button.addEventListener("click", () => {

        navigator.clipboard.writeText(window.location.href);

        alert("✅ Movie Link Copied!");

    });

});
