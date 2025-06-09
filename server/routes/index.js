import express from 'express';

import urlRouter from './url/index.js';

import updateLastVisit from '../middleware/updateLastVisit.js';

const apiRouter = new express.Router();

//  Назначить обработчики маршрутизации.
apiRouter.use('/url', updateLastVisit, urlRouter);

export default apiRouter;