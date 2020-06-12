import Models from '../model';

class Association {
  static async create(req, res, next) {
    try {
      const { id } = req.params;
      const association = await Models().association.checkIfDriverExists(id);
      if (!association) return next();
      return res.status(400).json({ message: 'driver already resgistered' });
    } catch (error) {
      return next(error.message);
    }
  }
}

export default Association;
