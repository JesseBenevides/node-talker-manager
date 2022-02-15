const createRandomToken = require('../utils/createRandomToken');

const loginHandler = (req, res, next) => {
  try {
    const token = createRandomToken();

    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = loginHandler;
