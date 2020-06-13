exports.up = function (knex) {
  return knex.schema.createTable('transactions', (tbl) => {
    tbl.increments();
    tbl.integer('amount')
      .notNullable();
    tbl.integer('contributionId')
      .unique()
      .unsigned()
      .references('id')
      .inTable('contributions')
      .onDelete('Cascade')
      .onUpdate('Cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('transactions');
};
