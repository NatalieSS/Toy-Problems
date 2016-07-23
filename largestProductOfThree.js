// Largest Product of Three: Write a function that accepts an array of 
// integers and returns the largest product possible from three of those numbers.


function largestProductOfThree (array) {
  var sorted = array.sort(function(a, b) {
  return a - b;
})
var topSum = (sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3]);
var bottomAndTopSum = (sorted[sorted.length - 1] * sorted[0] * sorted[1]);
  
  if (topSum > bottomAndTopSum) {
    return topSum;
  } else {
    return bottomAndTopSum;
  }
}