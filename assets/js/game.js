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

console.log(displayArr.join(" "));

var maxCount = chosenWord.length;
var count = 0;

console.log(chosenWord);

document.onkeydown = function(event) {
  function checkForWinner(){
    if(count === maxCount) {
      document.onkeydown = null
      if(displayArr.indexOf("_") !== -1) {
        console.log("You Lose!");
      }
      if(displayArr.indexOf("_") === -1) {
        console.log("You Won!");
      }
    }
  }

  var keyPress = event.key;

  if(count !== maxCount) {
    for(var i=0; i < chosenWord.length; i++) {
      if(keyPress === chosenWord.charAt(i)) {
        count++
        console.log("Correct!");
        displayArr[i] = keyPress;
        console.log(displayArr.join(" "));
        checkForWinner();
      }
    }

    if(chosenWord.indexOf(keyPress) === -1) {
      count++
      console.log("Wrong !");
      checkForWinner();
    }
  }
}
