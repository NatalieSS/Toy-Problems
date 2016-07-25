// Only Unique: Given a string, remove any characters that are not unique from the string.

function onlyUnique (str) {
  // two for loops - for each char in string, search to see if there
  // are any identical chars
  
  var count = {};

  for (var i = 0; i < str.length; i ++) {
    var current = str.charAt(i);
    count[current] = count[current] || 0;
    count[current] ++;
  }
  
  var newStr = '';
  
  for (var j = 0; j < str.length; j ++) {
    var current = str.charAt(j);
    if (count[current] === 1) {
      newStr += current;
    }
  }
  return newStr;
}