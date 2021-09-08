document.querySelector(".button").addEventListener("click", play);

const resultElement = document.querySelector("h1.header");
const brickA = document.querySelector(".dice .img1");
const brickB = document.querySelector(".dice .img2");

function play() {
 let dropResult = drop();
 imagesChanger(dropResult[0], brickA);
 imagesChanger(dropResult[1], brickB);
 resultOfGambling(dropResult[0], dropResult[1]);
}

function imagesChanger(id, imageElement) {
    return imageElement.setAttribute("src", `images/dice${id}.png`);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drop() {
let a = getRandomIntInclusive(1, 6);
let b = getRandomIntInclusive(1, 6);

return [a, b];
}

function resultOfGambling(a, b) {
   if (a > b) {
       return resultElement.innerHTML = "🏁Player 1 Wins";
   } else if (a < b) {
       return resultElement.innerHTML = "Player 2 Wins🏁";
   } 
       return resultElement.innerHTML = "Draw!";
   }
