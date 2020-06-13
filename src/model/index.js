import Driver from './driver';
import Association from './association';
import Contribution from './contribution';

export default function Models() {
  return {
    driver: new Driver('drivers'),
    association: new Association('associations'),
    contribution: new Contribution('contributions'),
  };
}
