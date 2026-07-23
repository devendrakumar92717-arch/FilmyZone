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

/// ==========================
// SEARCH MOVIE
// ==========================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".movie-card").forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
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
window.onload = function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
};
// ==========================
// PART 20 - STEP 3
// PAGINATION
// ==========================

const movieCards = document.querySelectorAll("#latestMovieGrid .movie-card");

const moviesPerPage = 20;

let currentPage = 1;

const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const pageNumber = document.getElementById("pageNumber");

function showPage(page){

    const start = (page - 1) * moviesPerPage;
    const end = start + moviesPerPage;

    movieCards.forEach((card,index)=>{

        if(index >= start && index < end){

            card.style.display = "";

        }else{

            card.style.display = "none";

        }

    });

    pageNumber.textContent = "Page " + page;

    prevBtn.disabled = (page === 1);

    nextBtn.disabled = (end >= movieCards.length);

}

if(prevBtn && nextBtn){

    prevBtn.addEventListener("click",()=>{

        if(currentPage > 1){

            currentPage--;

            showPage(currentPage);

        }

    });

    nextBtn.addEventListener("click",()=>{

        if(currentPage * moviesPerPage < movieCards.length){

            currentPage++;

            showPage(currentPage);

        }

    });

    showPage(currentPage);

}
// ==========================
// PART 21 - STEP 11
// DOWNLOAD PROGRESS
// ==========================

const qualityBtns = document.querySelectorAll(".download-quality button");
const generateBox = document.getElementById("generateLinkBox");
const readyBox = document.getElementById("downloadReadyBox");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

qualityBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        generateBox.style.display = "block";
        readyBox.style.display = "none";

        let progress = 0;

        progressBar.style.width = "0%";
        progressText.innerText = "0%";

        const timer = setInterval(() => {

            progress += 5;

            progressBar.style.width = progress + "%";
            progressText.innerText = progress + "%";

            if(progress >= 100){

                clearInterval(timer);

                generateBox.style.display = "none";
                readyBox.style.display = "block";

            }

        }, 150);

    });

});
// ==========================
// PART 21 - STEP 8
// DOWNLOAD NOW
// ==========================

const downloadNowBtn = document.getElementById("downloadNowBtn");

if(downloadNowBtn){

    downloadNowBtn.addEventListener("click", () => {

        // यहाँ अपनी Movie Download Link डालना
        window.location.href = "movies/movie1.mp4";

    });

}
// ==========================
// PART 21 - STEP 12
// CLOSE DOWNLOAD POPUP
// ==========================

const closeBtn = document.getElementById("closeDownloadPopup");
const downloadQuality = document.querySelector(".download-quality");

if(closeBtn && downloadQuality){

    closeBtn.addEventListener("click",()=>{

        downloadQuality.style.display="none";

    });

}
function openDownloadPage() {
    window.location.href = "movie.html";
}
function selectQuality(quality) {
    localStorage.setItem("movieQuality", quality);
    window.location.href = "generate-link.html";
}
let progress = 0;

if (window.location.pathname.includes("generate-link.html")) {

    const bar = document.getElementById("progressBar");
    const text = document.getElementById("progressText");

    const timer = setInterval(() => {

        progress += 2;

        bar.style.width = progress + "%";
        text.innerHTML = progress + "%";

        if (progress >= 100) {

            clearInterval(timer);

            window.location.href = "download-ready.html";

        }

    },100);

}
function startDownload() {

    const movieLink = "movies/movie.mp4";

    window.location.href = movieLink;

}
function toggleMenu(btn){

    btn.parentElement.classList.toggle("active");

}
function shareMovie() {

    if (navigator.share) {

        navigator.share({
            title: "FilmyZone",
            text: "Watch this movie on FilmyZone",
            url: window.location.href
        });

    } else {

        alert("Sharing is not supported on this device.");

    }

}

function copyMovieLink() {

    navigator.clipboard.writeText(window.location.href);

    alert("Movie Link Copied Successfully ✅");

}
document.addEventListener("click", function(e){

    const menus = document.querySelectorAll(".more-menu");

    menus.forEach(menu=>{

        if(!menu.contains(e.target)){

            menu.classList.remove("active");

        }

    });

});
