import jwt from '../utilies/jwt';
import Models from '../model';

class Auth {
  static async protectedRoute(req, res, next) {
    try {
      const id = await jwt.validateToken(req.headers.authorization, res);
      const user = await Models().driver.findById(id);
      if (!user) return res.status(401).send('invalid token');
      req.authorizeUser = user;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static restrictedRoute(req, res, next) {
    const { id } = req.params;
    const user = req.authorizeUser.id;
    if (id !== `${user}`) {
      return res.status(403).send('unathourized');
    }
    return next();
  }
}

export default Auth;
