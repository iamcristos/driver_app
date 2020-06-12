import Models from '../model';

class Driver {
  static async create(req, res, next) {
    try {
      const { body } = req;
      const response = await Promise.all([
        await Models().driver.checkDriverExists(body),
        await Models().driver.checkPlateNumber(body)]);
      const data = response.flat();
      if (data[0] && data[1]) {
        return res.status(400).json({ message: 'Driver plateNumber and username already exists' });
      }
      if (data[0]) {
        return res.status(400).json({ message: 'Driver username already exists' });
      }
      if (data[1]) {
        return res.status(400).json({ message: 'Driver plateNumber already exists' });
      }
      return next();
    } catch (error) {
      return next(error.message);
    }
  }
}

export default Driver;
