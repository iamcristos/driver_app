import { body } from 'express-validator';

class DriverValidation {
  static createDriver() {
    return [
      body('username').isLength({ min: 2 }),
      body('password').isLength({ min: 5 }),
      body('fullName').exists(),
      body('plateNumber').isLength({ min: 4 }),
    ];
  }
}

export default DriverValidation;
