import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import driverRoute from './routes/driver';

const app = express();

app.use(helmet());

app.use(cors());

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/', driverRoute);

app.all('*', (req, res) => {
  res.status(404).json({
    message: "This endpoint doesn't exists",
  });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => res.status(500).json(err.message));

export default app;
