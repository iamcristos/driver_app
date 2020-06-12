import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use(helmet());

app.use(cors());

app.use(logger('dev'));

export default app;
