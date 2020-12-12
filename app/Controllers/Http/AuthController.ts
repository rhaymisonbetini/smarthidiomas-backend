import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserRepository from 'App/Repositories/UserRepository';
import CriptoService from 'App/Services/CriptoService';

export default class AuthController {

    constructor(
        private userRepository = new UserRepository(),
        private criptoService = new CriptoService()
    ) {

    }

    async login({ request, response }: HttpContextContract) {

        try {

            const { email, password } = request.all();

            let user: any = await this.userRepository.getByEmail(email)

            if (user && user.length > 0) {
                let RegisteredPassword = user[0].password;
                let verify = await this.criptoService.VerifyPasswords(password, RegisteredPassword);

                if (verify) {
                    let token = await this.criptoService.generatedToken(user.email, user.nome);
                    return response.status(200).send({ user, token })
                } else {
                    return response.status(401).send('UNAUTHORIZED')
                }

            } else {
                return response.status(404).send('NOT_FOUND');
            }

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }

    }

}
