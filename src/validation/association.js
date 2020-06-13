import { body, param } from 'express-validator';

class Association {
  static create() {
    return [
      body('name').exists(),
      param('id').exists(),
    ];
  }
}

export default Association;
