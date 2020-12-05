import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Comment from "App/Models/Comment"

export default class Question extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public language: string

  @column()
  public question: string

  @column()
  public score_value: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>
}
