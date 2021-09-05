let randomNumber1;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(1, 6);
randomNumber1 = getRandomIntInclusive(1, 6);
randomNumber1;

function imagesChanger1() {
if (randomNumber1 == 1) {
    return document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 == 2) {
    return document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 == 3) {
    return document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 == 4) {
    return document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 == 5) {
    return document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
} else if (randomNumber1 == 6) {
    return document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
}
}

let randomNumber2;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(1, 6);
randomNumber2 = getRandomIntInclusive(1, 6);
randomNumber2;

function imagesChanger2() {
if (randomNumber2 == 1) {
    return document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
} else if (randomNumber2 == 2) {
    return document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
} else if (randomNumber2 == 3) {
    return document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
} else if (randomNumber2 == 4) {
    return document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
} else if (randomNumber2 == 5) {
    return document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
} else if (randomNumber2 == 6) {
    return document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
}
}

function resultOfGambling() {
   if (randomNumber1 > randomNumber2) {
       return document.querySelector("h1").innerHTML = "🏁Player 1 Wins";
   } else if (randomNumber1 < randomNumber2) {
       return document.querySelector("h1").innerHTML = "Player 2 Wins🏁";
   } else if (randomNumber1 == randomNumber2) {
       return document.querySelector("h1").innerHTML = "Draw!";
   } 
}

function imagesChanger() {
 imagesChanger1();
 imagesChanger2();
 resultOfGambling()
}