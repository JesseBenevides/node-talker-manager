const isRateValid = require('../utils/isRateValid');

const validateTalkRate = async (req, res, next) => {
  try {
    const { talk: { rate } } = req.body;

    if (!isRateValid(rate)) {
      return res.status(400).json({
        message: 'O campo "rate" deve ser um inteiro de 1 à 5',
      });
    }
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = validateTalkRate;
