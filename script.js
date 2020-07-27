var body = document.getElementById("body");
var c1value = "#FF0000";
var c2value = "#00FF00";
body.style.background = "linear-gradient(to right, " + c1value + ", " + c2value + ")";

var h3 = document.querySelector("h3");
h3.textContent = "background: " + body.style.background + ";";

var buttonRandom = document.querySelector("#button-random");

var color1 = document.querySelector(".color1");
color1.value = c1value;

var color2 = document.querySelector(".color2");
color2.value = c2value;

function setBodyGradientBG() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.textContent = "background: " + body.style.background + ";"; // textContent - one more way to add a text to HTML
}

function getRandomColorHex() {
    var chars = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }

    return color;
}

buttonRandom.addEventListener("click", function() {
    color1.value = getRandomColorHex();
    color2.value = getRandomColorHex();

    setBodyGradientBG();
});

color1.addEventListener("input", setBodyGradientBG); // first way - addEventListener
color2.addEventListener("input", setBodyGradientBG); // second way - add oninput attribute with created function above in HTML