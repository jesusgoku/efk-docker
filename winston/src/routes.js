import { Router } from 'express';

import * as handlers from './handlers';

const routes = Router();

routes.get('/', handlers.index);

export default routes;