import { body, param } from 'express-validator';

class Contibution {
  static create() {
    return [
      param('id').exists(),
    ];
  }

  static dailyContribution() {
    return [
      body('amount').isNumeric(),
      param('id').exists(),
    ];
  }
}

export default Contibution;
