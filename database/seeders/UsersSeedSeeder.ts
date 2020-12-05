import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User';
import Env from '@ioc:Adonis/Core/Env'
import { AES } from 'crypto-ts';

export default class UsersSeedSeeder extends BaseSeeder {
  public async run() {

    await User.createMany([
      {
        name: 'Rhaymison Cristian Heleno',
        password: AES.encrypt('123456', Env.get('APP_KEY')).toString(),
        email: 'cristian@hotmail.com',
        avatar: 'https://avatars2.githubusercontent.com/u/45121694?s=460&u=44fff97784f6914ec218fbc422f73cb61be87254&v=4',
        total_score: 0,
        level: 1
      },
      {
        name: 'Alf o Et',
        password: AES.encrypt('123456', Env.get('APP_KEY')).toString(),
        email: 'alf@gmail.com',
        avatar: 'https://www.diariodaregiao.com.br/_midias/jpg/2018/08/02/20206460-1570202.jpg',
        total_score: 500,
        level: 17
      },
      {
        name: 'Kurt Cobain',
        password: AES.encrypt('123456', Env.get('APP_KEY')).toString(),
        email: 'kurt@gmail.com',
        avatar: 'https://sites.google.com/site/interacaomusical/_/rsrc/1333466103222/materias/talentos-interrompidos-antes-dos-30/kurt-cobain---nirvana/kurt1.jpg',
        total_score: 250,
        level: 9
      }
    ])
  }
}
