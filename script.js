// =========================
// AUTO BANNER SLIDER
// =========================

const banners = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg",
    "images/banner4.jpg",
    "images/banner5.jpg"
];

let currentBanner = 0;

const bannerImage = document.querySelector(".banner img");

function changeBanner() {

    currentBanner++;

    if (currentBanner >= banners.length) {
        currentBanner = 0;
    }

    bannerImage.src = banners[currentBanner];

}

setInterval(changeBanner, 4000);
