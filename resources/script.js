/* script.js

- variables declared
- add event listeners ##listeners
- fragment made for performance

*/

const bod = document.querySelector('body');
const cards = document.getElementsByClassName('card');
const fragDoc = document.createDocumentFragment();
const scoreU = document.querySelector('#scoreU');
const scoreI = document.querySelector('#scoreI');
const timeUe = document.querySelector('#timeU');
const timeI = document.querySelector('#timeI');

const cardClick = function(){
  console.log("event");
} // cardClick not sure why this has to be defined before the listener


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//console.log(getRandomInt(3));

// 6? console.log(cards.length);
let moons = 0;
let suns = 0;
let flowers = 0;
let flakes = 0;
let clouds = 0;
// loop through each card until each has a randomly assign innerhtml
for(i = 0; i < cards.length; i++){ // they taught me a better way for this

  let gri = getRandomInt(5);
  let card = cards[i];
  if (gri == 0 && moons < 2){
    card.innerHTML = "&#x263E;";
    card.classList.remove("sun", "moon", "flower", "flake", "cloud"); // feels repetetive
    card.classList.add("moon");
    card.id = "moon" + moons;
    // remove any of the other classes and add the one class
    moons++;
  } else if (gri == 1 && suns < 2 ){
    card.innerHTML = "&#x2600;";
    card.classList.remove("sun", "moon", "flower", "flake", "cloud"); // feels repetetive
    card.classList.add("sun");
    card.id = "sun" + suns;
    suns++;
  } else if (gri == 2 && flowers < 2){
    card.innerHTML = "&#x273F;";
    card.classList.remove("sun", "moon", "flower", "flake", "cloud"); // feels repetetive
    card.classList.add("flower");
    card.id = "flower" + flowers;
    flowers++;
  } else if (gri == 3 && flakes < 2){
    card.innerHTML = "&#x2744;";
    card.classList.remove("sun", "moon", "flower", "flake", "cloud"); // feels repetetive
    card.classList.add("flake");
    card.id = "flake" + flakes;
    flakes++;
  } else if (gri == 4 && clouds < 2){
    card.innerHTML = "&#x2601;";
    card.classList.remove("sun", "moon", "flower", "flake", "cloud"); // feels repetetive
    card.classList.add("cloud");
    card.id = "cloud" + clouds;
    clouds++;
  } else {
    i--;// this is wasteful but I need to keep rolling, the or statement was getting confusing
  };
;}
// bug1: cards being skipped because of too restrictive conditions
// bug1b: why did my loop minimizer stop working? typo. "cards" instead of "card"




let flips = 0;
let flip1 = 0;
let flip2 = 0;
let moves = 0;
let matches = 0;
let timeUi = 0; // Date() values too complex

function timeUf() {
        if (timeUi < 60) {
            timeUe.innerHTML = ":" + timeUi;
        } else {
            timeUe.innerHTML = Math.floor(timeUi / 60) + ":" + (timeUi - (Math.floor(timeUi / 60) * 60));
        }
        timeUi++;
        // if there is a match, stop the timer
    } // timeUf



function timeF(){ // time function

  if (timeUi === 0) {
      timeUe.innerHTML = ":" + timeUi;
      timeUi++;
  }// timeUi 0

  if (timeUi === 1) {
      console.log("timeUi1");
      timeUt = setInterval(timeUf, 1000); // w/o global scope, not reachable to clearInterval
  }
}


// ##listeners
for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    function flipF() {
      if (flips === 0) {
          flips++;
          card.classList.remove("back");
          flip1 = card;
      } else if (flips === 1) {
          flips++;
          card.classList.remove("back");
          moves++;
          scoreU.innerHTML = moves;
          //console.log(moves, scoreU);
          flip2 = card;
          if (flip1.innerHTML === flip2.innerHTML && flip1.id != flip2.id) {
              card.classList.remove("back");
              matches++
              //console.log("match card " + card);
              if (matches === 5) { // matches not equal 3
                  clearInterval(timeUt);
                  console.log('hi');
                  setTimeout(function(){alert('CONGRATULATIONS!\nYou\'ve found all the matches! But did you beat my score and time?')}, 500);
                  // alert is logged THEN moves and card back is remove.
              } else {
                  flips = 0;
              }; // if there is a match
          } else {
              setTimeout(function() {
                  flips = 0;
                  flip1.classList.add("back");
                  flip2.classList.add("back");
              }, 500);
          }; // else
      } // else if
    }
    card.addEventListener("click", function() { // handler time violation console log?

      timeF();
      flipF();

        }) // event function. figure out how to add 1 listener to all?
} // for cards loop

// double clicks starts some strange edge cases for both flipping and the timer
