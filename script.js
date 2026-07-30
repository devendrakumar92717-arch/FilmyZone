// =========================================
// FILMY JOHN
// script.js Final v1.0
// Part 1/8
// =========================================

"use strict";

// ===============================
// GLOBAL VARIABLES
// ===============================

const movieGrid =
document.getElementById("allMovieGrid");

const trendingGrid =
document.getElementById("trendingMovieGrid");

const latestGrid =
document.getElementById("latestMovieGrid");

const movieSearch =
document.getElementById("movieSearch");

const prevPage =
document.getElementById("prevPage");

const nextPage =
document.getElementById("nextPage");

const pageNumber =
document.getElementById("pageNumber");

// ===============================
// PAGINATION
// ===============================

let currentPage = 1;

const moviesPerPage = 20;

// ===============================
// SAFE CHECK
// ===============================

function elementExists(element){

return element !== null;

}

// ===============================
// START APP
// ===============================

document.addEventListener("DOMContentLoaded",()=>{

console.log("FILMY JOHN Loaded ✅");

});
// ===============================
// CREATE MOVIE CARD
// ===============================

function createMovieCard(movie){

return `

<div class="movie-card">

<img
src="${movie.image}"
alt="${movie.title}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>${movie.year}</p>

<p>${movie.language}</p>

<p>${movie.category}</p>

<a
href="player.html?id=${movie.id}"
class="watch-btn">

Watch Now

</a>

</div>

</div>

`;

}

// ===============================
// RENDER MOVIES
// ===============================

function renderMovies(movieArray){

if(!elementExists(movieGrid)) return;

movieGrid.innerHTML="";

movieArray.forEach(movie=>{

movieGrid.innerHTML+=createMovieCard(movie);

});

}
// ===============================
// RENDER TRENDING MOVIES
// ===============================

function renderTrendingMovies() {

    if (!elementExists(trendingGrid)) return;

    trendingGrid.innerHTML = "";

    const trendingMovies = allMovies.slice(0, 8);

    trendingMovies.forEach(movie => {

        trendingGrid.innerHTML += createMovieCard(movie);

    });

}

// ===============================
// RENDER LATEST MOVIES
// ===============================

function renderLatestMovies() {

    if (!elementExists(latestGrid)) return;

    latestGrid.innerHTML = "";

    const latestMovies = allMovies.slice(8, 16);

    latestMovies.forEach(movie => {

        latestGrid.innerHTML += createMovieCard(movie);

    });

}

// ===============================
// INITIAL LOAD
// ===============================

function initializeWebsite() {

    renderTrendingMovies();

    renderLatestMovies();

    updatePagination(allMovies);

}

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});
// ===============================
// SEARCH MOVIES
// ===============================

if (elementExists(movieSearch)) {

movieSearch.addEventListener("input", function () {

const searchText = this.value.toLowerCase().trim();

const filteredMovies = allMovies.filter(movie =>

movie.title.toLowerCase().includes(searchText) ||

movie.category.toLowerCase().includes(searchText) ||

movie.language.toLowerCase().includes(searchText)

);

renderMovies(filteredMovies);

});

}
// ===============================
// PAGINATION
// ===============================

function updatePagination(movieArray){

const totalPages =
Math.ceil(movieArray.length / moviesPerPage);

const start =
(currentPage - 1) * moviesPerPage;

const end =
start + moviesPerPage;

const currentMovies =
movieArray.slice(start, end);

renderMovies(currentMovies);

if(elementExists(pageNumber)){

pageNumber.textContent =
`Page ${currentPage} / ${totalPages}`;

}

}

if(elementExists(prevPage)){

prevPage.addEventListener("click",()=>{

if(currentPage > 1){

currentPage--;

updatePagination(allMovies);

}

});

}

if(elementExists(nextPage)){

nextPage.addEventListener("click",()=>{

const totalPages =
Math.ceil(allMovies.length / moviesPerPage);

if(currentPage < totalPages){

currentPage++;

updatePagination(allMovies);

}

});

}
// ===============================
// BANNER SLIDER
// ===============================

const bannerImage =
document.getElementById("bannerImage");

const bannerImages = [

"images/banner1.jpg",

"images/banner2.jpg",

"images/banner3.jpg",

"images/banner4.jpg",

"images/banner5.jpg"

];

let bannerIndex = 0;

function changeBanner(){
    
if(!bannerImage) return;

bannerImage.src =
bannerImages[bannerIndex];
updateDots();
    
bannerIndex++;

if(bannerIndex >= bannerImages.length){

bannerIndex = 0;

}

}

setInterval(changeBanner,4000);

changeBanner();
// ===============================
// BANNER BUTTONS
// ===============================

const prevBanner =
document.querySelector(".banner-btn.prev");

const nextBanner =
document.querySelector(".banner-btn.next");

const dots =
document.querySelectorAll(".banner-dots span");

// ===============================
// UPDATE DOTS
// ===============================

function updateDots(){

dots.forEach((dot,index)=>{

dot.classList.remove("active");

if(index===bannerIndex){

dot.classList.add("active");

}

});

}

// ===============================
// NEXT BANNER
// ===============================

function nextBannerImage(){

bannerIndex++;

if(bannerIndex>=bannerImages.length){

bannerIndex=0;

}

bannerImage.src=bannerImages[bannerIndex];

updateDots();

}

// ===============================
// PREVIOUS BANNER
// ===============================

function prevBannerImage(){

bannerIndex--;

if(bannerIndex<0){

bannerIndex=bannerImages.length-1;

}

bannerImage.src=bannerImages[bannerIndex];

updateDots();

}

// ===============================
// BUTTON EVENTS
// ===============================

if(prevBanner){

prevBanner.addEventListener("click",prevBannerImage);

}

if(nextBanner){

nextBanner.addEventListener("click",nextBannerImage);

}
// ===============================
// FINAL INITIALIZATION
// ===============================

window.addEventListener("load", () => {

    if (typeof allMovies !== "undefined") {

        currentPage = 1;

        updatePagination(allMovies);

        renderTrendingMovies();

        renderLatestMovies();

    }

    updateDots();

});

// ===============================
// AUTO SLIDER
// ===============================

setInterval(() => {

    nextBannerImage();

}, 4000);

// ===============================
// END OF FILE
// ===============================
