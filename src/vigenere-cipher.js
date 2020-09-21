const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine = true) {
    this.machine = machine;
  }
  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('message and key are string type!');
    }
      const START_CHAR_ID = 97; 
      let messageLowerCase = message.toLowerCase(),
        keyLowerCase = key.toLowerCase(),
        result = [],
        counter = 0;
        keyLowerCase = keyLowerCase.repeat(Math.ceil(messageLowerCase.length / keyLowerCase.length));

      for (let i of messageLowerCase) {
        if (/[a-z]/.test(i)) {

          const FIRST_NUM_CHAR_ID = keyLowerCase[counter].charCodeAt(0) - START_CHAR_ID,
                SECOND_NUM_CHAR_ID = i.charCodeAt(0) - START_CHAR_ID;
          let letterCode = FIRST_NUM_CHAR_ID + SECOND_NUM_CHAR_ID,
            encryptLetter = "";

          if (letterCode < 26) {
            encryptLetter = String.fromCharCode(letterCode + START_CHAR_ID);
          } else {
            letterCode = letterCode - 26;
            encryptLetter = String.fromCharCode(letterCode + START_CHAR_ID);
          }
          counter++;
          result.push(encryptLetter);
        } else result.push(i);
      }
      if (this.machine) {
        return result.join('').toUpperCase();  
      } else {
        return result.reverse().join('').toUpperCase();
      }
  }    
  decrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('message and key are string type!');
    }
    const START_CHAR_ID = 97;
      let messageLowerCase = message.toLowerCase(),
          keyLowerCase = key.toLowerCase(),
          result = [],
          counter = 0;
          keyLowerCase = keyLowerCase.repeat(Math.ceil(messageLowerCase.length / keyLowerCase.length)); // повторяем ключ

      for (let i of messageLowerCase) {
          if (/[a-z]/.test(i)) {

            const FIRST_NUM_CHAR_ID = keyLowerCase[counter].charCodeAt(0) - START_CHAR_ID,
                  SECOND_NUM_CHAR_ID = i.charCodeAt(0) - START_CHAR_ID;
            let letterCode = SECOND_NUM_CHAR_ID - FIRST_NUM_CHAR_ID,
                encryptLetter = "";

            if (letterCode > -1) {
              encryptLetter = String.fromCharCode(letterCode + START_CHAR_ID);
            } else {
              letterCode = SECOND_NUM_CHAR_ID + 26 - FIRST_NUM_CHAR_ID;
              encryptLetter = String.fromCharCode(letterCode + START_CHAR_ID);
            }
            counter++;
            result.push(encryptLetter);
          } else result.push(i);
      }

      if (this.machine) {
        return result.join('').toUpperCase();
      } else {
        return result.reverse().join('').toUpperCase();
      }
  }
}

module.exports = VigenereCipheringMachine;
