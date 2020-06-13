import Models from '../model';

class Contribution {
  static async create(req, res, next) {
    try {
      const { id } = req.params;
      const contribution = await Models().contribution.findOne('driverId', id);
      if (!contribution) return next();
      return res.status(400).json({ message: 'driver already have an account' });
    } catch (error) {
      return next(error);
    }
  }

  static async find(req, res, next) {
    try {
      const { id } = req.params;
      const contribution = await Models().contribution.findOne('driverId', id);
      if (!contribution) {
        return res.status(400).json({ message: 'driver do not have an account' });
      }
      req.contribution = contribution;
      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default Contribution;
