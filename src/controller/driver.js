import Models from '../model';
import jwt from '../utilies/jwt';

class Driver {
  static async createDriverProfile(req, res, next) {
    try {
      const body = JSON.parse(JSON.stringify(req.body));
      const driver = await Models().driver.create(body);
      const token = jwt.generateToken(driver);
      return res.status(200).json({ message: 'Driver created succesfully', driver, token });
    } catch (error) {
      return next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const body = JSON.parse(JSON.stringify(req.body));
      const driver = await Models().driver.validatePassword(body);
      if (!driver) return res.status(401).json({ message: 'invalid credentials' });
      const token = jwt.generateToken(driver);
      return res.status(200).json({ driver, token });
    } catch (error) {
      return next(error.message);
    }
  }
}

export default Driver;
