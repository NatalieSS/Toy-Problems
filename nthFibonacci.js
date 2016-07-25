// nthFibonacci: Suppose a newly-born pair of iguanas, 
// one male, one female, are put in a large aquarium.
// Iguanas are able to mate at the age of one month so 
// that at the end of its second month a female can produce 
// another pair of iguanas. Suppose that our iguanas never die 
// and that the female always produces one new pair (one male, 
// one female) every month from the second month on. How many 
// pairs of iguanas will there be after n months?

nthFibonacci = function(n) {  

var pairCounts = [0, 1];
var pairsNow;

if (n === 0) {
  pairsNow = 0;
} else if (n === 1) {
  pairsNow = 1;
} else {
  // need to store each count in the array 
  for (var i = 2; i <= n; i ++) {
    pairCounts.push(pairCounts[i-1] + pairCounts[i-2])
  }
  pairsNow = pairCounts[n];
}

return pairsNow;
};