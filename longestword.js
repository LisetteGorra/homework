// The quick brown fox jumped over the lazy dog 
// quasi- code
// find the longest word

// split the sentence into an array 
// initialize a longest word variable of type int (0)
// initialize a longest word variable of type string ("");
// loop through the array 
// compare the length of each word
    // count the letters of the current word (using .length)
    // store the length in a variable 
    // 
var sentence ="The quick brown fox jumped over the lazy dog";
var array = sentence.split(" ");
var longestWord = "";
var longestWordInt = 0;


for ( var i = 0; i < array.length; i++) {
        if ( array[i].length > longestWordInt) {
            longestWordInt = array[i].length;
            longestWord = array[i];
 
    }
  
}

  console.log("The longest word is '", + longestWord, + "' , it is", longestWordInt, "letters long.");