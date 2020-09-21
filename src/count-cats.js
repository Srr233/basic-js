const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  if (!(backyard[0] && backyard[1])) return 0;

  let howManyCats = backyard.map(back => {
    return back.reduce((previousValue, currentValue) => {
      if (currentValue === "^^") {
        return previousValue += 1;
      } else {
        return previousValue;
      }
    }, 0);
  }).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  return howManyCats;
}
