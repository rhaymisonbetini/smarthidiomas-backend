import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Userpoints extends BaseSchema {
  protected tableName = 'userpoints'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('user_id').unsigned()
      table.integer('english').notNullable().defaultTo(0)
      table.integer('spanish').notNullable().defaultTo(0)
      table.integer('french').notNullable().defaultTo(0)
      table.integer('Italian').notNullable().defaultTo(0)
      table.integer('russian').notNullable().defaultTo(0)
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
