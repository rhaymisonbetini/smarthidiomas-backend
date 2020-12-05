import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Question from 'App/Models/Question';

export default class SpanishSeederSeeder extends BaseSeeder {
  public async run () {
   
    await Question.createMany([
      {
        language: 'ESP',
        question: 'Estoy en la facultad de informática',
        score_value: 10
      },
      {
        language: 'ESP',
        question: "Me gusta mucho la pasta italiana",
        score_value: 15
      },
      {
        language: 'ESP',
        question: 'Ayer viajé a Roma para encontrarme con mis padrinos',
        score_value: 12
      },
      {
        language: 'ESP',
        question: 'Solía ​​caminar todos los días por la mañana',
        score_value: 10
      },
      {
        language: 'ESP',
        question: 'Tengo mucha suerte de tenerte a mi lado',
        score_value: 20
      },
      {
        language: 'ESP',
        question: 'Quiere casarse conmigo y vivir para siempre como mi esposa',
        score_value: 10
      },
      {
        language: 'ESP',
        question: "Me gustaría leer más libros de aventuras.",
        score_value: 11
      },
      {
        language: 'ESP',
        question: "Quiero visitar brasil algun dia",
        score_value: 30
      },
    ])

  }
}
