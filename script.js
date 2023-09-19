/*
Student name: Adam McClain
Fine Name: script.js
Date: sept. 19, 2023
*/

//Global Variables
var video = document.getElementById("example");
var videoSource = document.activeElement("vd-src");
var descriptionSource = document.getElementById("despsrc");

//Hamburger functions
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffo-logo")
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.dispaly = "none";
    }
}



//Functio to display the burpees example video
function burpees() {
    videoSource.src = "media/burpees.mp4";
    descriptionSource.src = "media/burpees-description.vtt";
    video.style.display = "block"; 
    video.load();
}

//Function to display the plank example video
function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionSource.src = "media/plank-description.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display the mountain climbers example video
function mountai() {
    videoSource.src = "media/mc.mp4";
    descriptionSource.src = "media/mountain-description.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display a promo code
function discount() {
    var promo = document.getElementById("specail");
    promo.firstChild.nodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontsize = "2em";
}