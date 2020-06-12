import Driver from './driver';
import Association from './association';

export default function Models() {
  return {
    driver: new Driver('drivers'),
    association: new Association('associations'),
  };
}
