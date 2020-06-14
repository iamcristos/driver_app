import secret from '../config/secret';

function calculateInterest(amount) {
  const interest = (secret.RATE * amount) / 100;
  return parseFloat(amount) + interest;
}

export default calculateInterest;
