const express = require('express');
const router = express.Router();

const employeesController = require('../controllers/clientsController');

router.get('/clients', employeesController.listClients);

router.post('/clients', employeesController.addClient);

router.get('/clients/:id', employeesController.getClientById);

router.put('/clients/:id', employeesController.modifyClient);

router.delete('/clients/:id', employeesController.deleteClient);

module.exports = router;
