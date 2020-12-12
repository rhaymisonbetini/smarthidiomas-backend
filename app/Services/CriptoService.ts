
import Env from '@ioc:Adonis/Core/Env'
import { AES } from 'crypto-ts';
import * as CryptoTS from 'crypto-ts'

export default class CristoService {

    async VerifyPasswords(passsword: string, userPassword: string) {

        let decripty = AES.decrypt(userPassword, Env.get('APP_KEY'));
        let unHasehed = decripty.toString(CryptoTS.enc.Utf8);

        if (passsword == unHasehed) {
            return true;
        } else {
            return false;
        }
    }

    async generatedToken(email: string, nome: string) {
        let keyRandomUnbreak = await this.makeid(10);
        return AES.encrypt(email + keyRandomUnbreak + nome, Env.get('APP_KEY')).toString();
    }

    async makeid(length: number) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

}