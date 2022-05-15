let randomNumber1 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);

let diceImages = "dice" + randomNumber1 + ".png";

let imageSource = "images/" + diceImages;
let image1 =  document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let diceImage2 = "dice" + randomNumber2 + ".png";
let imageSource2 = "images/" + diceImage2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}









// document.querySelector("img1").attributes;
// document.querySelector("img1").getAttribute("src");
// document.querySelector("img1").setAttribute("src", "./images");

// document.querySelector("img2").attributes;
// document.querySelector("img2").getAttribute("src");
// document.querySelector("img2").setAttribute("src", "./images");