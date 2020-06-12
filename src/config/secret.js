import dotenv from 'dotenv';

dotenv.config();

const secret = {
  JWT_SECRET: process.env.JWT_SECRET,
};

export default secret;
