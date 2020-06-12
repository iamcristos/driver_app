import dbConfig from '../data/dbConfig';

class Driver {
  constructor(table) {
    this.db = dbConfig(table);
  }

  findById(id) {
    return this.db.where({ id })
      .returning('*')
      .then((ids) => (ids.length ? ids : null));
  }

  create(body) {
    return this.db.insert(body).returning('*');
  }

  updateItem(id, update) {
    return this.db
      .update(update)
      .where({ id })
      .returning('*')
      .then((res) => (res.length ? res : 'null'));
  }

  findOne(field, item) {
    return this.db.where(field, item)
      .returning('*')
      .then((ids) => (ids.length ? ids : null));
  }
}

export default Driver;
