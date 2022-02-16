const validateTalkInfos = async (req, res, next) => {
  try {
    const { talk } = req.body;

    if (!talk || !talk.rate || !talk.watchedAt) {
      return res.status(400).json({
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      });
    }
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = validateTalkInfos;