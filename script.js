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

if (bannerImage) {

    function changeBanner() {

        currentBanner++;

        if (currentBanner >= banners.length) {
            currentBanner = 0;
        }

        bannerImage.src = banners[currentBanner];

    }

    setInterval(changeBanner, 4000);

}
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
// ==========================
// MORE MENU OPEN/CLOSE
// ==========================

document.querySelectorAll(".more-btn").forEach(button => {

    button.addEventListener("click", function(e){

        e.stopPropagation();

        document.querySelectorAll(".more-menu").forEach(menu=>{
            if(menu !== this.parentElement){
                menu.classList.remove("active");
            }
        });

        this.parentElement.classList.toggle("active");

    });

});

document.addEventListener("click",()=>{

    document.querySelectorAll(".more-menu").forEach(menu=>{
        menu.classList.remove("active");
    });

});
// ==========================
// SEARCH MOVIE
// ==========================

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup", function(){

const value = this.value.toLowerCase();

document.querySelectorAll(".movie-card").forEach(card=>{

const title = card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

            }
// ==========================
// IMAGE ERROR HANDLING
// ==========================

document.querySelectorAll("img").forEach(img => {

    img.onerror = function(){

        this.src = "images/no-image.jpg";

    };

});
