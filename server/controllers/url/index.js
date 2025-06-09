import { Urls } from '../../models/urls.js';
import {URL} from "url";

const alphabet = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
const base = alphabet.length;

function encode(num) {
    let encoded = '';
    let number = num;

    while (number) {
        const remainder = number % base;
        encoded = `${alphabet[remainder]}${encoded}`;
        number = Math.floor(number / base);
    }

    return encoded;
}

function decode(str) {
    let string = str;
    let decoded = 0;

    while (string) {
        const index = alphabet.indexOf(string[0]);
        const power = string.length - 1;
        decoded += index * Math.pow(base, power);
        string = string.substring(1);
    }

    return decoded;
}


class Url {
    //  Проверка токена авторизации.
    async Short_url(req, res, next) {
        try {
            const { url } = req.body;
            const result = await Urls.create({ url: url,});
            const { linkId } = result;
            const currentUrl = new URL(url);
            currentUrl.pathname = encode(linkId);

            res.send({ shortLink: currentUrl });
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new Url();