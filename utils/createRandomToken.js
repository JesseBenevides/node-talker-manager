const crypto = require('crypto');

const createRandomToken = () => (
  crypto.randomBytes(8).toString('hex')
);

module.exports = createRandomToken;

// Função criada com ajuda de Claudio Cassimiro
