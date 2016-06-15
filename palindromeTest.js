// Write a function to determine if a string is a palindrome.

var palindromeTest = function(str) {
  var palindrome = true;
  var j = str.length-1;

  for (var i = 0; i < str.length; i ++) {

    if (str.charAt(i) == str.charAt(j)) {
      palindrome = true;
      j--;
    } else {
      palindrome = false;
      return palindrome;
    }
    }
    return palindrome;
};