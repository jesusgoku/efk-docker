import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';
import * as middleware from './middleware';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(middleware.loggerMiddleware);
app.use(routes);
app.use(middleware.errorHandler);

export default app;