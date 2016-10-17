// String Compression: Implement a method to perform basic string compression using the counts 
// of repeated characters. For example, "aabcccccaaa" will become "a2b1c5a3". If the compressed 
// string would not be smaller than the original string, return the original string. You can 
// assume the string has only upper and lowercase letters.


function compressStr(str) {
  // iterate through str, if char is same as one preceding it, add to counter, if not, push char 
  // and counter to new str and repeat
  var newStr = "";
  var count = 1;

  for (var i = 1; i < str.length; i ++) {
    if (str[i] == str[i - 1]) {
      count ++;
    } else {
      newStr = newStr + str[i - 1] + count;
      count = 1;
    }
  }
  console.log(newStr);
// if newStr is shorter return it; else return original str
  var result;

  if (newStr.length < str.length) {
    result = newStr;
  } else {
    result = str;
  }
  return result;
  }
