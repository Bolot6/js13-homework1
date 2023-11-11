
const inputs = document.querySelectorAll('input');
const resultElement = document.getElementById('res');
const choices = ['paper', 'scissors', 'rock'];

inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
        const playerChoice = e.target.value;
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        console.log('Player choice:', playerChoice);
        console.log('Computer choice:', computerChoice);

        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
    });
});

function determineWinner(player, computer) {
    if (player === computer) {
        return 'Tie!';
    } else if ((player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function displayResult(result) {
    resultElement.textContent = result;
}