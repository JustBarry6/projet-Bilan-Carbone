function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(401).send({ message: 'Accès refusé. Utilisateur non authentifié.' });
    }
  }
  
  module.exports = { ensureAuthenticated };