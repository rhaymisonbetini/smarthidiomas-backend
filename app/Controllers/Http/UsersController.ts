import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserRepository from 'App/Repositories/UserRepository';
import LevelService from 'App/Services/LevelService';

export default class UsersController {

    constructor(
        private userRepository = new UserRepository,
        private leveService = new LevelService
    ) {
    }

    async getUsers({ response }: HttpContextContract) {

        try {
            let users = await this.userRepository.getUsers();
            return response.status(200).send(users);

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }

    async getUserById({ params, response }: HttpContextContract) {
        try {

            let userId = params.id;
            let user = await this.userRepository.getUserById(userId);

            if (user) {
                return response.status(200).send(user);
            } else {
                return response.status(404).send('NOT_FOUND');
            }
        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }

    async getUserPoints({ params, response }: HttpContextContract) {
        try {

            let userId = params.id;
            let userPoints = await this.userRepository.getUserPoints(userId);
            return response.status(200).send(userPoints);

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }

    async updatePoints({ request, response }: HttpContextContract) {

        try {
            const { user, points, type } = request.all();

            await this.userRepository.updatePoints(user, points);
            await this.userRepository.updateUserPoints(user, points, type);

            let isNewLevel = await this.leveService.verifyUpdateUserLevel(user);

            if (isNewLevel)
                return response.status(200).send({ newLevel: isNewLevel });
            else
                return response.status(200).send('UPDATED')

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }

}
