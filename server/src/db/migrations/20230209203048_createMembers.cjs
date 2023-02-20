/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => { 
  return knex.schema.createTable("members", (table) => {
    table.bigIncrements("id")
    table.string("name").notNullable()
    table.string("birthName").notNullable()
    table.date("birthday").notNullable()
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("members")
}
