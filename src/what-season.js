const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (typeof date === 'object' && !Object.keys(date).length) {

    const monthNumber = date.getMonth();

    if (monthNumber === 11 || monthNumber === 0 || monthNumber === 1) {
      return 'winter';
    } else if (monthNumber === 2 || monthNumber === 3 || monthNumber === 4) {
      return 'spring';
    } else if (monthNumber === 5 || monthNumber === 6 || monthNumber === 7) {
      return 'summer';
    } else if (monthNumber === 8 || monthNumber === 9 || monthNumber === 10) {
      return 'fall';
    }
  } else if (!date) {
    return 'Unable to determine the time of year!';
  } else {
    throw new Error('bad date');
  }
  /*
  return must be string
  if the date argument was not passed, the function must return the
  string 'Unable to determine the time of year!'
  if the date argument is invalid, the func must throw an Error.
  The same thing, in the date has an enemy... probably...
  */
};

