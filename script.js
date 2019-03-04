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
  display.classList = "";
  display.innerHTML = "";
  display.classList.add("alert", "alert-primary")
  display.innerHTML = "You chose " + choice
  setTimeout(function() { game(choice) }, 1500)
})

paper.addEventListener("click", function(){
  let choice = "Paper";
  display.classList = "";
  display.innerHTML = "";
  display.classList.add("alert", "alert-primary")
  display.innerHTML = "You chose " + choice
  setTimeout(function() { game(choice) }, 1500)
})

scissors.addEventListener("click", function(){
  let choice = "Scissors";
  display.classList = "";
  display.innerHTML = "";
  display.classList.add("alert", "alert-primary")
  display.innerHTML = "You chose " + choice
  setTimeout(function() { game(choice) }, 1500)
})

resetBtn.addEventListener("click", function(){
  reset()
})

//functions

function game(choice) {
  display.classList = "";
  display.innerHTML = "";
  var compChoice = choices[Math.floor(Math.random() * 3)] 
  if (compChoice === choice) {
    display.classList.add("alert", "alert-warning")
    display.innerHTML = "Tie! The computer chose " + compChoice 
    ties++
    tieP.innerHTML = "Ties: " + ties
  } else if(choice == "Rock") {
      if (compChoice == "Paper"){
        display.classList.add("alert", "alert-danger")
        display.innerHTML = "Paper covers Rock! You lose!"
        losses++
        loseP.innerHTML = "Losses: " + losses
      } else {
        display.classList.add("alert", "alert-success")
        display.innerHTML = "Rock smashes scissors! You win!"
        wins++
        winP.innerHTML = "Wins: " + wins
      }
  } else if (choice == "Paper") {
    if (compChoice == "Scissors"){
      display.classList.add("alert", "alert-danger")
      display.innerHTML = "Scissors cut paper! You lose!"
      losses++
      loseP.innerHTML = "Losses: " + losses
    } else {
      display.classList.add("alert", "alert-success")
      display.innerHTML = "Paper covers rock! You win!"
      wins++
      winP.innerHTML = "Wins: " + wins
    }
  } else {
    if (compChoice == "Rock"){
      display.classList.add("alert", "alert-danger")
      display.innerHTML = "Rock smashes scissors! You lose!"
      losses++
      loseP.innerHTML = "Losses: " + losses
    } else {
      display.classList.add("alert", "alert-success")
      display.innerHTML = "Scissors cut paper! You win!"
      wins++
      winP.innerHTML = "Wins: " + wins
    }
  }
}

function reset() {
  wins = 0
  losses = 0
  ties = 0
  winP.innerHTML = "Wins: "
  loseP.innerHTML = "Losses: "
  tieP.innerHTML  = "Ties: "
  display.className = "none";
  display.innerHTML = "";
  alert("Game reset")
}