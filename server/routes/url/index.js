import * as express from 'express';

import urlController from '../../controllers/url/index.js';

const urlRouter = new express.Router();

//  Маршрутизатор отвечающий за обработку запросов связанных с авторизацией.
urlRouter.post('/short_url', urlController.Short_url);

export default urlRouter;