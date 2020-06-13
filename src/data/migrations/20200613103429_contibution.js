exports.up = function (knex) {
  return knex.schema.createTable('contributions', (tbl) => {
    tbl.increments();
    tbl.integer('previousBalance')
      .defaultTo(0.00);
    tbl.integer('currentBalance')
      .defaultTo(0.00);
    tbl.integer('driverId')
      .unique()
      .unsigned()
      .references('id')
      .inTable('drivers')
      .onDelete('Cascade')
      .onUpdate('Cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('contibutions');
};
