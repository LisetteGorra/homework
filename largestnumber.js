var numberSets = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

//output the largest number of each set.
var largestNumber = [];

for ( var i = 0; i < numberSets.length; i ++){
    var results = numberSets[i][0];
    for ( var j = 0; j < numberSets[i].length; j++){
        if (numberSets[i][j] > results){
            results = numberSets[i][j];
           
        }
     
    }
 largestNumber.push(largestNumber[i] = results);   
 largestNumber.pop();
}
 
  console.log(largestNumber);