/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("albums", (table) => {
    table.bigIncrements("id")
    table.string("title").notNullable()
    table.string("type").notNullable()
    table.date("releaseDate").notNullable()
    table.bigInteger("unitId").unsigned().index().notNullable().references("units.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("albums")
}
