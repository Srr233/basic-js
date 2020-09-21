const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1
    let clearArr = arr.filter(elem => Array.isArray(elem));
    for (let item of clearArr) {
      let count2 = this.calculateDepth(item) + 1;
      if (count2 > count) count = count2;
    }
    return count;
  }
}