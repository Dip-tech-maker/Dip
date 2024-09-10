// Sample questions array
const questions = [
    {
        question: "What does 'Kia ora' mean?",
        options: ["Hello", "Thank you", "Goodbye", "Yes"],
        answer: "Hello"
    },
    {
        question: "What is 'Sweet as' used for?",
        options: ["Expressing agreement", "Asking for help", "Expressing surprise", "Asking directions"],
        answer: "Expressing agreement"
    }
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question and options
function displayQuestion() {
    const questionDiv = document.getElementById('question');
    const optionsDiv = document.getElementById('options');
    const resultDiv = document.getElementById('result');

    // Clear previous question and result
    questionDiv.textContent = questions[currentQuestionIndex].question;
    optionsDiv.innerHTML = '';
    resultDiv.textContent = '';

    // Create buttons for each option
    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

// Function to check if the selected answer is correct
function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
        document.getElementById('result').textContent = "Correct!";
    } else {
        document.getElementById('result').textContent = "Incorrect. Try again.";
    }

    // Move to the next question or end the game
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

// Function to end the game and display the final score
function endGame() {
    document.getElementById('gameArea').innerHTML = `<h2>Game Over!</h2><p>Your score: ${score}/${questions.length}</p>`;
}

// Start the game
displayQuestion();
