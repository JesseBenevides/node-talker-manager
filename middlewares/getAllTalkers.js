const { readTalkers } = require('../utils/handleFiles');

const getAllTalkers = async (_req, res, next) => {
  try {
    const talkerList = await readTalkers();

    if (talkerList.length === 0) return res.status(200).send([]);

    return res.status(200).json(talkerList);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllTalkers;
