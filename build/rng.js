const { randomBytes } = require('crypto');

function nodeRNG() {
  return randomBytes(16)
}

module.exports = nodeRNG