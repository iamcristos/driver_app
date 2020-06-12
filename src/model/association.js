import CommonQuery from './common';
import dbConfig from '../data/dbConfig';

class Association extends CommonQuery {
  constructor(table) {
    super(table);
    this.db = dbConfig(table);
  }

  checkIfDriverExists(id) {
    return this.findOne('driverId', id).then((res) => (res ? res[0] : null));
  }
}

export default Association;
