// Image gallery switching logic
let galleryIndex = 0;
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
];

function switchImage() {
    const galleryImage = document.getElementById("gallery-image");
    galleryIndex = (galleryIndex + 1) % images.length; // Loop back to the first image
    galleryImage.src = images[galleryIndex];
}

// Switch image every 3 seconds
setInterval(switchImage, 3000);
