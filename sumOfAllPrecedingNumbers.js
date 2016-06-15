// Write a function that returns the sum from 1 to n given n.

var sumToN = function(n) {
  var counter = 1;
  var sum = 0;

  while (counter <= n) {
    sum += counter;
    counter ++;
  }
  return sum;
};