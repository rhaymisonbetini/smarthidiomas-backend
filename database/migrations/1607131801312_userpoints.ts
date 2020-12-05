import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Userpoints extends BaseSchema {
  protected tableName = 'userpoints'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('user_id').unsigned()
      table.integer('ENG').notNullable().defaultTo(0)
      table.integer('FRAN').notNullable().defaultTo(0)
      table.integer('ESP').notNullable().defaultTo(0)
      table.integer('ITA').notNullable().defaultTo(0)
      table.integer('RUSS').notNullable().defaultTo(0)
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
