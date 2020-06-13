import knex from '../data/dbConfig';
import CommonQuery from './common';

class Contribution extends CommonQuery {
  constructor(table) {
    super(table);
    this.db = knex(table);
  }

  addContribution({ newBalance, oldBalance, driverId }) {
    return knex.transaction((trx) => {
      this.db.transacting(trx)
        .where('driverId', driverId)
        .update({ currentBalance: newBalance, previousBalance: oldBalance })
        .returning('id')
        .then(([res]) => {
          const body = { amount: newBalance - oldBalance, contributionId: res };
          return knex('transactions').insert(body).returning('*');
        })
        .then((complete) => trx.commit().then(() => complete))
        .catch(trx.rollback)
        .then((resp) => resp);
    });
  }

  getAll() {
    return this.db.select('*').then((res) => (res.length ? res : null));
  }
}

export default Contribution;
