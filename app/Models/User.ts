import { DateTime } from 'luxon';
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Comment from "App/Models/Comment";

export default class User extends BaseModel {

  public static table = "users";

  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string

  @column()
  public password:string

  @column()
  public email:string

  @column()
  public avatar:string

  @column()
  public total_score:number

  @column()
  public level:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

}
