  // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
  var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // Creating variables to hold the number of wins, losses, and ties. They start at 0.
  var wins = 0;
  var losses = 0;
  var guessesLeft = 10;
  var guessedLetters = [ ];
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


  function resetScore() { 
      guessedLetters.splice(0, guessedLetters.length);
      guessesLeft = 10; 
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  };

  function updateScore() { 
      document.getElementById("winsText").innerHTML = wins;
      document.getElementById("guessedLettersText").innerHTML = guessedLetters;
      document.getElementById("userGuessText").innerHTML = guessesLeft;
      document.getElementById("lossesText").innerHTML = losses;
      document.getElementById("statusText").innerHTML = status;
  };


  document.onkeydown = function(event) {

      //validates that user guess is an alphabet letter
      if(event.keyCode >= 65 && event.keyCode <= 90) {
          var userGuess = event.key.toLowerCase(); 

          //if user guesses computer guess, adds a point and resets guesses remaining
          if(userGuess === computerGuess) {
              wins++;
              alert("You're right! I was thiknking of " + userGuess);
              resetScore();
          }

          // else if user guesses same letter again, will alert to enter again
          else if (guessedLetters.includes(userGuess)) {
                  alert("You have already made this guess");
              }
              // if user guess is not correct then will remove a guess left
          else {
                  guessesLeft--;
                  guessedLetters.push(userGuess);
          }

          updateScore();

          // if user has no more guesses left then will add a loss, alert of correct answer and reset score
          if(guessesLeft <= 0) {
              losses++;
              alert("You loose. I was thinking of " + computerGuess);
              resetScore(); 
          }
          
          updateScore();
  
      // alerts if user guess is not a valid alphabet letter
      } else {
          alert("Enter a valid letter");
  }
};
