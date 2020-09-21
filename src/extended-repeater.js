const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!(options || str)) return false;

  let result = '';
  let fixOptions = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|"
  };

  for (let [key, value] of Object.entries(options)) {
    if (options[key] !== undefined) {
      fixOptions[key] = options[key];
    }
  }
  for (let i = 0; i < fixOptions.repeatTimes; i++) {
    result += `${str}`;


    for (let i = 0; i < fixOptions.additionRepeatTimes; i++) {
      result += `${fixOptions.addition}`;

      if (i < fixOptions.additionRepeatTimes - 1) {
        result += `${fixOptions.additionSeparator}`;
      }
    }

    if (i < fixOptions.repeatTimes - 1) result += `${fixOptions.separator}`;
  }
  return result;
}

  