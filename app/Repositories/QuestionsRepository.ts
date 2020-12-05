import Database from '@ioc:Adonis/Lucid/Database'

export default class CommentRepository {

    //metodo que pego uma pergunta aleatoria no banco de dados sem repedir a que ja foi feita
    async getRandomQuestion(id: number, type: string) {

        let query = 'SELECT  * FROM questions WHERE id != ? AND language = ? ORDER BY RAND() LIMIT 1';

        let question = await Database.rawQuery(query,[id , type]);
        let randomQuestion = question[0][0]
        return randomQuestion;
    }

}