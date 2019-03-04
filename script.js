// Variables
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let resetBtn = document.getElementById("reset");
let winP = document.getElementById("win-count");
let loseP = document.getElementById("lose-count");
let tieP = document.getElementById("tie-count");
let display = document.getElementById("display");
let ties = 0;
let wins = 0;
let losses = 0;
let choices = ["Rock", "Paper", "Scissors"]



// Listeners
rock.addEventListener("click", function(){
  let choice = "Rock";
  display.innerHTML = "You chose " + choice
  setTimeout(function() { game(choice) }, 1500)
})

paper.addEventListener("click", function(){
  let choice = "Paper";
  display.innerHTML = "You chose " + choice
  setTimeout(function() { game(choice) }, 1500)
})

scissors.addEventListener("click", function(){
  let choice = "Scissors";
  display.innerHTML = "You chose " + choice
  setTimeout(function() { game(choice) }, 1500)
})

resetBtn.addEventListener("click", function(){
  reset()
})

//functions

function game(choice) {
  var compChoice = choices[Math.floor(Math.random() * 3)] 
  if (compChoice === choice) {
    alert("Tie! The computer chose " + compChoice)
    ties++
    tieP.innerHTML = "Ties: " + ties
  } else if(choice == "Rock") {
      if (compChoice == "Paper"){
        alert("Paper covers Rock! You lose!")
        losses++
        loseP.innerHTML = "Losses: " + losses
      } else {
        alert("Rock smashes scissors! You win!")
        wins++
        winP.innerHTML = "Wins: " + wins
      }
  } else if (choice == "Paper") {
    if (compChoice == "Scissors"){
      alert("Scissors cut paper! You lose!")
      losses++
      loseP.innerHTML = "Losses: " + losses
    } else {
      alert("Paper covers rock! You win!")
      wins++
      winP.innerHTML = "Wins: " + wins
    }
  } else {
    if (compChoice == "Rock"){
      alert("Rock smashes scissors! You lose!")
      losses++
      loseP.innerHTML = "Losses: " + losses
    } else {
      alert("Scissors cut paper! You win!")
      wins++
      winP.innerHTML = "Wins: " + wins
    }
  }
  display.innerHTML = ""
}

function reset() {
  wins = 0
  losses = 0
  ties = 0
  winP.innerHTML = "Wins: "
  loseP.innerHTML = "Losses: "
  tieP.innerHTML  = "Ties: "
  alert("Game reset")
}