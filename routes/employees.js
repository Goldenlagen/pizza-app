const express = require('express');
const router = express.Router();

const employeesController = require('../controllers/employeesController');
const authJwt = require('../middlewares/authEmployeeJwt');

router.post('/employees', employeesController.addEmployee);

router.get('/employees', [authJwt.verifyToken], employeesController.listEmployee);

router.put('/employees/:id', [authJwt.verifyToken], employeesController.modifyEmployee);

router.delete('/employees/:id', [authJwt.verifyToken], employeesController.deleteEmployee);

router.post('/employees_login', employeesController.loginEmployee);

module.exports = router;
