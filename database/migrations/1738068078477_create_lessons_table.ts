import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'lessons'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('section_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('sections')
        .onDelete('CASCADE')
      table.string('title', 200).notNullable()
      table.text('description').nullable()
      table.string('resource', 255).notNullable()
      table.string('type_lesson', 255).notNullable()
      table.integer('position', 11).notNullable()
      table.decimal('duration').nullable()
      table.timestamp('created_at').notNullable().defaultTo(this.now())
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
