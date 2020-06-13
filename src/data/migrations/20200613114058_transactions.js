exports.up = function (knex) {
  return knex.schema.createTable('transactions', (tbl) => {
    tbl.increments();
    tbl.integer('amount')
      .notNullable();
    tbl.timestamp('createdAt', {
      precision: 6,
    })
      .defaultTo(knex.fn.now(6));
    tbl.integer('contributionId')
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
