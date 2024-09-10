// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function() {

  // Select all play buttons
  const playButtons = document.querySelectorAll('.play-btn');

  // Add event listeners to each play button
  playButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the game title from the clicked button's parent element
      const gameTitle = this.parentElement.querySelector('h2').textContent;
      
      // Show an alert when the button is clicked (for demo purposes)
      alert(`Starting ${gameTitle}!`);
      
      // In a real app, you can redirect to the actual game or initiate the game logic
      // Example: window.location.href = `/games/${gameTitle.toLowerCase().replace(' ', '-')}`;
    });
  });

});

  