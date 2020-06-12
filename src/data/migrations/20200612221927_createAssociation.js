exports.up = function (knex) {
  return knex.schema.createTable('associations', (tbl) => {
    tbl.increments();
    tbl.string('name')
      .notNullable();
    tbl.string('location');
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
  return knex.schema.dropTableIfExists('cards');
};
