// ==========================================
// BJH OTT MASTER PROJECT
// FINAL SCRIPT.JS
// PART 1
// ==========================================

// ==============================
// BANNER SLIDER
// ==============================

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

    setInterval(() => {

        currentBanner++;

        if (currentBanner >= banners.length) {

            currentBanner = 0;

        }

        bannerImage.src = banners[currentBanner];

    }, 4000);

}

// ==============================
// LOADER
// ==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

});

// ==============================
// IMAGE ERROR
// ==============================

document.querySelectorAll("img").forEach(img => {

    img.onerror = function () {

        this.src = "images/no-image.jpg";

    };

});

// ==============================
// SEARCH MOVIE
// ==============================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".movie-card").forEach(card => {

            const movieName =
                card.querySelector("h3").innerText.toLowerCase();

            if (movieName.includes(value)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ==============================
// SHARE BUTTON
// ==============================

function shareMovie() {

    if (navigator.share) {

        navigator.share({

            title: document.title,

            text: "Watch this Movie",

            url: window.location.href

        });

    } else {

        navigator.clipboard.writeText(window.location.href);

        alert("Movie Link Copied Successfully ✅");

    }

}

// ==============================
// COPY LINK
// ==============================

function copyMovieLink() {

    navigator.clipboard.writeText(window.location.href);

    alert("Movie Link Copied ✅");

}
// ==========================================
// DOWNLOAD + MOVIE DATA
// PART 2 - A
// ==========================================

// Download Button
function openDownloadPage(button){

    const card = button.closest(".movie-card");

    if(!card) return;

    const title = card.querySelector("h3").innerText;
    const image = card.querySelector("img").src;
    const category = card.querySelector("p").innerText;

    localStorage.setItem("movieTitle", title);
    localStorage.setItem("movieImage", image);
    localStorage.setItem("movieCategory", category);

    window.location.href = "movie.html";

}

// ==============================
// MOVIE DETAILS PAGE
// ==============================

const movieTitle = document.getElementById("movieTitle");
const movieImage = document.getElementById("movieImage");
const movieCategory = document.getElementById("movieCategory");
const movieCategoryInfo = document.getElementById("movieCategoryInfo");

if(movieTitle){

    movieTitle.innerText =
    localStorage.getItem("movieTitle") || "Movie Name";

}

if(movieImage){

    movieImage.src =
    localStorage.getItem("movieImage") || "";

}

if(movieCategory){

    movieCategory.innerText =
    localStorage.getItem("movieCategory") || "";

}

if(movieCategoryInfo){

    movieCategoryInfo.innerText =
    localStorage.getItem("movieCategory") || "";

}

// =========================================
// STEP 27 - PART 2
// QUALITY DOWNLOAD SYSTEM
// =========================================

function selectQuality(quality) {

 
// ==============================
// DOWNLOAD NOW
// ==============================


// ==========================
// STEP 26 - FILE SIZE
// ==========================

const size720 = document.getElementById("size720");
const size1080 = document.getElementById("size1080");
const size1440 = document.getElementById("size1440");
const size2160 = document.getElementById("size2160");

const currentMovie = movies.find(movie => movie.title === localStorage.getItem("movieTitle"));

if (currentMovie) {


    if (size720) size720.innerText = currentMovie.size720 || "Not Available";

    if (size1080) size1080.innerText = currentMovie.size1080 || "Not Available";

    if (size1440) size1440.innerText = currentMovie.size1440 || "Not Available";

    if (size2160) size2160.innerText = currentMovie.size2160 || "Not Available";

}
const movieLanguage = document.getElementById("movieLanguage");
const movieYear = document.getElementById("movieYear");

if (currentMovie) {

    if (movieLanguage)
        movieLanguage.innerText = currentMovie.language || "Hindi";

    if (movieYear)
        movieYear.innerText = currentMovie.year || "2026";


}
// ==========================================
// STEP 27 - PART 2 FINAL
// DYNAMIC DOWNLOAD SYSTEM
// ==========================================

function selectQuality(quality) {

    const movie = movies.find(
        m => m.title === localStorage.getItem("movieTitle")
    );

    if (!movie) {
        alert("Movie Not Found!");
        return;
    }

    let downloadLink = "";
let qualityName = "";

if (quality === "720p") {

    downloadLink = movie.download720;
    qualityName = "720p HD";

} else if (quality === "1080p") {

    downloadLink = movie.download1080;
    qualityName = "1080p Full HD";

} else if (quality === "1440p") {

    downloadLink = movie.download1440;
    qualityName = "1440p (2K)";

} else if (quality === "2160p") {

    downloadLink = movie.download2160;
    qualityName = "2160p (4K UHD)";

}

    localStorage.setItem("downloadLink", downloadLink);
    const selectedQuality =
document.getElementById("selectedQuality");

if (selectedQuality) {

    selectedQuality.innerHTML =
    "Selected Quality : " + qualityName;

}

    const generateBox = document.getElementById("generateLinkBox");
    const readyBox = document.getElementById("downloadReadyBox");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    generateBox.style.display = "block";
    readyBox.style.display = "none";
    document.getElementById("tick720").innerHTML = "";
document.getElementById("tick1080").innerHTML = "";
document.getElementById("tick1440").innerHTML = "";
document.getElementById("tick2160").innerHTML = "";

if (quality === "720p") {
    document.getElementById("tick720").innerHTML = " ✅";
}

if (quality === "1080p") {
    document.getElementById("tick1080").innerHTML = " ✅";
}

if (quality === "1440p") {
    document.getElementById("tick1440").innerHTML = " ✅";
}

if (quality === "2160p") {
    document.getElementById("tick2160").innerHTML = " ✅";
        }

    const readyTitle = readyBox.querySelector("h3");

if (readyTitle) {

    readyTitle.innerHTML =
    "✅ " + qualityName + " Download Link Generated";

}
    let progress = 0;

    progressBar.style.width = "0%";
    progressText.innerText = "0%";

    const timer = setInterval(() => {

        progress += 5;

        progressBar.style.width = progress + "%";
        progressText.innerText = progress + "%";

        if (progress >= 100) {

            clearInterval(timer);

            generateBox.style.display = "none";
            readyBox.style.display = "block";

        }

    }, 120);

}

const downloadNowBtn = document.getElementById("downloadNowBtn");

if (downloadNowBtn) {

    downloadNowBtn.onclick = function () {

        const link = localStorage.getItem("downloadLink");

        if (link) {

            window.location.href = link;

        } else {

            alert("Download Link Not Found!");

        }

    };

}
