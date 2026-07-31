// ==========================================
// FILMYZONE
// movies.js Final v4
// Part 1/4
// ==========================================

"use strict";

// ==========================================
// MOVIES DATABASE
// ==========================================

const movies = [

{
    id:1,
    title:"KGF Chapter 2",
    image:"images/movies/kgf2.jpg",
    category:"Action",
    language:"Hindi",
    year:"2022",
    normalHD:"https://example.com/kgf720",
    fullHD:"https://example.com/kgf1080",
    size720:"1.2 GB",
    size1080:"2.6 GB"
},

{
    id:2,
    title:"Salaar",
    image:"images/movies/salaar.jpg",
    category:"Action",
    language:"Hindi",
    year:"2023",
    normalHD:"https://example.com/salaar720",
    fullHD:"https://example.com/salaar1080",
    size720:"1.4 GB",
    size1080:"3.1 GB"
},

{
    id:3,
    title:"Animal",
    image:"images/movies/animal.jpg",
    category:"Action",
    language:"Hindi",
    year:"2023",
    normalHD:"https://example.com/animal720",
    fullHD:"https://example.com/animal1080",
    size720:"1.5 GB",
    size1080:"3.2 GB"
},

{
    id:4,
    title:"Jawan",
    image:"images/movies/jawan.jpg",
    category:"Action",
    language:"Hindi",
    year:"2023",
    normalHD:"https://example.com/jawan720",
    fullHD:"https://example.com/jawan1080",
    size720:"1.4 GB",
    size1080:"3.0 GB"
},
{
    id:5,
    title:"Leo",
    image:"images/movies/leo.jpg",
    category:"Action",
    language:"Hindi",
    year:"2023",
    normalHD:"https://example.com/leo720",
    fullHD:"https://example.com/leo1080",
    size720:"1.3 GB",
    size1080:"2.8 GB"
},

{
    id:6,
    title:"Pathaan",
    image:"images/movies/pathaan.jpg",
    category:"Action",
    language:"Hindi",
    year:"2023",
    normalHD:"https://example.com/pathaan720",
    fullHD:"https://example.com/pathaan1080",
    size720:"1.3 GB",
    size1080:"2.9 GB"
},

{
    id:7,
    title:"Tiger 3",
    image:"images/movies/tiger3.jpg",
    category:"Action",
    language:"Hindi",
    year:"2023",
    normalHD:"https://example.com/tiger720",
    fullHD:"https://example.com/tiger1080",
    size720:"1.4 GB",
    size1080:"3.1 GB"
},

{
    id:8,
    title:"Brahmastra",
    image:"images/movies/brahmastra.jpg",
    category:"Adventure",
    language:"Hindi",
    year:"2022",
    normalHD:"https://example.com/brahmastra720",
    fullHD:"https://example.com/brahmastra1080",
    size720:"1.1 GB",
    size1080:"2.4 GB"
},
{
    id:9,
    title:"Pushpa",
    image:"images/movies/pushpa.jpg",
    category:"Action",
    language:"Hindi",
    year:"2021",
    normalHD:"https://example.com/pushpa720",
    fullHD:"https://example.com/pushpa1080",
    size720:"1.3 GB",
    size1080:"2.7 GB"
},

{
    id:10,
    title:"War",
    image:"images/movies/war.jpg",
    category:"Action",
    language:"Hindi",
    year:"2019",
    normalHD:"https://example.com/war720",
    fullHD:"https://example.com/war1080",
    size720:"1.2 GB",
    size1080:"2.5 GB"
}

];

// ==========================================
// MOVIE FUNCTIONS
// ==========================================

// Find Movie By ID
function getMovieById(id){

    return movies.find(movie => movie.id == id);

}

// Search Movie
function searchMovie(keyword){

    keyword = keyword.toLowerCase();

    return movies.filter(movie =>

        movie.title.toLowerCase().includes(keyword) ||

        movie.category.toLowerCase().includes(keyword) ||

        movie.language.toLowerCase().includes(keyword) ||

        movie.year.toString().includes(keyword)

    );

}
// ==========================================
// TOTAL MOVIES
// ==========================================

console.log("=================================");
console.log("FILMYZONE");
console.log("movies.js Final v4 Loaded Successfully ✅");
console.log("Total Movies :", movies.length);
console.log("=================================");

// ==========================================
// END OF FILE
// ==========================================
