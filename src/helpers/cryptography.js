const crypto = require('crypto');

const salt = process.env.SALT;

function generateHash(content, character) {
    const saltyContent = content + character + salt;
    const hashedContent = crypto.createHash('sha256').update(saltyContent).digest('hex');

    return hashedContent;
}

function stretchHash(hash, stretchedHashLength) {
    // Inverte o hash criado depois junta e convert para hexadecimal
    const randomSalt = hash.split('').reverse().join('').toString("hex");

    const derivedKey = crypto.scryptSync(hash, randomSalt, (stretchedHashLength/2))
    const stretchedHash  = derivedKey.toString('hex');

    return stretchedHash;
}

module.exports = (content, randomChar='', finalHashLength=128) => {
    const hashedContent = generateHash(content, randomChar);
    const stretchedHash = stretchHash(hashedContent, finalHashLength);

    return stretchedHash;
}