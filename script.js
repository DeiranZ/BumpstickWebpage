function showMenu(){
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
    console.log("Kliknalem");
}

function hideMenu(){
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
}

function scrollToHome(){
    var home = document.getElementById("scrollToHome");
    home.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function scrollToFeatures(){
    var features = document.getElementById("scrollToFeatures");
    features.scrollIntoView({behavior: "smooth", block:"start", inline: "center"});
}

function scrollToGallery(){
    var gallery = document.getElementById("scrollToGallery");
    gallery.scrollIntoView({behavior: "smooth", block:"start", inline: "start"});
}

function scrollToWishlist(){
    var wishlist = document.getElementById("scrollToWishlist");
    wishlist.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}

function enlargeScreenshot(img){
    if (window.screen.width < 840) return;

    if (img.style.zIndex == 2){
        img.style.transform = "scale(1)";
        img.style.zIndex = 0;
    }
    else{
        img.style.transform = "scale(2)";
        img.style.zIndex = 2;
        img.scrollIntoView({behavior: "smooth", block:"center", inline: "start"});
    }
}

var backgroundIndex = 0;
var animationState = 0;

const images = [
    'url(images/banner.png)',
    'url(images/1.png)',
    'url(images/2.png)',
    'url(images/4.png)',
    'url(images/5.png)',
    'url(images/6.png)'
]

function changeBg(){
    if (animationState == 0) fadeOut();
    else fadeIn();
}

function fadeOut(){
    const section = document.getElementById("headerSection");
    const bg = images[backgroundIndex];

    var increment = 0.025;
    var opacity = 0.8;
    var instance = window.setInterval(function() {
        section.style.backgroundImage = "linear-gradient(rgba(4,9,30," + opacity + "), rgba(4,9,30," + opacity + "))," + bg;
        opacity = opacity + increment;
        if(opacity > 1.1){
            window.clearInterval(instance);
            animationState = 1;
            setTimeout(fadeIn, 1_00);
        }
    },50)
}


function fadeIn(){
    const section = document.getElementById("headerSection");
    
    var newBgIndex = Math.floor(Math.random() * images.length);
    while (newBgIndex == backgroundIndex){
        newBgIndex = Math.floor(Math.random() * images.length);
    }
    backgroundIndex = newBgIndex;
    
    const bg = images[newBgIndex];

    var increment = 0.025;
    var opacity = 1.1;
    var instance = window.setInterval(function() {
        section.style.backgroundImage = "linear-gradient(rgba(4,9,30," + opacity + "), rgba(4,9,30," + opacity + "))," + bg;
        opacity = opacity - increment;
        if(opacity < 0.7){
            window.clearInterval(instance);
            animationState = 0;
            setTimeout(fadeOut, 5_000);
        }
    },50)
}

setTimeout(changeBg, 5_000);