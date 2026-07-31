// ==========================================
// FILMYZONE
// script.js Final v2
// Part 1/8
// ==========================================

"use strict";

// ==========================================
// SETTINGS
// ==========================================

const MOVIES_PER_PAGE = 20;

// ==========================================
// GLOBAL VARIABLES
// ==========================================

let currentPage = 1;
let filteredMovies = [];

// ==========================================
// HOME PAGE ELEMENTS
// ==========================================

const trendingGrid =
document.getElementById("trendingMovieGrid");

const latestGrid =
document.getElementById("latestMovieGrid");

// ==========================================
// ALL MOVIES PAGE ELEMENTS
// ==========================================

const movieGrid =
document.getElementById("allMovieGrid");

const searchInput = document.getElementById("searchInput");

const prevBtn =
document.getElementById("prevPage");

const nextBtn =
document.getElementById("nextPage");

const pageNumber =
document.getElementById("pageNumber");

// ==========================================
// END OF PART 1/8
// ==========================================
// ==========================================
// SHARE MOVIE
// ==========================================

function shareMovie(id){

    const movie = movies.find(item => item.id == id);

    if(!movie) return;

    const url =
    window.location.origin +
    "/player.html?id=" + movie.id;

    if(navigator.share){

        navigator.share({
            title: movie.title,
            text: movie.title,
            url:url
        });

    }else{

        navigator.clipboard.writeText(url);

        alert("Movie Link Copied");

    }

}

// ==========================================
// DOWNLOAD MOVIE
// ==========================================

function downloadMovie(id){

    window.location.href =
    "download.html?id=" + id;

}

// ==========================================
// CREATE MOVIE CARD
// ==========================================

function createMovieCard(movie){

return `

<div class="movie-card">

<img src="${movie.image}"
alt="${movie.title}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>${movie.year} • ${movie.language}</p>

<p>${movie.category}</p>

<div class="movie-buttons">

<button
class="download-btn"
onclick="downloadMovie(${movie.id})">

<i class="fa-solid fa-download"></i>
Download

</button>

<button
class="more-btn"
onclick="shareMovie(${movie.id})">

<i class="fa-solid fa-share-from-square"></i>

</button>

</div>

</div>

</div>

`;

}

// ==========================================
// END OF PART 2/8
// ==========================================
// ==========================================
// RENDER TRENDING MOVIES
// ==========================================

function renderTrendingMovies(){

    if(!trendingGrid) return;

    trendingGrid.innerHTML = "";

    trendingMovies.forEach(movie=>{

        trendingGrid.innerHTML += createMovieCard(movie);

    });

}

// ==========================================
// RENDER LATEST MOVIES
// ==========================================

function renderLatestMovies(){

    if(!latestGrid) return;

    latestGrid.innerHTML = "";

    latestMovies.forEach(movie=>{

        latestGrid.innerHTML += createMovieCard(movie);

    });

}

// ==========================================
// HOME PAGE INITIALIZE
// ==========================================

function initializeHomePage(){

    renderTrendingMovies();

    renderLatestMovies();

}

// ==========================================
// END OF PART 3/8
// ==========================================
// ==========================================
// RENDER ALL MOVIES
// ==========================================

function renderMovies(){

    if(!movieGrid) return;

    movieGrid.innerHTML = "";

    const start = (currentPage - 1) * MOVIES_PER_PAGE;
    const end = start + MOVIES_PER_PAGE;

    const pageMovies = filteredMovies.slice(start, end);

    pageMovies.forEach(movie=>{

        movieGrid.innerHTML += createMovieCard(movie);

    });

    updatePagination();

}

// ==========================================
// UPDATE PAGINATION
// ==========================================

function updatePagination(){

    if(!pageNumber) return;

    const totalPages =
    Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);

    pageNumber.textContent =
    "Page " + currentPage + " / " + totalPages;

}

// ==========================================
// END OF PART 4/8
// ==========================================
// ==========================================
// SEARCH MOVIES
// ==========================================

function searchAllMovies(){
console.log("Search Working...");
    
    if(!searchInput) return;

    const keyword =
    searchInput.value
    .toLowerCase()
    .trim();


    filteredMovies = movies.filter(movie=>{

        return (

            movie.title
            .toLowerCase()
            .includes(keyword)

            ||

            movie.language
            .toLowerCase()
            .includes(keyword)

            ||

            movie.category
            .toLowerCase()
            .includes(keyword)

        );

    });


    currentPage = 1;

    renderMovies();

}


// ==========================================
// SEARCH INPUT EVENT
// ==========================================

if(searchInput){

    console.log("Search Input Found ✅");

    searchInput.addEventListener("input", searchAllMovies);

}

// ==========================================
// END OF PART 5/8
// ==========================================
// ==========================================
// PAGINATION
// ==========================================

if(prevBtn){

    prevBtn.addEventListener("click",()=>{


        if(currentPage > 1){

            currentPage--;


            renderMovies();


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }


    });

}


// ==========================================
// NEXT PAGE
// ==========================================

if(nextBtn){

    nextBtn.addEventListener("click",()=>{


        const totalPages = Math.ceil(
            filteredMovies.length /
            MOVIES_PER_PAGE
        );


        if(currentPage < totalPages){

            currentPage++;


            renderMovies();


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }


    });

}


// ==========================================
// END OF PART 6/8
// ==========================================
// ==========================================
// INITIALIZE WEBSITE
// ==========================================

document.addEventListener(
"DOMContentLoaded",
()=>{
console.log(movies);

    // All Movies Page

    if(movieGrid){

        filteredMovies = [...movies];

        renderMovies();

    }


    // Home Page

    if(trendingGrid || latestGrid){

        renderTrendingMovies();

        renderLatestMovies();

    }


});


// ==========================================
// SAFETY CHECK
// ==========================================

if(!Array.isArray(filteredMovies)){

    filteredMovies = [];

}


// ==========================================
// END OF PART 7/8
// ==========================================
// ==========================================
// FINAL LOGS
// ==========================================

console.log("=================================");
console.log("FILMYZONE");
console.log("script.js Final v2 Loaded ✅");
console.log("Trending Movies :", trendingMovies.length);
console.log("Latest Movies :", latestMovies.length);
console.log("Total Movies :", movies.length);
console.log("=================================");

// ==========================================
// END OF FILE
// ==========================================
