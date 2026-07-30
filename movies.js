// ==========================================
// FILMY JOHN
// movies.js Final v1.0
// Part 1/7
// ==========================================

"use strict";

// ==========================================
// BANNER MOVIES
// ==========================================

const bannerMovies = [];

// ==========================================
// TRENDING MOVIES
// ==========================================

const trendingMovies = [];

// ==========================================
// LATEST MOVIES
// ==========================================

const latestMovies = [];

// ==========================================
// ALL MOVIES
// ==========================================

let allMovies = [];

// ==========================================
// BANNER MOVIES
// ==========================================

bannerMovies.push(

{
id:1,
title:"KGF Chapter 2",
image:"images/banner/banner1.jpg",
category:"Action",
language:"Hindi",
year:"2022"
},

{
id:2,
title:"Salaar",
image:"images/banner/banner2.jpg",
category:"Action",
language:"Hindi",
year:"2023"
},

{
id:3,
title:"Leo",
image:"images/banner/banner3.jpg",
category:"Action",
language:"Hindi",
year:"2023"
},

{
id:4,
title:"Tiger 3",
image:"images/banner/banner4.jpg",
category:"Action",
language:"Hindi",
year:"2023"
},

{
id:5,
title:"Animal",
image:"images/banner/banner5.jpg",
category:"Action",
language:"Hindi",
year:"2023"
}

);

// ==========================================
// TRENDING MOVIES
// ==========================================

trendingMovies.push(

{
id:101,
title:"KGF Chapter 2",
category:"Action, Drama",
language:"Hindi",
year:"2022",
image:"images/movies/kgf2.jpg",
normalHD:"https://example.com/kgf720",
fullHD:"https://example.com/kgf1080",
size720:"1.2 GB",
size1080:"2.6 GB"
},

{
id:102,
title:"Salaar",
category:"Action, Thriller",
language:"Hindi",
year:"2023",
image:"images/movies/salaar.jpg",
normalHD:"https://example.com/salaar720",
fullHD:"https://example.com/salaar1080",
size720:"1.4 GB",
size1080:"3.1 GB"
},

{
id:103,
title:"Pathaan",
category:"Action, Thriller",
language:"Hindi",
year:"2023",
image:"images/movies/pathaan.jpg",
normalHD:"https://example.com/pathaan720",
fullHD:"https://example.com/pathaan1080",
size720:"1.3 GB",
size1080:"2.9 GB"
},

{
id:104,
title:"Brahmastra",
category:"Adventure, Fantasy",
language:"Hindi",
year:"2022",
image:"images/movies/brahmastra.jpg",
normalHD:"https://example.com/brahmastra720",
fullHD:"https://example.com/brahmastra1080",
size720:"1.1 GB",
size1080:"2.4 GB"
}

);

// ==========================================
// LATEST MOVIES
// ==========================================

latestMovies.push(

{
id:201,
title:"Animal",
category:"Action, Crime",
language:"Hindi",
year:"2023",
image:"images/latest/movie1.jpg",
normalHD:"https://example.com/animal720",
fullHD:"https://example.com/animal1080",
size720:"1.5 GB",
size1080:"3.2 GB"
},

{
id:202,
title:"Jawan",
category:"Action, Drama",
language:"Hindi",
year:"2023",
image:"images/latest/movie2.jpg",
normalHD:"https://example.com/jawan720",
fullHD:"https://example.com/jawan1080",
size720:"1.4 GB",
size1080:"3.0 GB"
},

{
id:203,
title:"Leo",
category:"Action, Thriller",
language:"Hindi",
year:"2023",
image:"images/latest/movie3.jpg",
normalHD:"https://example.com/leo720",
fullHD:"https://example.com/leo1080",
size720:"1.3 GB",
size1080:"2.8 GB"
},

{
id:204,
title:"Tiger 3",
category:"Action, Spy",
language:"Hindi",
year:"2023",
image:"images/latest/movie4.jpg",
normalHD:"https://example.com/tiger720",
fullHD:"https://example.com/tiger1080",
size720:"1.4 GB",
size1080:"3.1 GB"
}

);

// ==========================================
// MERGE ALL MOVIES
// ==========================================

allMovies = [

    ...trendingMovies,

    ...latestMovies

];

// ==========================================
// TOTAL MOVIES
// ==========================================

const movies = allMovies;

// ==========================================
// TOTAL COUNT
// ==========================================

console.log("Total Movies :", allMovies.length);

// ==========================================
// MOVIE UTILITIES
// ==========================================

// Find Movie by ID
function getMovieById(id){

    return allMovies.find(movie => movie.id == id);

}

// Find Movie by Title
function getMovieByTitle(title){

    return allMovies.find(movie =>

        movie.title.toLowerCase() === title.toLowerCase()

    );

}

// Get Trending Movies
function getTrendingMovies(){

    return trendingMovies;

}

// Get Latest Movies
function getLatestMovies(){

    return latestMovies;

}

// Search Movies
function searchMovies(keyword){

    keyword = keyword.toLowerCase();

    return allMovies.filter(movie =>

        movie.title.toLowerCase().includes(keyword) ||

        movie.category.toLowerCase().includes(keyword) ||

        movie.language.toLowerCase().includes(keyword)

    );

}

// ==========================================
// FINAL INITIALIZATION
// ==========================================

console.log("=================================");
console.log("FILMY JOHN");
console.log("movies.js Loaded Successfully ✅");
console.log("Trending Movies :", trendingMovies.length);
console.log("Latest Movies :", latestMovies.length);
console.log("Total Movies :", allMovies.length);
console.log("=================================");

// ==========================================
// END OF FILE
// ==========================================
