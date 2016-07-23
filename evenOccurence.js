// Even Occurence: Find the first item that occurs an even number of times in an array. 
// Remember to handle multiple even-occurrence items and return the first one. 
// Return null if there are no even-occurrence items.

function evenOccurrence (arr) {

count = {};

for (var i = 0; i < arr.length; i ++) {
  var cur = arr[i];
  count[cur] = count[cur] || 0;
  count[cur] ++;
}
for (var j = 0; j < arr.length; j ++) {
  var test = arr[j];
  if (count[test] % 2 === 0) {
    return test;
  }
}
return null;
}