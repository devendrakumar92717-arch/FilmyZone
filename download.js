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

const poster = document.getElementById("moviePoster");
const title = document.getElementById("movieTitle");

const size720 = document.getElementById("size720");
const size1080 = document.getElementById("size1080");

const btn720 = document.getElementById("download720");
const btn1080 = document.getElementById("download1080");

// ==========================================
// LOAD MOVIE
// ==========================================

if(movie){

    poster.src = movie.image;

    title.textContent = movie.title;

    size720.textContent =
    "Size : " + movie.size720;

    size1080.textContent =
    "Size : " + movie.size1080;

    btn720.onclick = () => {

        window.open(movie.normalHD,"_blank");

    };

    btn1080.onclick = () => {

        window.open(movie.fullHD,"_blank");

    };

}else{

    title.textContent = "Movie Not Found";

}

// ==========================================
// DEBUG
// ==========================================

console.log("=================================");
console.log("FILMYZONE Download Page");
console.log("Movie ID :", movieId);
console.log("Movie :", movie);
console.log("=================================");
