import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserPoint extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public  user_id:number;

  @column()
  public  english:number;

  @column()
  public  spanish:number;

  @column()
  public  french:number;

  @column()
  public  Italian:number;

  @column()
  public  russian:number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
