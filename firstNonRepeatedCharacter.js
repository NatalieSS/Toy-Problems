/*Non-repeated Character: Given an arbitrary input string, return the 
first non-repeating character. For strings with all repeats, return 'sorry'. */

function firstNonRepeatedCharacter (string) {
    debugger;
  var count = {};
  
  for (var i = 0; i < string.length; i ++) {
  	var cur = string.charAt(i);
  	
    count[cur] = count[cur] || 0;
    count[cur]++;
  }
  for (var j = 0; j < string.length; j ++) {
    var test = string.charAt(j);
  	var winner;
  	
  	if (count[test] === 1) {
  		var winner = string.charAt(j);
  		return winner;
  	}
  }
  return "sorry";
}