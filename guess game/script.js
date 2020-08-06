let computeGuess;
let userGuesses =[];
let attempt = 0;
let maxGuesses;

let low = 1;
let high = 100;

function updateRange(){
   const rangeOutput = document.getElementById("rangeOutput");
   rangeOutput.innerHTML = `${low} - ${high}`;
   rangeOutput.style.marginLeft = low + "%";
   rangeOutput.style.marginRight = 100 - high + "%";
   rangeOutput.classList.add("flash");

    const lowValue = document.getElementById("low");
    lowValue.style.flex = low + "%";
    lowValue.style.background = "red";

    const spaceValue = document.getElementById("space");
    spaceValue.style.flex = high - low + "%";
    spaceValue.style.background = "#83e1d0";

    const highValue = document.getElementById("high");
    highValue.style.flex = 100 - high + "%";
    highValue.style.background = "green";

}

function gameEnded(){
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("inputBox").setAttribute("readonly", "readonly");
}

function newGame(){
    window.location.reload();
}

function init(){
    computeGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computeGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}

function startGame(){
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

function easyMode(){
    maxGuesses = 10;
    startGame();
}

function hardMode(){
    maxGuesses = 5;
    startGame();
}

function compareGuess() {
    const userGuess = Number(document.getElementById("inputBox").value);
    userGuesses.push(" " + userGuess);
    document.getElementById("guesses").innerHTML = userGuesses;
    attempt++;
    document.getElementById("attempts").innerHTML = attempt;
 if(attempt < maxGuesses){
    
    if (userGuess > computeGuess) {
        if (userGuess < high) high = userGuess;
        document.getElementById("textOutput").innerHTML = "Your guess is too high";
        document.getElementById("inputBox").value = "";
    } else if(userGuess < computeGuess){
       if (userGuess > low) low = userGuess;
        document.getElementById("textOutput").innerHTML = "Your guess is too low";
        document.getElementById("inputBox").value = "";
        
    }else{

        document.getElementById("textOutput").innerHTML = "Correct! You got it in"+ " " + attempt + " " +"attempts.";
        gameEnded();
    }
    }else{
        if (userGuess > computeGuess) {
            document.getElementById("textOutput").innerHTML = "YOU LOSE!, <br> The number was " +" "+ computeGuess;
             gameEnded();
        } else if(userGuess < computeGuess){
            document.getElementById("textOutput").innerHTML = "YOU LOSE!, <br> The number was " +" "+ computeGuess;
            gameEnded();
        }else{
    
            document.getElementById("textOutput").innerHTML = "Correct! You got it in"+ " " + attempt + " " +"attempts.";
            gameEnded();
        }
    }
    updateRange();
}
    