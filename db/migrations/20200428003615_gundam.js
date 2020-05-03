exports.up = (knex, Promise) => {
  return knex.schema.createTable('gundam', (table) => {
    table.increments('id')
    table.string('unit')
    table.string('grade')
    table.string('scale')
    table.string('price')
    table.string('picture')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('gundam')
}
