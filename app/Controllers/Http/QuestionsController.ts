import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import QuestionRepository from 'App/Repositories/QuestionsRepository';

export default class QuestionsController {

    constructor(
        private questionRepository = new QuestionRepository){
    }

    async getQuestions({ params, response }: HttpContextContract) {

        try {

            let id = params.id;
            let type = params.type;

            let question = await this.questionRepository.getRandomQuestion(id, type);
            if (question) {
                return response.status(200).send(question);
            } else {
                return response.status(404).send('NOT_FOUND');
            }

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }



}
