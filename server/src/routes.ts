import express from 'express';
import ClassesController from './controllers/ClassesController';
import ListItemController from './controllers/listItemController';

const routes = express.Router();

const classesController = new ClassesController();
const listItemController = new ListItemController();


routes.get('/listTotal', listItemController.index);

routes.get('/form', classesController.index);
routes.post('/form', classesController.create);

export default routes;