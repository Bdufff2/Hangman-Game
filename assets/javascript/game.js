const states = require('./states');

// Wrapping the entire game in a hangmanGame object to store all game vairables and logic
const hangmanGame = {
  // Creating a set of global variables to set the initial game state
  lettersOfTheWord: [],
  matchedLetters: [],
  guessedLetters: [],
  guessesLeft: 9,
  wins: 0,

  // Create a method to set the game when the initially document loads
  setGame: function() {
    
  },

  // Create a method to reload whenever a letter is guessed
  updateGame: function() {

  },

  // Create a method that handles incorrect guesses
  updateIncorrectGuesses: function() {

  },

  // Create a method to handle correct guesses
  updateCorrectGuesses: function() {

  },

  // Setup the outline of the selected word with underscores
  createHangmanWord: function() {

  },

  // Create a reset game function to set all variables back to initial state
  resetGame: function() {

  },

};

// Call initialize game functions
// Setup onkey events