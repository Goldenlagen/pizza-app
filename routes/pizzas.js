const express = require('express');
const router = express.Router();

const pizzasController = require('../controllers/pizzaController');
const authJwt = require('../middlewares/authEmployeeJwt');

router.get('/pizzas', pizzasController.getAllPizzas)

router.get('/pizza/:name', pizzasController.getPizzaByName)

router.post('/pizzas', [authJwt.verifyToken], pizzasController.addPizza)

router.put('/pizza/:id', [authJwt.verifyToken], pizzasController.modifyPizza)

router.delete('/pizza/:id', [authJwt.verifyToken], pizzasController.deletePizza)

module.exports = router;