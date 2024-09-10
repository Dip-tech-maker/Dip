document.addEventListener('DOMContentLoaded', function() {

    // Select all play buttons
    const playButtons = document.querySelectorAll('.play-btn');
  
    // Add event listeners to each play button
    playButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Identify which button was clicked based on its id
        const buttonId = this.id;
  
        // Execute different code based on buttonId
        switch(buttonId) {
          case 'vocabulary-challenge':
            startVocabularyChallenge();
            break;
          case 'grammar-quiz':
            startGrammarQuiz();
            break;
          case 'word-puzzle':
            startWordPuzzle();
            break;
          default:
            console.error('Unknown button clicked!');
        }
      });
    });
  
    function startVocabularyChallenge() {
      alert('Starting Vocabulary Challenge!');
      // Add your game logic here
    }
  
    function startGrammarQuiz() {
      alert('Starting Grammar Quiz!');
      // Add your game logic here
    }
  
    function startWordPuzzle() {
      alert('Starting Word Puzzle!');
      // Add your game logic here
    }
  
  });
  