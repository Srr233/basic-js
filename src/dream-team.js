const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let secretTeamNames = [];

  //----------------------
  for (let name of members) {

    if (typeof name === 'string') {
      secretTeamNames.push(name.trim()[0].toUpperCase());
    }
  }
  //----------------------
  return secretTeamNames.sort().join('');
};

