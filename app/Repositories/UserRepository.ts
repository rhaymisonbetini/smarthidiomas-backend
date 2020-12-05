import Database from '@ioc:Adonis/Lucid/Database'
import UserPoint from 'App/Models/UserPoint';

export default class UserRepository {

    async getUsers() {
        return await Database.from('users').select('*')
    }

    async getUserById(id: number) {
        return await Database.from('users')
            .select('*')
            .where('id', id);
    }

    async getUserPoints(user: any) {
        return await Database.query()
            .select('*')
            .from('userpoints')
            .where('user_id', user);
    }

    async updatePoints(user: any, points: number) {
        let query = 'UPDATE users SET total_score = total_score + ? WHERE id = ?';
        await Database.rawQuery(query, [points, user]);
        return;
    }

    async updateUserPoints(user: any, points: number, type: string) {

        let userPotins = await this.getUserPoints(user);

        if (!userPotins || userPotins.length == 0) {
            const userPts = new UserPoint();
            userPts.user_id = user;
            userPts.ENG = type == 'ENG' ? points : 0;
            userPts.ESP = type == 'ESP' ? points : 0;
            userPts.FRAN = type == 'FRAN' ? points : 0;
            userPts.ITA = type == 'ITA' ? points : 0;
            userPts.RUSS = type == 'RUSS' ? points : 0;
            userPts.save();
            return userPts;
        }

        let query = `UPDATE userpoints SET ${type} = ${type} + ? WHERE user_id = ?`;
        let updated = await Database.rawQuery(query, [points, user])
        return updated
    }
}