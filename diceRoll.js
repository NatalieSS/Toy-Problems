// Write a function that rolls a pair of dice randomly.

var diceRoll = function() {
  // perform same randomization twice
  //function that return random integer value between 1 and 6
  var result = [];

  result.push(Math.floor(Math.random() * (5)) + 1);
  result.push(Math.floor(Math.random() * (5)) + 1);

  return result;
};
