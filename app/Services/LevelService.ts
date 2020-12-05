import Database from '@ioc:Adonis/Lucid/Database'

export default class LevelService {

    private maxLevel = 5;

    constructor() { }

    async verifyUpdateUserLevel(user) {

        let totalUserScore = await Database.query()
            .from('users')
            .select('total_score', 'level')
            .where('id', user);

        let level = totalUserScore[0].level
        totalUserScore = totalUserScore[0].total_score

        if (level == this.maxLevel) {
            return false;
        }

        let supostLevel = await this.verifyIfLevelUserWilltoBe(totalUserScore);

        if (level == supostLevel) {
            return false;
        }

        await this.updateUserLevel(user, supostLevel);
        return supostLevel;

    }

    async verifyIfLevelUserWilltoBe(score: any) {
        if (score >= 0 && score <= 100) return 0;

        if (score > 100 && score <= 200) return 1

        if (score > 200 && score <= 300) return 2;

        if (score > 300 && score <= 400) return 3;

        if (score > 400 && score < 500) return 4;

        if (score >= 500 ) return 5;

    }

    async updateUserLevel(user, level) {

        return await Database.query()
            .from('users')
            .where('id', user)
            .update({
                level: level
            })

    }

}