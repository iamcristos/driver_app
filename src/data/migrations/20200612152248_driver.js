exports.up = function (knex) {
  return knex.schema.createTable('drivers', (tbl) => {
    tbl.increments();
    tbl.string('username')
      .unique()
      .notNullable();
    tbl.string('password')
      .notNullable();
    tbl.string('plateNumber')
      .notNullable();
    tbl.string('fullName')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('drivers');
};
