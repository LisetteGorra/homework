var numberSets = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

//output the largest number of each set.
var largestNumber = [];
var tempMax = 0;
for ( var i = 0; i < numberSets.length; i ++){
    // var tempMax = numberSets[i][0];
    for ( var j = 0; j < numberSets[i].length; j++){
        var maxArrNumber = numberSets[i][j];
        if (maxArrNumber > largestNumber){
            // tempMax = maxArrNumber;
            largestNumber[i] = maxArrNumber;
          
        }
        
    }
   
    //  largestNumber.push(tempMax)
}
  console.log(largestNumber);