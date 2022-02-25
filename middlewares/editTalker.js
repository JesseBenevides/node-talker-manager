const { writeTalkers, readTalkers } = require('../utils/handleFiles');

const editTalker = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;
    const { id } = req.params;
    const talkerList = await readTalkers();

    const talkerIndex = talkerList.findIndex((t) => t.id === Number(id));
    
    if (!talkerList[talkerIndex]) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    const newTalker = { id: Number(id), name, age, talk };
    talkerList[talkerIndex] = newTalker;
  
    await writeTalkers(talkerList);
    return res.status(200).json(newTalker);
  } catch (err) {
    next(err);
  }
};

module.exports = editTalker;
