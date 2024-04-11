document.addEventListener('DOMContentLoaded', function() {
    const maxAttempts = 3;
    let attemptsLeft = maxAttempts;
    let colors;
    let correctColorIndex;
    let correctColor;
    const colorDisplay = document.getElementById('colorDisplay');
    const rgbValue = document.getElementById('rgbValue');
    const optionsContainer = document.getElementById('options');
    const message = document.getElementById('message');
    const livesDisplay = document.getElementById('lives');
    const resetButton = document.getElementById('resetButton');

    // Initializes game
    resetGame();

    // Reset game
    resetButton.addEventListener('click', resetGame);

    // Reset game function
    function resetGame() {
        colors = generateRandomColors(3);
        correctColorIndex = Math.floor(Math.random() * colors.length);
        correctColor = colors[correctColorIndex];
        colorDisplay.style.backgroundColor = '';
        rgbValue.textContent = correctColor; // Display RGB value
        optionsContainer.innerHTML = '';
        message.textContent = '';
        attemptsLeft = maxAttempts;
        updateLivesDisplay();
        displayColorOptions();
    }

    // The displayColorOptions function creates HTML elements to display color options for the player to choose from. Each option is a colored box that, when clicked, triggers the checkAnswer function.
    function displayColorOptions() {
        colors.forEach((color, index) => {
            const option = document.createElement('div');
            option.classList.add('option');
            option.style.backgroundColor = color;
            option.addEventListener('click', () => checkAnswer(index));
            optionsContainer.appendChild(option);
        });
    }

    // When a color option is clicked, the checkAnswer function is called with the index of the chosen color. If the chosen index matches the index of the correct color, it displays "Correct!" and resets the game after a brief delay. If not, it decrements the attempts left, updates the UI, and informs the player if they're out of attempts.
    function checkAnswer(index) {
        if (index === correctColorIndex) {
            message.textContent = 'Correct!';
            message.style.color = 'green';
            setTimeout(resetGame, 1000); // Wait for 1 second before resetting
        } else {
            attemptsLeft--;
    // The updateLivesDisplay function updates the UI to display the remaining attempts.
            updateLivesDisplay();
            if (attemptsLeft === 0) {
                message.textContent = `You're out of lives. The correct color was ${correctColor}.`;
                message.style.color = 'red';
                resetButton.textContent = 'Play Again';
            } else {
                message.textContent = 'Incorrect! Try again.';
                message.style.color = 'red';
            }
        }
    }

    function updateLivesDisplay() {
        livesDisplay.textContent = attemptsLeft;
    }

    // The randomColor function generates a random RGB color.
    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // The generateRandomColors function creates an array of random colors based on the given number.
    function generateRandomColors(num) {
        const arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(randomColor());
        }
        return arr;
    }
});



