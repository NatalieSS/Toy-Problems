// Character Frequency: Write a function that takes as its input a string and returns an array 
// of arrays sorted in descending order by frequency and then by ascending order by character.

var charFrequency = function(str) {
	if (str.length === 0) {
	  return [];
	}

	// create object first to store counts then later convert to array
	var count = {};
	var sorted = [];

	for (var i = 0; i < str.length; i ++) {
	  //  load up the count obj
    if (count[str[i]]) {
      count[str[i]]++;
    } else {
      count[str[i]] = 1;
    }
	}

	for (var keys in count) {
    if (sorted.length === 0) {
    	sorted.push(keys);
    	sorted.push(count[keys]);
    } else {
    	// add insertion sort function for multidimesnional array
	  }
    return sorted;
}
}