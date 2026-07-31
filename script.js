// ==========================================
// FILMYZONE
// script.js Final v3
// Part 1/8
// ==========================================

"use strict";

// ==========================================
// SETTINGS
// ==========================================

const MOVIES_PER_PAGE = 50;

// ==========================================
// GLOBAL VARIABLES
// ==========================================

let currentPage = 1;
let currentSearch = "";
let filteredMovies = [];

// ==========================================
// HOME PAGE
// ==========================================

const homeMovieGrid =
document.getElementById("homeMovieGrid");

const homePrevBtn =
document.getElementById("homePrevPage");

const homeNextBtn =
document.getElementById("homeNextPage");

const homePageNumber =
document.getElementById("homePageNumber");

// ==========================================
// SEARCH
// ==========================================

const searchInput =
document.getElementById("searchInput");

const searchBtn =
document.getElementById("searchBtn");

// ==========================================
// END PART 1/8
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
            url: url

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

    <img src="${movie.image}" alt="${movie.title}">

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
// END PART 2/8
// ==========================================
// ==========================================
// RENDER HOME MOVIES
// ==========================================

function renderHomeMovies(){

    if(!homeMovieGrid) return;

    homeMovieGrid.innerHTML = "";

    const start =
    (currentPage - 1) * MOVIES_PER_PAGE;

    const end =
    start + MOVIES_PER_PAGE;

    filteredMovies
    .slice(start, end)
    .forEach(movie=>{

        homeMovieGrid.innerHTML +=
        createMovieCard(movie);

    });

    updateHomePagination();

}

// ==========================================
// HOME PAGINATION
// ==========================================

function updateHomePagination(){

    if(!homePageNumber) return;

    const totalPages =
    Math.ceil(
        filteredMovies.length /
        MOVIES_PER_PAGE
    );

    homePageNumber.textContent =
    "Page " +
    currentPage +
    " / " +
    totalPages;

}

// ==========================================
// END PART 3/8
// ==========================================
// ==========================================
// HOME PREVIOUS BUTTON
// ==========================================

if(homePrevBtn){

    homePrevBtn.addEventListener("click",()=>{

        if(currentPage > 1){

            currentPage--;

            renderHomeMovies();

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }

    });

}

// ==========================================
// HOME NEXT BUTTON
// ==========================================

if(homeNextBtn){

    homeNextBtn.addEventListener("click",()=>{

        const totalPages = Math.ceil(

            filteredMovies.length /

            MOVIES_PER_PAGE

        );

        if(currentPage < totalPages){

            currentPage++;

            renderHomeMovies();

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }

    });

}

// ==========================================
// END PART 4/8
// ==========================================
// ==========================================
// UNIVERSAL SEARCH
// ==========================================

function searchMovies(){

    if(!searchInput) return;

    currentSearch =
    searchInput.value
    .toLowerCase()
    .trim();

    filteredMovies = movies.filter(movie=>{

        return(

            movie.title
            .toLowerCase()
            .includes(currentSearch)

            ||

            movie.language
            .toLowerCase()
            .includes(currentSearch)

            ||

            movie.category
            .toLowerCase()
            .includes(currentSearch)

            ||

            movie.year
            .toString()
            .includes(currentSearch)

        );

    });

    currentPage = 1;

    renderHomeMovies();

}

// ==========================================
// SEARCH EVENTS
// ==========================================

if(searchInput){

    searchInput.addEventListener(
        "input",
        searchMovies
    );

}

if(searchBtn){

    searchBtn.addEventListener(
        "click",
        searchMovies
    );

}

// ==========================================
// END PART 5/8
// ==========================================
// ==========================================
// INITIALIZE WEBSITE
// ==========================================

document.addEventListener("DOMContentLoaded",()=>{

    // सभी Movies Load
    filteredMovies = [...movies];

    // Home Page
    if(homeMovieGrid){

        renderHomeMovies();

    }

});

// ==========================================
// SAFETY CHECK
// ==========================================

if(!Array.isArray(filteredMovies)){

    filteredMovies = [];

}

// ==========================================
// END PART 6/8
// ==========================================
// ==========================================
// FINAL LOGS
// ==========================================

console.log("=================================");
console.log("FILMYZONE");
console.log("script.js Final v3 Loaded ✅");
console.log("Total Movies :", movies.length);
console.log("Movies Per Page :", MOVIES_PER_PAGE);
console.log("=================================");

// ==========================================
// DEBUG CHECK
// ==========================================

if(homeMovieGrid){

    console.log("Home Movie Grid Found ✅");

}else{

    console.log("Home Movie Grid Not Found ❌");

}

if(searchInput){

    console.log("Search Input Found ✅");

}else{

    console.log("Search Input Not Found ❌");

}

if(homePrevBtn && homeNextBtn){

    console.log("Pagination Ready ✅");

}else{

    console.log("Pagination Missing ❌");

}

// ==========================================
// END PART 7/8
// ==========================================
// ==========================================
// RESET SEARCH
// ==========================================

function resetSearch(){

    if(!searchInput) return;

    searchInput.value = "";

    currentSearch = "";

    filteredMovies = [...movies];

    currentPage = 1;

    renderHomeMovies();

}

// ==========================================
// WINDOW RESIZE
// ==========================================

window.addEventListener("resize",()=>{

    if(homeMovieGrid){

        renderHomeMovies();

    }

});

// ==========================================
// FILE COMPLETED
// ==========================================

console.log("=================================");
console.log("FILMYZONE");
console.log("script.js Final v3 Completed 🎉");
console.log("No Trending");
console.log("No Latest");
console.log("Single Movies Section");
console.log("Universal Search");
console.log("50 Movies Pagination");
console.log("=================================");
