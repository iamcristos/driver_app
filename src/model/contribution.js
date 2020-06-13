import knex from 'knex';
import CommonQuery from './common';
import dbConfig from '../data/dbConfig';

class Contribution extends CommonQuery {
  constructor(table) {
    super(table);
    this.db = dbConfig(table);
  }

  addContribution({ newBalance, oldBalance, driverId }) {
      console.log('enter here', newBalance, oldBalance, driverId);
    return knex.transaction((trx) => {
        console.log('hello there')
      this.db.transacting(trx)
        .where('driverId', driverId)
        .update({ currentBalance: newBalance, previousBalance: oldBalance })
        .returning('id')
        .then((res) => {
          console.log(res, 'first response');
          const body = { amount: newBalance - oldBalance, contributionId: res };
          return dbConfig('transactions').insert(body).returning('*');
        })
        .then((complete) => trx.commit().then(() => complete))
        .catch(trx.rollback)
        .then((resp) => {
          console.log('DBG99 Insert Transaction complete. Returns:', resp);
          return resp; // if you want the value returned.
        })
        .catch((err) => {
          console.error('DBG89 Insert Transaction ERROR:', err);
        });
    });
  }
}

export default Contribution;
