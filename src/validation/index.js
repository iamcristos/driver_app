import { validationResult } from 'express-validator';

import driver from './driver';
import association from './association';

function validate(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
}

const validation = {
  driver, validate, association,
};

export default validation;
