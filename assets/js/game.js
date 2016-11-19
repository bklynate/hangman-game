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

var randomWordIndex = Math.floor(Math.random() * wordbank.length);
var chosenWord = wordbank[randomWordIndex];
var chosenWordArr = chosenWord.split("");
var displayArr = [];

for(var i=0; i < chosenWordArr.length; i++) {
  displayArr.push(chosenWordArr[i].replace(chosenWordArr[i],"_"));
}

document.querySelector("#display").innerHTML = displayArr.join(" ");

var maxCount = chosenWord.length;
var count = 0;
var guessesLeft = maxCount - count;
document.querySelector("#guessesLeft").innerHTML = guessesLeft;

console.log("Spolier Alert: The word is - ", chosenWord);

document.onkeydown = function(event) {
  var guessesLeft = maxCount - count;
  document.querySelector("#guessesLeft").innerHTML = guessesLeft;
  function checkForWinner(){
    if(count === maxCount) {
      document.onkeydown = null
      if(displayArr.indexOf("_") !== -1) {
        document.querySelector("#winOrLose").innerHTML = "<h3>You Lose!</h3>";
      }
      if(displayArr.indexOf("_") === -1) {
        document.querySelector("#winOrLose").innerHTML = "<h3>You Won!</h3>";
      }
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
        checkForWinner();
      }
    }
  }
}
