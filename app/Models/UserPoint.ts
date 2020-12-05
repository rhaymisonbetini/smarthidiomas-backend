import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserPoint extends BaseModel {

  public static table = 'userpoints'

  @column({ isPrimary: true })
  public id: number

  @column()
  public  user_id:number;

  @column()
  public  ENG:number;

  @column()
  public  ESP:number;

  @column()
  public  FRAN:number;

  @column()
  public  ITA:number;

  @column()
  public  RUSS:number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
