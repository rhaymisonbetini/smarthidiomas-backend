import Database from '@ioc:Adonis/Lucid/Database'

export default class UserRepository {

    async getUsers() {
        return await Database.from('users').select('*')
    }

    async getUserById(id: number) {
        return await Database.from('users').select('*').where('id', id);
    }
}