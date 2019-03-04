// Variables
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let resetBtn = document.getElementById("reset");
let winP = document.getElementById("win-count");
let loseP = document.getElementById("lose-count")
let wins = 0;
let losses = 0;


// Listeners
rock.addEventListener("click", function(){
  let choice = 1;
  game(choice)
})

paper.addEventListener("click", function(){
  let choice = 2;
  game(choice)
})

scissors.addEventListener("click", function(){
  let choice = 3;
  game(choice)
})

resetBtn.addEventListener("click", function(){
  reset()
})

//functions

function game(choice) {
  var winner = Math.ceil(Math.random() * 3) 
  if (winner === choice) {
    alert("You won!")
    wins += 1
    winP.innerHTML = "Wins: " + wins
  } else {
    alert("You lost.")
    losses += 1
    loseP.innerHTML = "Losses: " + losses
  } 
}

function reset() {
  wins = 0
  losses = 0
  winP.innerHTML = "Wins: 0"
  loseP.innerHTML = "Losses: 0"
  alert("Game reset")
}