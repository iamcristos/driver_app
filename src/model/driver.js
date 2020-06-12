import bcrypt from 'bcrypt';
import CommonQuery from './common';
import dbConfig from '../data/dbConfig';

class Driver extends CommonQuery {
  constructor(table) {
    super(table);
    this.db = dbConfig(table);
  }

  create(body) {
    const password = bcrypt.hashSync(body.password, 12);
    return this.db.insert({ ...body, password }).returning('*');
  }

  checkDriverExists({ username }) {
    return this.findOne('username', username);
  }

  checkPlateNumber({ plateNumber }) {
    return this.findOne('plateNumber', plateNumber);
  }

  validatePassword({ username, password }) {
    return this.findOne('username', username).then((res) => {
      const confirm = bcrypt.compareSync(password, res[0].password);
      return confirm ? res[0] : null;
    });
  }
}

export default Driver;
