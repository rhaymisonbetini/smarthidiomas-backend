import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Comments from "App/Models/Comment";

export default class CommentsSeederSeeder extends BaseSeeder {
  public async run () {

    for(let i=0; i < 30; i ++){
      await Comments.createMany([
        {
          user_id:1,
          question_id: Math.floor(Math.random() * 24),
          comment:'Pergunta muito boa e bem educativa!'
        },
        {
          user_id:2,
          question_id: Math.floor(Math.random() * 24),
          comment:'Gostei dos desafios, estou aprendendo muito a cada dia!'
        },
        {
          user_id:3,
          question_id: Math.floor(Math.random() * 24),
          comment:'Um pouco cansativa, porem muito bacana'
        }
      ])
    }
  }
}
