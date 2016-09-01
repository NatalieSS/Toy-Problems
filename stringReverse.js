// Reverse a string.

function reverse (str) {
	var resultArr =[];

	for (var i = str.length-1; i >= 0; i --) {
		resultArr.push(str[i]);
	}
	return String(resultArr);
}