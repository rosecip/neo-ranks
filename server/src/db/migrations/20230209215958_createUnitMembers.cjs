/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("unitMembers", (table) => {
    table.bigIncrements("id")
    table.bigInteger("unitId").unsigned().notNullable().index().references("units.id")
    table.bigInteger("memberId").unsigned().notNullable().index().references("members.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("unitMembers")
}
