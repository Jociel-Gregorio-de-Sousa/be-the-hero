const express = require('express');

const SessionsController = require('./controllers/SessionsController');

const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();
routes.post('/sessions', SessionsController.create);
routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', incidentController.index);
routes.get('/profile', ProfileController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);


module.exports = routes;