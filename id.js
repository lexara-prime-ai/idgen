const log = console.log;
const crypto = require('crypto');
const hash = crypto.createHash(
    'sha256'
);
// GENERATE ID
const generateId = {
    chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789',
    generateRandomNumber: (min, max) => Math.floor(Math.random() * (max - min) + min)
};
hash.update(generateId.generateRandomNumber(100, 200) + generateId.chars);

const ID = () => hash.digest('hex');

module.exports = ID;
