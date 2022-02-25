const fs = require('fs/promises');

const FILEPATH = ('./talker.json');

const readTalkers = async () => JSON.parse(await fs.readFile(FILEPATH));

const writeTalkers = async (talkerList) => {
  // const talkerList = await readTalkers();
  // talkerList.push(newTalker);
  await fs.writeFile(FILEPATH, JSON.stringify(talkerList));
  return talkerList;
};

module.exports = { readTalkers, writeTalkers };
