/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("songs", (table) => {
    table.bigIncrements("id")
    table.string("title").notNullable()
    table.string("language").notNullable()
    table.bigInteger("albumId").unsigned().index().notNullable().references("albums.id")
    table.bigInteger("unitId").unsigned().index().references("units.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("songs")
}
