var wordbank = [
  'account',
  'bills',
  'borrow',
  'alarm',
  'cash',
  'cashier',
  'check',
  'coins',
  'credit',
  'currency',
  'customer',
  'deposit',
  'interest'
];

var gameSounds = {
	wrong: {
		sound: new Howl({
  		urls: ['sounds/moon.mp3']
		})
	},
	right: {
		sound: new Howl({
  		urls: ['sounds/pinwheel.mp3']
		})
	},
  winner: {
    sound: new Howl({
      urls: ['sounds/winner.mp3']
    })
  },
  loser: {
    sound: new Howl({
      urls: ['sounds/loser.mp3']
    })
  }
}

var randomWordIndex = Math.floor(Math.random() * wordbank.length);
var chosenWord = wordbank[randomWordIndex];
var chosenWordArr = chosenWord.split("");
var displayArr = [];

for(var i=0; i < chosenWordArr.length; i++) {
  displayArr.push(chosenWordArr[i].replace(chosenWordArr[i],"_"));
}

document.querySelector("#display").innerHTML = displayArr.join(" ");

var maxCount = 12;
var count = 0;
var guessesLeft = maxCount - count;
document.querySelector("#guessesLeft").innerHTML = guessesLeft;

console.log("Spolier Alert: The word is ", chosenWord);

document.onkeydown = function(event) {
  var guessesLeft = maxCount - count;
  document.querySelector("#guessesLeft").innerHTML = guessesLeft;
  function checkForWinner(){
    if(displayArr.indexOf("_") !== -1) {
      if(count === maxCount) {
        document.onkeydown = null
        document.querySelector("#winOrLose").innerHTML = "<h3>You Lose!</h3>";
        gameSounds.loser.sound.play();
      }
    }
    if(displayArr.indexOf("_") === -1) {
      document.onkeydown = null
      document.querySelector("#winOrLose").innerHTML = "<h3>You Won!</h3>";
      gameSounds.winner.sound.play();
    }
  }

  if(event.keyCode >= 65 && event.keyCode <= 90) {
    var keyPress = event.key;
    if(count !== maxCount) {
      for(var i=0; i < chosenWord.length; i++) {
        if(keyPress === chosenWord.charAt(i)) {
          count++
          guessesLeft--
          document.querySelector("#guessesLeft").innerHTML = guessesLeft;
          document.querySelector("#guessOutcome").innerHTML = "Correct !";
          gameSounds.right.sound.play();
          displayArr[i] = keyPress;
          document.querySelector("#display").innerHTML = displayArr.join(" ");
          checkForWinner();
        }
      }

      if(chosenWord.indexOf(keyPress) === -1) {
        count++
        guessesLeft--
        document.querySelector("#guessesLeft").innerHTML = guessesLeft;
        document.querySelector("#guessOutcome").innerHTML = "Wrong !";
        gameSounds.wrong.sound.play();
        checkForWinner();
      }
    }
  }
}
