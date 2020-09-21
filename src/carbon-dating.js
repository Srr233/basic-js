const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity !== "string") return false;
  let countPoints = 0;
  const newStr = sampleActivity.split('').filter(elem => {
    if (countPoints < 1 && elem.includes('.')) {
      countPoints++;
      return true;
    } else if (!elem.includes('.')) {
      return true;
    } else {
      return false;
    }
  }).join('');

  const kf = 0.693 / HALF_LIFE_PERIOD;
  const result = Math.ceil(
    Math.log(MODERN_ACTIVITY / +newStr) / kf
  );

  if (result < 0 || result === Infinity || isNaN(result)) {
    return false;
  }
  return result;
};
