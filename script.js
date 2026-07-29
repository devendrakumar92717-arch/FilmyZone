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

            const category =
               card.querySelector("p").innerText.toLowerCase();

            const language =
               card.querySelector(".movie-language").innerText.toLowerCase();

            if (
    movieName.includes(value) ||
    category.includes(value) ||
    language.includes(value)
) {

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
    const language = card.dataset.language;
    
    localStorage.setItem("movieTitle", title);
    localStorage.setItem("movieImage", image);
    localStorage.setItem("movieLanguage", language);
    
    window.location.href = "movie.html";

}

// ==============================
// MOVIE DETAILS PAGE
// ==============================

const movieTitle = document.getElementById("movieTitle");
const movieImage = document.getElementById("movieImage");
const movieLanguage = document.getElementById("movieLanguage");

if(movieLanguage){

    movieLanguage.innerText =
    "🌐 " + (localStorage.getItem("movieLanguage") || "Hindi");

}

if(movieTitle){

    movieTitle.innerText =
    localStorage.getItem("movieTitle") || "Movie Name";

}

if(movieImage){

    movieImage.src =
    localStorage.getItem("movieImage") || "";

}

 // ==========================
// STEP 26 - FILE SIZE
// ==========================

const size720 = document.getElementById("size720");
const size1080 = document.getElementById("size1080");
const size1440 = document.getElementById("size1440");
const size2160 = document.getElementById("size2160");

const allMovies = [...trendingMovies, ...latestMovies];

const currentMovie = allMovies.find(movie =>
    movie.title === localStorage.getItem("movieTitle"));

if (currentMovie) {


    if (size720) size720.innerText = currentMovie.size720 || "Not Available";

    if (size1080) size1080.innerText = currentMovie.size1080 || "Not Available";

    if (size1440) size1440.innerText = currentMovie.size1440 || "Not Available";

    if (size2160) size2160.innerText = currentMovie.size2160 || "Not Available";

}

 // ==========================================
// STEP 27 - PART 2 FINAL
// DYNAMIC DOWNLOAD SYSTEM
// ==========================================
function selectQuality(quality){

    if(!currentMovie){
        alert("Movie Not Found!");
        return;
    }

    let link = "";

    if(quality === "720p"){
        link = currentMovie.normalHD;
    }

    if(quality === "1080p"){
        link = currentMovie.fullHD;
    }

    if(!link){
        alert("Download Not Available!");
        return;
    }

    const btn = event.target;

    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Preparing Download...';

    setTimeout(() => {

        btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Download Started ✅';

        window.location.href = link;

    }, 2000);

                                         }
// ==========================================
// STEP 32 - GENERATE LINK PAGE
// ==========================================

const pageMovieTitle = document.getElementById("movieTitle");
const pageQuality = document.getElementById("selectedQuality");
const downloadNowBtn = document.getElementById("downloadNowBtn");

if (pageMovieTitle) {

    pageMovieTitle.innerText =
    localStorage.getItem("movieTitle") || "Movie";

}

if (pageQuality) {

    pageQuality.innerText =
    localStorage.getItem("selectedQuality") || "";

}

if (downloadNowBtn) {

    downloadNowBtn.onclick = function () {

        const link =
        localStorage.getItem("movieDownloadLink");

        if (link) {

            downloadNowBtn.innerHTML =
'<i class="fa-solid fa-spinner fa-spin"></i> Preparing Download...';

downloadNowBtn.disabled = true;
downloadNowBtn.style.cursor = "not-allowed";
downloadNowBtn.style.opacity = "0.8";
            
setTimeout(() => {

    downloadNowBtn.innerHTML =
    '<i class="fa-solid fa-circle-check"></i> Download Started ✅';

    downloadNowBtn.style.background = "#16a34a";

    window.location.href = link;

}, 2000);

        } else {

            alert("Download Link Not Found!");

        }

    };

}

// ==========================================
// DYNAMIC TRENDING MOVIES
// ==========================================

const trendingGrid = document.getElementById("trendingMovieGrid");

if (trendingGrid) {

    trendingMovies.slice(0, 8).forEach(movie => {

        trendingGrid.innerHTML += `

        <div class="movie-card"
     data-language="${movie.language}"
     data-year="${movie.year}">

            <img src="${movie.image}" alt="${movie.title}">

            <h3>${movie.title}</h3>

            <p>${movie.category}</p>

            <p class="movie-language">🌐 ${movie.language}</p>

            <div class="movie-buttons">

                <button class="download-btn" onclick="openDownloadPage(this)">
                    <i class="fa-solid fa-download"></i>
                    Download
                </button>

                <button class="more-btn" onclick="shareMovie()">
                    <i class="fa-solid fa-share-nodes"></i>
                </button>

            </div>

        </div>

        `;

    });

}



// ==========================================
// DYNAMIC LATEST MOVIES
// ==========================================

const latestGrid = document.getElementById("latestMovieGrid");

if (latestGrid) {

    latestMovies.slice(0, 20).forEach(movie => {

        latestGrid.innerHTML += `

        <div class="movie-card"
     data-language="${movie.language}"
     data-year="${movie.year}">

            <img src="${movie.image}" alt="${movie.title}">

            <h3>${movie.title}</h3>

            <p>${movie.category}</p>

            <p class="movie-language">🌐 ${movie.language}</p>

            <div class="movie-buttons">

                <button class="download-btn" onclick="openDownloadPage(this)">
                    <i class="fa-solid fa-download"></i>
                    Download
                </button>

                <button class="more-btn" onclick="shareMovie()">
                    <i class="fa-solid fa-share-nodes"></i>
                </button>

            </div>

        </div>

        `;

    });

}

// ==========================================
// VIEW ALL MOVIES PAGE
// FINAL v3.0
// PART 1/4
// ==========================================

const allMovieGrid = document.getElementById("allMovieGrid");

if (allMovieGrid) {

const moviesPerPage = 50;

let currentPage = 1;

let filteredMovies = [...allMovies];

function renderMovies(){

allMovieGrid.innerHTML = "";

const start = (currentPage - 1) * moviesPerPage;

const end = start + moviesPerPage;

const pageMovies = filteredMovies.slice(start,end);

pageMovies.forEach(movie => {

const movieCard = `

<div class="movie-card"
data-language="${movie.language}"
data-year="${movie.year || ""}">

<img src="${movie.image}" alt="${movie.title}">

<h3>${movie.title}</h3>

<p>${movie.category}</p>

<p class="movie-language">🌐 ${movie.language}</p>

<div class="movie-buttons">

<button
class="download-btn"
onclick="openDownloadPage(this)">

<i class="fa-solid fa-download"></i>

Download

</button>

<button
class="more-btn"
onclick="shareMovie()">

<i class="fa-solid fa-share-nodes"></i>

</button>

</div>

</div>

`;

allMovieGrid.insertAdjacentHTML("beforeend", movieCard);

});

const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const pageNumber = document.getElementById("pageNumber");

function updatePagination(){

if(pageNumber){

pageNumber.innerText =
"Page " + currentPage;

}

if(prevBtn){

prevBtn.disabled =
(currentPage === 1);

}

if(nextBtn){

nextBtn.disabled =
(currentPage * moviesPerPage >= filteredMovies.length);

}

}

if(prevBtn){

prevBtn.onclick = function(){

if(currentPage > 1){

currentPage--;

renderMovies();

updatePagination();

}

};

}

if(nextBtn){

nextBtn.onclick = function(){

if(currentPage * moviesPerPage < filteredMovies.length){

currentPage++;

renderMovies();

updatePagination();

}

};

}

renderMovies();
updatePagination();

} // allMovieGrid END

// ==========================================
// VIEW ALL SEARCH (FINAL)
// ==========================================

const movieSearch = document.getElementById("movieSearch");

if (movieSearch) {

    movieSearch.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        filteredMovies = allMovies.filter(movie => {

            return (
                movie.title.toLowerCase().includes(value) ||
                movie.category.toLowerCase().includes(value) ||
                movie.language.toLowerCase().includes(value)
            );

        });

        currentPage = 1;

        renderMovies();
        updatePagination();

    });

}
// ==========================================
// VIEW ALL SEARCH
// ==========================================

const movieSearch = document.getElementById("movieSearch");

if (movieSearch) {

    movieSearch.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll("#allMovieGrid .movie-card").forEach(card => {

            const title =
                card.querySelector("h3").innerText.toLowerCase();

            const category =
                card.querySelector("p").innerText.toLowerCase();

            const language =
                card.dataset.language.toLowerCase();

            if (
                title.includes(value) ||
                category.includes(value) ||
                language.includes(value)
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}
