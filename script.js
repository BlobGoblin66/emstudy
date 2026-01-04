// -------------------------
// 1. IMAGES LIST
// -------------------------
const images = [
    "images/pic1.gif",
    "images/pic2.gif",
    "images/pic3.gif",
];

// -------------------------
// 2. SLIDESHOW SETTINGS
// -------------------------
let current = 0;
const interval = 5000;

const slideshow = document.getElementById("slideshow");

// Preload images
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Set first image
slideshow.style.backgroundImage = `url('${images[0]}')`;

// -------------------------
// 3. SLIDESHOW LOOP
// -------------------------
setInterval(() => {
    current = (current + 1) % images.length;

    slideshow.style.filter = "blur(2px)";

    setTimeout(() => {
        slideshow.style.backgroundImage = `url('${images[current]}')`;
        slideshow.style.filter = "blur(0px)";
    }, 200);
}, interval);
