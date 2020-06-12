import Driver from './driver';

export default function Models() {
  return {
    driver: new Driver('drivers'),
  };
}
