

const game = {
  title: 'Guess the Number!',
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  play: function() {

    this.range()
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
      do{
        this.prevGuesses.push(this.getGuess());
        this.render();
      }while(this.guess !== this.secretNum)


  }
}

game.range = function(){ //Bonus:Get the smallest and biggest number
  this.biggestNum = parseInt(prompt( `Enter biggest number`));
  while(isNaN(this.biggestNum)===true){ 
    this.biggestNum = parseInt(prompt( `Please re-enter biggest number`));
}
  this.smallestNum = parseInt(prompt( `Enter smallest number`));
  while(isNaN(this.smallestNum)===true || this.smallestNum > this.biggestNum-2){ 
    this.smallestNum = parseInt(prompt( `Please re-enter smallest number`));
}
}
game.prevGuesses = [];
game.guess = null;
game.getGuess = function(){
  this.guess = parseInt(prompt( `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
  while(isNaN(this.guess)===true || this.guess>this.biggestNum || this.guess<this.smallestNum){ 
    this.guess = parseInt(prompt( `Please re-enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
  }
  return this.guess;
}
game.render = function(){
  if(this.guess === this.secretNum){
        alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
  } else {
          if(this.guess>this.secretNum){
            alert(`Your guess is too high. Previous guesses:${this.prevGuesses.join(" , ")}`)
            this.biggestNum = this.guess;//Bonus
          }else{
            alert(`Your guess is too low. Previous guesses: ${this.prevGuesses.join(" , ")}`)
            this.smallestNum = this.guess;//Bonus
          }
    }
}

game.play()





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

//5. 5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
// - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
// - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`

// 6. The play method should end (return) when the guess matches secretNum


// -----------------FEATURES--------------------
// Allow the player to continually be prompted to enter their guess at the secret number until they guess correctly.

// If the player has an incorrect guess, display an alert message that informs the player:

// - Whether their guess is too high or too low, and…

// - A list of all the previously guessed numbers (without showing the square brackets of an array). 

// - If the player has guessed the secret number:

// - Display an alert message that congrats the player and informs them of how many guesses they took.

// - End the gameplay.








