const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses:[], 
  getGuess: function() {
    let guess;
    while (true) {
      guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`);
      guess = parseInt(guess);
      if (guess >= this.smallestNum && guess <= this.biggestNum) {
        break;
      }
    }
    return guess;
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}


console.log(game.getGuess(5))





// getGuess: function(){
//   const guess = prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`);
//   return guess
// },



//--------------------TASKS----------------------
// 1. Add a prevGuesses property to the game object initialized to an empty array.

// 2. Add a getGuess method to game that prompts the player to enter a guess with a message formatted as: Enter a guess between [smallestNum] and [biggestNum]. 

//. ENsure that the getGuess method returns a value:
//  is a number not a string.
//  is between smallestNum and biggestNum, inclusive.

// 4. From within the play method, invoke the getGuess method from inside a loop, and add the new guess to the prevGuesses array


// -----------------FEATURES--------------------
// Allow the player to continually be prompted to enter their guess at the secret number until they guess correctly.

// If the player has an incorrect guess, display an alert message that informs the player:

// - Whether their guess is too high or too low, and…

// - A list of all the previously guessed numbers (without showing the square brackets of an array). 

// - If the player has guessed the secret number:

// - Display an alert message that congrats the player and informs them of how many guesses they took.

// - End the gameplay.








