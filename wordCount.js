// Word Count: Write a function that counts the number of words in a string.

var wordCount = function(str) {
  var counter = 1;
  var anyWords = false;

  // need outs for string composed of just spaces
  for (i = 0; i < str.length; i ++) {
    if (str.charAt(i) !== " ") {
      anyWords = true;
      }
    }
    if (anyWords === false) {
     counter = 0;
     return counter;
    }

  // otherwise, just count the spaces and add a word for each space
  for (i = 0; i < str.length; i ++) {
    if (str.charAt(i) === " ") {
    counter ++;
    }
  }
  return counter;
}