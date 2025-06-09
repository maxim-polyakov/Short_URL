import { DataTypes, fn } from "sequelize";
import db from "../lib/db.js";

//  Описывает способ авторизации - какого-то поставщика данных для авторизации, которым система может доверять.
export const Urls = db.define('url', {
    id: {
        type: DataTypes.UUID, primaryKey: true, defaultValue: fn('gen_random_uuid')
    },
    //  Адрес для перехода (редиректа).
    url: {
        type: DataTypes.TEXT, allowNull: false
    }
}, { timestamps: true, comment: 'Таблица с url' });