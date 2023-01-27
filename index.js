
var randomNumber1=Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
var diceImage = "images/dice" + randomNumber1 + ".png";
var randomimagesource=diceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber2);
var diceImage1 = "images/dice" + randomNumber2 + ".png";
var randomimagesource1=diceImage1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimagesource1);

// var randomNumber2=Math.floor(Math.random()*6)+1;
// var randomimage="image/dice"+randomNumber2+".png";
// var image2=document.querySelectorAll(img)[1];
// image2.setAttribute(src,randomimage)

if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins";
}
else if(randomNumber1>randomNumber2) {
document.querySelector("h1").innerHTML="player1 wins";
}
else
{
    document.querySelector("h1").innerHTML="draw"; 
}

  
