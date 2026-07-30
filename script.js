// =====================================
// FILMY JOHN
// script.js Final v1.0
// Part 1/8
// =====================================

// Global Variables

const MOVIES_PER_PAGE = 20;

let currentPage = 1;

let filteredMovies = [];

const movieGrid =
document.getElementById("allMovieGrid");

const searchInput =
document.getElementById("movieSearch");

const prevBtn =
document.getElementById("prevPage");

const nextBtn =
document.getElementById("nextPage");

const pageNumber =
document.getElementById("pageNumber");
// =====================================
// SHARE MOVIE
// =====================================

function shareMovie(id){

    const movie = movies.find(item => item.id === id);

    if(!movie) return;

    if(navigator.share){

        navigator.share({

            title: movie.title,

            text: "Watch " + movie.title,

            url: window.location.origin +
            "/player.html?id=" + movie.id

        });

    }else{

        navigator.clipboard.writeText(

            window.location.origin +
            "/player.html?id=" + movie.id

        );

        alert("Movie Link Copied!");

    }

}

// =====================================
// DOWNLOAD MOVIE
// =====================================

function downloadMovie(id){

    window.location.href =
    "download.html?id=" + id;

}
// =====================================
// CREATE MOVIE CARD
// =====================================

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

<div class="movie-buttons">

<button
class="download-btn"
onclick="downloadMovie(${movie.id})">

⬇ Download

</button>

<button
class="share-btn"
onclick="shareMovie(${movie.id})">

📤 Share

</button>

</div>

</div>

</div>

`;

}
// =====================================
// RENDER MOVIES
// =====================================

function renderMovies(){

    if(!movieGrid) return;

    movieGrid.innerHTML = "";

    const start = (currentPage - 1) * MOVIES_PER_PAGE;
    const end = start + MOVIES_PER_PAGE;

    const pageMovies = filteredMovies.slice(start, end);

    pageMovies.forEach(movie => {

        movieGrid.innerHTML += createMovieCard(movie);

    });

    if(pageNumber){

        const totalPages = Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);

        pageNumber.textContent =
        "Page " + currentPage + " / " + totalPages;

    }

        }
// =====================================
// SEARCH
// =====================================

function searchMovies(){

    const keyword = searchInput.value
        .toLowerCase()
        .trim();

    filteredMovies = movies.filter(movie => {

        return (

            movie.title.toLowerCase().includes(keyword) ||

            movie.language.toLowerCase().includes(keyword) ||

            movie.category.toLowerCase().includes(keyword)

        );

    });

    currentPage = 1;

    renderMovies();

}

if(searchInput){

    searchInput.addEventListener("input", searchMovies);

}
// =====================================
// SEARCH MOVIES
// =====================================

if(searchInput){

    searchInput.addEventListener("input", function(){

        const keyword = this.value.toLowerCase().trim();

        filteredMovies = movies.filter(movie =>

            movie.title.toLowerCase().includes(keyword) ||

            movie.language.toLowerCase().includes(keyword) ||

            movie.category.toLowerCase().includes(keyword)

        );

        currentPage = 1;

        renderMovies();

    });

}
// =====================================
// PAGINATION
// =====================================

if(prevBtn){

    prevBtn.addEventListener("click", () => {

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

if(nextBtn){

    nextBtn.addEventListener("click", () => {

        const totalPages = Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);

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
// =====================================
// INITIALIZE
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    filteredMovies = [...movies];

    renderMovies();

});
// =====================================
// SAFETY CHECK
// =====================================

if(!Array.isArray(filteredMovies)){
    filteredMovies = [];
}

if(typeof renderMovies === "function"){
    renderMovies();
}

// =====================================
// END OF FILE
// =====================================
