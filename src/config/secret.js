import dotenv from 'dotenv';

dotenv.config();

const secret = {
  JWT_SECRET: process.env.JWT_SECRET,
  RATE: parseFloat(process.env.RATE),
  DATABASE_URL: process.env.DATABASE_URL,
};

export default secret;
