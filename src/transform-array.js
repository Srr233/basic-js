const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error('isn\'t an array');
  } else if (!arr.length) {
    return [];
  }

  let transformArray = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next':
        if (i + 1 < arr.length) transformArray.push(arr[i + 1]);
        break;
      case '--discard-next':
        i++;
        break;
      case '--double-prev':
        if ((i >= 1) && (arr[i - 2] != '--discard-next')) transformArray.push(arr[i - 1]);
        break;
      case ('--discard-prev'):
        if ((i >= 1) && (arr[i - 2] != '--discard-next')) transformArray.splice(-1, 1);
        break;
      default:
        transformArray.push(arr[i]);
    }
  }
  return transformArray;
}
