const express = require('express');
const router = express.Router();

const clientsController = require('../controllers/clientsController');
const authJwt = require('../middlewares/authEmployeeJwt');

router.get('/clients', [authJwt.verifyToken], clientsController.listClients);

router.post('/clients', clientsController.addClient);

router.get('/clients/:id', clientsController.getClientById);

router.put('/clients/:id', clientsController.modifyClient);

router.delete('/clients/:id', clientsController.deleteClient);

router.post('/clients_login', clientsController.loginClient);

module.exports = router;
