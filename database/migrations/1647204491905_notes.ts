import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Notes extends BaseSchema {
  protected tableName = 'notes'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('name').unique()
      table.text('description').nullable()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('name')
      table.dropColumn('description')
    })
  }
}
