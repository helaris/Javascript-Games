import { pickRandom } from './helpers.js'

var playerScore = 0;
var computerScore = 0;
const options = ['rock', 'paper', 'scissor'];

$("#rock-paper-scissor-imgs input").on("click", function(e) {
    let playerChoice = e.target.id;
    let computerChoice = pickRandom(options);
    let winner = getWinner(playerChoice, computerChoice);
    if(winner === "computer") {
        computerScore++;
        $("#computerScore").text(computerScore);
        $("#winner").text("Computer Won!")
            .fadeIn("200")
            .fadeOut("200")
    }
    else if(winner === "player") {
        playerScore++;
        $("#playerScore").text(playerScore);
        $("#winner").text("Player Won!")
            .fadeIn("200")
            .fadeOut("200")
    }
    else {
        $("#winner").text("Draw!")
            .fadeIn("200")
            .fadeOut("200")
    }
})

function getWinner(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        return "draw";
    }
    else if(playerChoice === "rock" && computerChoice === "scissor" || 
            playerChoice === "paper" && computerChoice === "rock" ||
            playerChoice === "scissor" && computerChoice === "paper"
        ) {
        return "player"
    }
    else {
        return "computer"
    }
}