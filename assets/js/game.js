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
  'credit card',
  'currency',
  'customer',
  'deposit',
  'interest'
]
var randomWordIndex = Math.floor(Math.random() * wordbank.length);
var chosenWord = wordbank[randomWordIndex];
var chosenWordArr = chosenWord.split("")
var displayArr =[]

for(var i=0; i < chosenWordArr.length; i++) {
  displayArr.push(chosenWordArr[i].replace(chosenWordArr[i],"_"));
}

console.log(displayArr.join(" "));

document.onkeyup = function(event) {
  console.log(event.key);
}
