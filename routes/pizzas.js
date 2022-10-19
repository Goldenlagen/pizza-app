const express = require('express');
const router = express.Router();

const pizzasController = require('../controllers/pizzaController');

router.get('/pizzas', pizzasController.getAllPizzas)

router.get('/pizza/:name', pizzasController.getPizzaByName)

router.post('/pizzas', pizzasController.addPizza)

router.put('/pizza/:id', pizzasController.modifyPizza)

router.delete('/pizza/:id', pizzasController.deletePizza)

module.exports = router;