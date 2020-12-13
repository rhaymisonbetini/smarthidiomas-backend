import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Question from 'App/Models/Question';

export default class EnglishSeederSeeder extends BaseSeeder {
  public async run() {

    await Question.createMany([
      {
        language: 'ENG',
        question: 'Hello , how are you ?',
        score_value: 10
      },
      {
        language: 'ENG',
        question: 'I am a very studious person',
        score_value: 15
      },
      {
        language: 'ENG',
        question: 'Today I worked a lot',
        score_value: 12
      },
      {
        language: 'ENG',
        question: 'Dogs are faithful',
        score_value: 10
      },
      {
        language: 'ENG',
        question: 'Tomorrow I will travel in the morning',
        score_value: 20
      },
      {
        language: 'ENG',
        question: 'Good morning , have you had your breakfast ?',
        score_value: 10
      },
      {
        language: 'ENG',
        question: 'I like to study math',
        score_value: 11
      },
      {
        language: 'ENG',
        question: 'I love my family , my dad and mom are very special',
        score_value: 30
      },
    ])
  }
}
