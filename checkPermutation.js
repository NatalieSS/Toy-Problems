// Check Permutation: Given two strings, write a function to decide if one is a permutation of the other.

function checkPermutation (str1, str2) {
  // if they are diff lengths, return false
  if (str1.length !== str2.length) {
  	return false;
  }
  // iterate through str1, checking to see if each char is in str2
  // once you find it in str2, delete it in str2 so it can't be counted twice

  var workingStr2 = str2;

  for (var i = 0; i < str1.length; i ++) {
  	if (workingStr2.indexOf(str1.charAt(i)) >= 0) {
  		workingStr2 = workingStr2.replace(str1[i], "");
  	}
  }
  if (workingStr2.length == 0) {
  	return true;
  } else {
  	return false;
  }
}
