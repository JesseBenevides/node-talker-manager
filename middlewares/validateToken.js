const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
  
    if (!token) return res.status(401).json({ message: 'Token não encontrado' });
    
    if (token.length < 16) res.status(401).json({ message: 'Token inválido' });

    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = validateToken;
