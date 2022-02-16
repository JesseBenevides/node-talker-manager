const { writeTalkers, readTalkers } = require('../utils/handleFiles');

const deleteTalker = async (req, res, next) => {
  try {
    const { id } = req.params;
    const talkerList = await readTalkers();

    const talkerIndex = talkerList.findIndex((t) => t.id === Number(id));
    
    if (!talkerList[talkerIndex]) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }

    talkerList.splice(talkerIndex, 1);
  
    await writeTalkers(talkerList);

    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = deleteTalker;
