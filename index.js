var randomNumber1 = Math.random();
    randomNumber1 = randomNumber1*6
randomNumber1 = Math.floor(randomNumber1)+ 1;

var randomImage = "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);


var randomNumber2 = Math.random();
var randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2)+1;

var randomImage1="dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage1);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WON 🚩 ";
}

else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 2 WON 🚩 "
}

else {
    document.querySelector("h1").innerHTML="Draw 🤡"
}
