const { readTalkers } = require('../utils/handleFiles');

const searchTalker = async (req, res, next) => {
  try {
    const { q: query } = req.query;
    const talkerList = await readTalkers();

    if (!query) return res.status(200).send([]);

    const talkers = talkerList
      .filter((t) => t.name.toLowerCase().includes(query.toLowerCase()));

    return res.status(200).json(talkers);
  } catch (err) {
    next(err);
  }
};

module.exports = searchTalker;
