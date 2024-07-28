
function rolldice(){


var randomNumber = Math.random()*6;
var ALLcover = Math.floor(randomNumber+1);


 var randomImage = "dice" + ALLcover +".png";
 var images = document.querySelectorAll("img")[0];
 images.setAttribute("src",randomImage);

 var randomNumber1 = Math.random()*6;
 var ALLcover1 = Math.floor(randomNumber1 + 1);

 var randomImage1 = "dice"+ALLcover1+".png";
 var image1 = document.querySelectorAll("img")[1];
 image1.setAttribute("src",randomImage1);

 if (ALLcover > ALLcover1){
    document.querySelector("h1").innerHTML="PLAYER 1 WON 🚩 ";
 }

  else if (ALLcover < ALLcover1){
    document.querySelector("h1").innerHTML="PLAYER 2 WON 🚩";
  }
  else{
   document.querySelector("h1").innerHTML="DRAW ";
  }
  
}

document.getElementById("reloadButton").addEventListener("click",function(){
  rolldice();
});
