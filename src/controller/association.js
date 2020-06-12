import Models from '../model';

class Association {
  static async create(req, res, next) {
    try {
      const body = JSON.parse(JSON.stringify(req.body));
      const driverId = req.params.id;
      const association = await Models().association.create({ ...body, driverId });
      return res.status(201).json(association);
    } catch (error) {
      return next(error.message);
    }
  }
}

export default Association;
