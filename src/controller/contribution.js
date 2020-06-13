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
      const newBalance = body.amount + history.currentBalance;
      const update = { newBalance, oldBalance: history.previousBalance, driverId };
      const contribution = await Models().contribution.addContribution(update);
      return res.status(200).json(contribution);
    } catch (error) {
      return next(error.message);
    }
  }
}

export default Association;
