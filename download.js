"use strict";

// ==========================================
// GET MOVIE ID
// ==========================================

const params = new URLSearchParams(window.location.search);

const movieId = Number(params.get("id"));

// ==========================================
// FIND MOVIE
// ==========================================

const movie = movies.find(item => item.id === movieId);

// ==========================================
// ELEMENTS
// ==========================================

const moviePoster =
document.getElementById("moviePoster");

const movieTitle =
document.getElementById("movieTitle");

const movieYear =
document.getElementById("movieYear");

const movieLanguage =
document.getElementById("movieLanguage");

const size720 =
document.getElementById("size720");

const size1080 =
document.getElementById("size1080");

const download720 =
document.getElementById("download720");

const download1080 =
document.getElementById("download1080");

// ==========================================
// LOAD MOVIE
// ==========================================
if (movie) {

    moviePoster.src = movie.image;

    movieTitle.textContent = movie.title;

    movieYear.textContent =
    "Year : " + movie.year;

    movieLanguage.textContent =
    "Language : " + movie.language;

    size720.textContent =
    "Size : " + movie.size720;

    size1080.textContent =
    "Size : " + movie.size1080;

} else {

    movieTitle.textContent = "Movie Not Found";

    movieYear.textContent = "";

    movieLanguage.textContent = "";

    size720.textContent = "--";

    size1080.textContent = "--";

}

// ==========================================
// DOWNLOAD BUTTONS
// ==========================================

download720.addEventListener("click", () => {

    if(movie.normalHD){

        window.open(movie.normalHD, "_blank");

    }else{

        alert("Normal HD Download Link Not Available.");

    }

});

download1080.addEventListener("click", () => {

    if(movie.fullHD){

        window.open(movie.fullHD, "_blank");

    }else{

        alert("Full HD Download Link Not Available.");

    }

});

// ==========================================
// MOVIE NOT FOUND
// ==========================================

else{

    movieTitle.textContent = "Movie Not Found";

    movieYear.textContent = "";

    movieLanguage.textContent = "";

    size720.textContent = "Size : --";

    size1080.textContent = "Size : --";

    download720.disabled = true;

    download1080.disabled = true;

}

// ==========================================
// DEBUG
// ==========================================

console.log("=================================");
console.log("FILMYZONE Download System");
console.log("Movie ID :", movieId);
console.log("Movie :", movie);
console.log("=================================");
