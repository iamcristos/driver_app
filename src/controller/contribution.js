import Models from '../model';

class Association {
  static async create(req, res, next) {
    try {
      const body = JSON.parse(JSON.stringify(req.body));
      const driverId = req.params.id;
      const contribution = await Models().contribution.create({ ...body, driverId });
      return res.status(201).json(contribution);
    } catch (error) {
      return next(error.message);
    }
  }

  static async dailyContribution(req, res, next) {
    try {
      const body = JSON.parse(JSON.stringify(req.body));
      const driverId = req.params.id;
      const [history] = req.contribution;
      const newBalance = +body.amount + history.currentBalance;
      const oldBalance = history.currentBalance;
      const update = { newBalance, oldBalance, driverId };
      await Models().contribution.addContribution(update);
      return res.status(200).json({ message: 'daily contribution added succesfully', newBalance, oldBalance });
    } catch (error) {
      return next(error);
    }
  }

  static async getDaily(req, res, next) {
    try {
      const driverId = req.params.id;
      const contribution = await Models().contribution.findOne('driverId', driverId);
      if (!contribution) return res.status(404).json({ message: 'no driver account found' });
      return res.status(200).json(contribution);
    } catch (error) {
      return next(error);
    }
  }
}

export default Association;
