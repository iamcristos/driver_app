import CommonQuery from './common';
import dbConfig from '../data/dbConfig';

class Driver extends CommonQuery {
  constructor(table) {
    super(table);
    this.db = dbConfig(table);
  }
}

export default new Driver('drivers');
