const fs = require('fs/promises');

const filePath = ('./talker.json');

const readTalkers = async () => JSON.parse(await fs.readFile(filePath));

module.exports = { readTalkers };
