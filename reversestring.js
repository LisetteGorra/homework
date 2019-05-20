var string ="Life is what you make of it";

//this will split each individual letter into an array
var stringSplit = string.split("");
console.log(stringSplit);

//this will reverse the array of individual letters
var reverseSplitString = stringSplit.reverse();
console.log(reverseSplitString);

//this will merge the individual letter of the array back together, note there in no space between quotes after the .join
var joinReversedString = reverseSplitString.join("");
console.log(joinReversedString);