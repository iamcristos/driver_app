import { Router } from 'express';

import Controller from '../controller/driver';
import Validation from '../validation';
import Middleware from '../middleware';
// import Auth from '../middleware/auth';

const route = Router();

route.post('/', [Validation.driver.createDriver(), Validation.validate],
  [Middleware.driver.create],
  Controller.createDriverProfile);

route.post('/login', [Validation.driver.login(), Validation.validate],
  Controller.login);

export default route;
