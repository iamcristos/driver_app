import Models from '../model';

class Driver {
  static async createDriverProfile(req, res, next) {
    try {
      const body = JSON.parse(JSON.stringify(req.body));
      const driver = await Models().driver.create(body);
      return res.status(200).json({ message: 'Driver created succesfully', driver });
    } catch (error) {
      return next(error);
    }
  }
}

export default Driver;
