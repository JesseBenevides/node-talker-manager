const { readFile } = require('fs/promises');

const getTalkers = async (req, res, next) => {
  try {
    const talkerList = await readFile('./talker.json', 'utf-8');
    const parsedTalkerList = JSON.parse(talkerList);
    if (parsedTalkerList.length === 0) return res.status(200).send([]);

    return res.status(200).json(parsedTalkerList);
  } catch (err) {
    next(err);
  }
};

module.exports = getTalkers;