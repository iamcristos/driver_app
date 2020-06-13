import { Router } from 'express';

import Controller from '../controller/contribution';
import Validation from '../validation';
import Middleware from '../middleware';
import Auth from '../middleware/auth';

const route = Router();

route.post('/contribution/:id', [Validation.contribution.create(), Validation.validate], [Auth.protectedRoute, Auth.restrictedRoute],
  [Middleware.contribution.create],
  Controller.create);

route.patch('/contributions/:id', [Validation.contribution.dailyContribution(), Validation.validate],
  [Auth.protectedRoute, Auth.restrictedRoute], [Middleware.contribution.find],
  Controller.dailyContribution);
export default route;
