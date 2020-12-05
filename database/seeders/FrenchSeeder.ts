import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Question from 'App/Models/Question';


export default class FrenchSeederSeeder extends BaseSeeder {
  public async run() {

    await Question.createMany([
      {
        language: 'FRA',
        question: 'Vous avez un joli nom',
        score_value: 10
      },
      {
        language: 'FRA',
        question: "Hier j'ai déjeuné un peu tard",
        score_value: 15
      },
      {
        language: 'FRA',
        question: 'Voudrais-tu du thé?',
        score_value: 12
      },
      {
        language: 'FRA',
        question: 'Il fait très froid en hiver',
        score_value: 10
      },
      {
        language: 'FRA',
        question: 'Les Français se baignent aussi',
        score_value: 20
      },
      {
        language: 'FRA',
        question: 'Tu me manques un peu',
        score_value: 10
      },
      {
        language: 'FRA',
        question: "J'aime vraiment les ordinateurs et Internet",
        score_value: 11
      },
      {
        language: 'FRA',
        question: "J'ai l'intention d'être un grand programmeur à l'avenir",
        score_value: 30
      },
    ])

  }
}
