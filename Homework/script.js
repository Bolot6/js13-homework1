const randomNumber = Math.floor(Math.random() * 10) + 1;
const submitGuessButton = document.getElementById('submitGuessButton');

submitGuessButton.addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const resultMessage = document.getElementById('resultMessage');

    if (userGuess === randomNumber) {
        resultMessage.textContent = 'Well done!';
    } else {
        resultMessage.textContent = 'Try again';
    }
});
