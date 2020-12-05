import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserRepository from 'App/Repositories/UserRepository';

export default class UsersController {

    async getUsers({ response }: HttpContextContract) {

        try {
            let userRepository = new UserRepository;
            let users = await userRepository.getUsers();
            return response.status(200).send(users);

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }

    async getUserById({ params, response }: HttpContextContract) {
        try {

            let userId = params.id;
            let userRepository = new UserRepository();
            let user = await userRepository.getUserById(userId);

            if(user){
                return response.status(200).send(user);
            }else{
                return response.status(404).send('NOT_FOUND');
            }
        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }

    async getUserPoints({ response }: HttpContextContract) {
        try {


        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }

}
