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
