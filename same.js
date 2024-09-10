
  

// Question bank with different languages
const questions = {
    en: [
        { 
          question: "What is the capital of France?", 
          answers: ["Paris", "London", "Berlin", "Madrid"],
          correct: "Paris"  // Store the correct answer
        },
        { 
          question: "What is the largest planet?", 
          answers: ["Jupiter", "Earth", "Mars", "Venus"],
          correct: "Jupiter"
        },
      ],
      es: [
        { 
          question: "¿Cuál es la capital de Francia?", 
          answers: ["París", "Londres", "Berlín", "Madrid"],
          correct: "París"
        },
        { 
          question: "¿Cuál es el planeta más grande?", 
          answers: ["Júpiter", "Tierra", "Marte", "Venus"],
          correct: "Júpiter"
        },
      ],
      fr: [
        { 
          question: "Quelle est la capitale de la France?", 
          answers: ["Paris", "Londres", "Berlin", "Madrid"],
          correct: "Paris"
        },
        { 
          question: "Quelle est la plus grande planète?", 
          answers: ["Jupiter", "Terre", "Mars", "Vénus"],
          correct: "Jupiter"
        },
      ]
}
    

  
  // Function to display questions and answer buttons
  function displayQuestion(language) {
    const questionEl = document.getElementById('question');
    const answersEl = document.getElementById('answers');
    
    // Get the first question for demonstration
    const questionData = questions[language][0];
  
    // Update question text
    questionEl.textContent = questionData.question;
    
    // Clear old answers
    answersEl.innerHTML = ''; 
  };

    // Create buttons for each answer
 questionData1.answers.forEach(answer => {
  const button = document.createElement('button');
  button.textContent = answer;
  button.classList.add('answer-btn');
}



  ,function displayQuestion(language) {
    const questionE2 = document.getElementById('question');
    const answersE2 = document.getElementById('answers');
    
    // Get the first question for demonstration
    const questionData = questions[language][0];
  
    // Update question text
    questionE2.textContent = questionData.question;
    
    // Clear old answers
    answersE2.innerHTML = ''; 
  });
    // Create buttons for each answer
 questionData2.answers.forEach(answer => {
   const button = document.createElement('button');
   button.textContent = answer;
   button.classList.add('answer-btn');
 }
 
   
 // Add click event listener to handle answer selection
 ,button.addEventListener('click', () => {
   if (answer === questionData.correct) {
     alert('Correct!');
   } else {
     alert('Wrong answer, try again.');
   }
 }
  // Event listener for the "Start Game" button
  ,document.getElementById('start-game').addEventListener('click', () => {
    const selectedLanguage = document.getElementById('language').value;
    displayQuestion(selectedLanguage);
  })));