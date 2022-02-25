const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

const validateEmail = (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }

    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = validateEmail;
