const { readTalkers } = require('../utils/handleFiles');

const getTalkerById = async (req, res, next) => {
  try {
    const { id } = req.params;
  
    const talkerList = await readTalkers();
    
    const talker = talkerList.find((t) => t.id === Number(id));

    if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

    return res.status(200).json(talker);
  } catch (err) {
    next(err);
  }
};

module.exports = getTalkerById;
