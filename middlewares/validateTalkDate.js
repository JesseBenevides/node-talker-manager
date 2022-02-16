const isDateValid = require('../utils/isDateValide');

const validateTalkDate = async (req, res, next) => {
  try {
    const { talk: { watchedAt } } = req.body;

    if (!isDateValid(watchedAt)) {
      return res.status(400).json({
        message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa',
      });
    }
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = validateTalkDate;
