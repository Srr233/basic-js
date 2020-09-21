const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === "") {
      this.chain.push(`( () )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (position > 0 && position <= this.chain.length && Number.isInteger(position)) {
      this.chain.splice(--position, 1);
    } else {
      this.chain = [];
      throw Error('it\'s not correct type value. You need number 1+');
    }

    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const res = this.chain.slice().join("~~");
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
