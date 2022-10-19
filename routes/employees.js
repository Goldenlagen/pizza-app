const express = require('express');
const router = express.Router();

const employeesController = require('../controllers/employeesController');

router.post('/employees', employeesController.addEmployee);

router.get('/employees', employeesController.listEmployee);

router.put('/employees/:id', employeesController.modifyEmployee);

router.delete('/employees/:id', employeesController.deleteEmployee);

module.exports = router;
