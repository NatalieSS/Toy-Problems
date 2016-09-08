/* Longest Run: Write a function that, given a string, finds the longest run 
of identical characters and returns an array containing the start and end 
indices of that run. If there are two runs of equal length, return the first 
one. Return [0,0] for no runs. */

function longestRun (string) {

var max = [0, 0];
var cur = [0, 0];

for (var i = 1; i < string.length; i++) {
	if (string[i] === string[i - 1]) {
		cur[1] = i;
		if (cur[1] - cur[0] > max[1] - max[0]) {
			max = cur;
		} 
	} else {
			cur = [i, i]
		}
}
return max;
}