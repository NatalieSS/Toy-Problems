// Reverse a string in place.

function reverseInPlace(str) {
	for (var i = str.length - 1; i >= 0 ; i --) {
		str = str + (str[i]);
	}

  str = str.substring((str.length/2));
  return str;
}