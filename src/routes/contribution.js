import { Router } from 'express';

import Controller from '../controller/association';
import Validation from '../validation';
import Middleware from '../middleware';
import Auth from '../middleware/auth';

const route = Router();

route.post('/association/:id', [Validation.association.create(), Validation.validate], [Auth.protectedRoute, Auth.restrictedRoute],
  [Middleware.association.create],
  Controller.create);


export default route;
