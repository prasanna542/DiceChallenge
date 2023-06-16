var randomNo1= (Math.floor(Math.random()*6))+1;

var randomNo2= (Math.floor(Math.random()*6))+1;

var dice1= "dice"+randomNo1+".png";
document.querySelectorAll("img")[0].setAttribute("src", dice1);

var dice2= "dice"+randomNo2+".png";
document.querySelector(".img2").setAttribute("src", dice2);


if(randomNo1>randomNo2){

    document.querySelector("h1").innerHTML="🚩player 1 won ";
}
else if(randomNo1<randomNo2){

    document.querySelector("h1").innerHTML="player 2 won 🚩";
}
else {

    document.querySelector("h1").innerHTML="🚩 Draw! 🚩";

}






// alert("working");