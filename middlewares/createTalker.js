const { writeTalkers, readTalkers } = require('../utils/handleFiles');

const createTalker = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;

    const talkerList = await readTalkers();

    const id = talkerList.length + 1;
    const newTalker = { id, name, age, talk };
    
    talkerList.push(newTalker);
    await writeTalkers(talkerList);

    return res.status(201).json(newTalker);
  } catch (err) {
    next(err);
  }
};

module.exports = createTalker;
