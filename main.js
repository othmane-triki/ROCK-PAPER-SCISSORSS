//rock paper scissors game
const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function playGame(playerChoice) {
    playerDisplay.textContent = `Player: ${playerChoice}`;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerDisplay.textContent = `Computer: ${computerChoice}`;

    if( playerChoice === computerChoice) resultDisplay.textContent = 'It\'s a Tie!';
    else if (playerChoice === 'rock') {
        resultDisplay.textContent = (computerChoice === 'scissors') ? 'You Win!' : 'You Lose!';
    } else if (playerChoice === 'paper') {
        resultDisplay.textContent = (computerChoice === 'rock') ? 'You Win!' : 'You Lose!';
    } else if (playerChoice === 'scissors') {
        resultDisplay.textContent = (computerChoice === 'paper') ? 'You Win!' : 'You Lose!';
    }

    if(resultDisplay.textContent.includes('Win')) {
        resultDisplay.style.color = 'green';
    } else if(resultDisplay.textContent.includes('Lose')) {
        resultDisplay.style.color = 'red';
    } else {
        resultDisplay.style.color = 'black';
    }
}