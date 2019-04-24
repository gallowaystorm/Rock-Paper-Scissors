let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const commputerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.getElementById("result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissors");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return 'Paper';
    if (letter === "s") return "Scissor";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    commputerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    

    //meant to add green around object when win but for some reason it is not working
    console.log(userChoice);
    userChoice.classList.add('green-glow');
    SetTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    commputerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...`;

    //meant to add red around object when win but for some reason it is not working
    //userChoice_div.classList.add('red-glow');
    //setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ties with ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
    
    
    //meant to add gray around object when win but for some reason it is not working
    //userChoice_div.classList.add('gray-glow');
   // setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}
console.log(getComputerChoice());

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p")
    })

    scissor_div.addEventListener('click', function(){
        game("s");
    })
}

main();


