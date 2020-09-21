const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  /*
  disksNumber - a number of disks
  turnsSpeed - speed
  both arguments are number 
  
  foo need to return an object with 2 properties
  * turns - minimum number of turns to solve the puzzle
  * seconds - minimum number of seconds to solve the puzzle at a given turnsSpeed, 
  seconds must be an integer, rounded down
  */

  let turns = 2;
  for (let i = 1; i < disksNumber; i++) {
    turns *= 2
  }
  turns--;
  const seconds = Math.floor((3600 / turnsSpeed) * turns);
  return { turns: turns, seconds: seconds };
};

