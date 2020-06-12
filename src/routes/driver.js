import { Router } from 'express';

import Controller from '../controller/driver';
import Validation from '../validation';
import Middleware from '../middleware';

const route = Router();

route.post('/', [Validation.driver.createDriver(), Validation.validate],
  [Middleware.driver.create],
  Controller.createDriverProfile);

export default route;
